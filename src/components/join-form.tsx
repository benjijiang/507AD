"use client";

import { useRef, useState } from "react";
import {
  MAX_RESUME_BYTES,
  RESUME_ACCEPT,
  resumeError,
} from "@/lib/application";
import { Icon } from "./icon";

export function JoinForm({ enabled }: { enabled: boolean }) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "error" | "success"
  >("idle");
  const [message, setMessage] = useState("");
  const [filename, setFilename] = useState("");
  const feedback = useRef<HTMLDivElement>(null);

  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled || status === "submitting") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const resume = data.get("resume");
    if (resume instanceof File && resume.name) {
      const error = resumeError(resume);
      if (error) {
        setStatus("error");
        setMessage(error);
        return;
      }
    }
    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch("/api/join", {
        method: "POST",
        body: data,
        signal: AbortSignal.timeout(30000),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true)
        throw new Error(
          result.error ??
            "We couldn’t send your application. Please try again.",
        );
      setStatus("success");
      setMessage(
        "Your interest has been sent to the team. Thanks for reaching out.",
      );
      form.reset();
      setFilename("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.name !== "TimeoutError"
          ? error.message
          : "The request timed out. Please try again; your entries are still here.",
      );
    }
    window.setTimeout(() => feedback.current?.focus(), 0);
  }

  return (
    <form className="join-form" onSubmit={submit} aria-describedby="form-note">
      <div className="form-heading">
        <span className="eyebrow">LET’S BUILD SOMETHING</span>
        <span>Join 507-AD</span>
      </div>
      <div className="form-row">
        <label>
          Your name <span>(optional)</span>
          <input
            name="name"
            autoComplete="name"
            maxLength={100}
            placeholder="Name"
          />
        </label>
        <label>
          Email <span className="required">*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label>
        What would you like to work on? <span>(optional)</span>
        <textarea
          name="interest"
          rows={3}
          maxLength={3000}
          placeholder="Tell us a little about your interests."
        />
      </label>
      <label className="upload-label" htmlFor="resume">
        Resume <span>(optional)</span>
      </label>
      <div className="file-field">
        <Icon name="plus" />
        <input
          id="resume"
          name="resume"
          type="file"
          accept={RESUME_ACCEPT}
          aria-describedby="resume-help"
          onChange={(event) => {
            const file = event.currentTarget.files?.[0];
            const error = file ? resumeError(file) : null;
            setFilename(file?.name ?? "");
            setMessage(error ?? "");
            setStatus(error ? "error" : "idle");
          }}
        />
        <span>{filename || "Choose a file"}</span>
        <small id="resume-help">
          PDF, DOC, DOCX · Up to {MAX_RESUME_BYTES / 1024 / 1024} MB
        </small>
      </div>
      <div className="form-note" id="form-note">
        {enabled
          ? "We’ll use these details to respond to your interest in joining 507-AD."
          : "Preview only. Applications aren’t open yet; nothing entered here is sent or saved."}
      </div>
      <button
        className="button form-submit"
        type="submit"
        disabled={!enabled || status === "submitting"}
      >
        {status === "submitting"
          ? "Sending…"
          : enabled
            ? "Send your interest"
            : "Applications opening soon"}
      </button>
      <div
        ref={feedback}
        tabIndex={-1}
        className={`form-feedback ${status}`}
        role={status === "error" ? "alert" : "status"}
      >
        {message && (
          <>
            {status === "success" && <Icon name="check" />}
            {message}
          </>
        )}
      </div>
    </form>
  );
}
