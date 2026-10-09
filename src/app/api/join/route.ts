import { NextResponse } from "next/server";
import { MAX_REQUEST_BYTES, resumeError } from "@/lib/application";

export const runtime = "nodejs";

function receiver(value: string | undefined) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const endpoint = receiver(process.env.JOIN_FORM_ENDPOINT);
  if (!endpoint)
    return NextResponse.json(
      { error: "Applications aren’t open yet. Please check back later." },
      { status: 503 },
    );
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return NextResponse.json(
      { error: "Please submit through the 507-AD website." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.startsWith("multipart/form-data"))
    return NextResponse.json(
      { error: "Please use the application form." },
      { status: 415 },
    );
  // A bounded read also protects requests without a Content-Length header.
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_REQUEST_BYTES)
    return NextResponse.json(
      { error: "Please choose a resume smaller than 3 MB." },
      { status: 413 },
    );

  let data: FormData;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Missing body");
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_REQUEST_BYTES) {
        await reader.cancel();
        return NextResponse.json(
          { error: "Please choose a resume smaller than 3 MB." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    const body = new Uint8Array(length);
    let offset = 0;
    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.byteLength;
    }
    data = await new Response(body, {
      headers: { "content-type": request.headers.get("content-type")! },
    }).formData();
  } catch {
    return NextResponse.json(
      { error: "We couldn’t read the application. Please try again." },
      { status: 400 },
    );
  }

  const email = String(data.get("email") ?? "").trim();
  const name = String(data.get("name") ?? "").trim();
  const interest = String(data.get("interest") ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  if (name.length > 100 || interest.length > 3000)
    return NextResponse.json(
      { error: "Please shorten your name or message." },
      { status: 400 },
    );
  const resume = data.get("resume");
  if (resume instanceof File && resume.name) {
    const error = resumeError(resume);
    if (error) return NextResponse.json({ error }, { status: 400 });
  }
  const payload = new FormData();
  payload.set("email", email);
  payload.set("name", name);
  payload.set("interest", interest);
  const headers: Record<string, string> = {};
  if (process.env.JOIN_FORM_TOKEN)
    headers.Authorization = `Bearer ${process.env.JOIN_FORM_TOKEN}`;
  try {
    if (resume instanceof File && resume.name) {
      const upload = receiver(process.env.RESUME_UPLOAD_HANDLER);
      if (process.env.RESUME_UPLOAD_HANDLER && !upload)
        throw new Error("Invalid upload configuration");
      if (upload) {
        const fileData = new FormData();
        fileData.set("resume", resume);
        const uploaded = await fetch(upload, {
          method: "POST",
          body: fileData,
          headers,
          redirect: "error",
          signal: AbortSignal.timeout(10000),
        });
        if (!uploaded.ok) throw new Error("Upload failed");
        const result: { resumeUrl?: string } = await uploaded.json();
        const resumeUrl = receiver(result.resumeUrl);
        if (!resumeUrl) throw new Error("Invalid resume response");
        payload.set("resumeUrl", resumeUrl);
      } else payload.set("resume", resume);
    }
    const response = await fetch(endpoint, {
      method: "POST",
      body: payload,
      headers,
      redirect: "error",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("Receiver rejected application");
    return NextResponse.json({ ok: true });
  } catch {
    // Do not expose upstream details, credentials or submitted personal data.
    return NextResponse.json(
      {
        error:
          "We couldn’t confirm your application was received. Please try again.",
      },
      { status: 502 },
    );
  }
}
