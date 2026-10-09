# 507-AD website

An English, single-page website built with **Next.js App Router, React and TypeScript**, ready for GitHub and Vercel. It introduces the entrance-to-room delivery concept, the two-person team, development progress, meeting contact and recruitment.

## Run locally

Use Node.js 20.9+ (Node.js 24 LTS recommended).

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## GitHub → Vercel

Commit the source, `package.json` and `package-lock.json`. `.gitignore` excludes dependencies, build output and secrets. Push this project to your GitHub repository, then import it in Vercel:

1. Choose the repository. If this folder is the repository root, leave **Root Directory** at its default.
2. Framework preset: **Next.js**. Build command: `npm run build`. Output directory: default.
3. Use Node.js 24 LTS. Add the environment variables below when available.
4. Deploy. Vercel provides a `*.vercel.app` address; no custom domain is required.

No `vercel.json`, database or robot API is required. Vercel runs `/api/join` as a Node.js function when a real receiver is configured. Importing the repository alone does **not** connect meeting booking, email or applications.

## Contact and application configuration

| Environment variable                  | Purpose                                                                                        |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                | Production HTTPS origin for canonical metadata.                                                |
| `NEXT_PUBLIC_MEETING_BOOKING_URL`     | Real HTTPS booking URL. Opens in a new tab.                                                    |
| `NEXT_PUBLIC_CONTACT_EMAIL`           | Team-confirmed public email. Enables email links and meeting-by-email fallback.                |
| `JOIN_FORM_ENDPOINT`                  | Server-only HTTPS endpoint that accepts an application as `multipart/form-data`.               |
| `JOIN_FORM_TOKEN`                     | Optional server-only Bearer token for the receiver(s).                                         |
| `RESUME_UPLOAD_HANDLER`               | Optional server-only HTTPS resume upload endpoint. Omit to send the file with the application. |
| `NEXT_PUBLIC_SHOW_ASSET_PLACEHOLDERS` | Default `true` for review. Set `false` to omit empty media slots on a public site.             |

Public variables are included at build time: redeploy after changing them. No real contact details or credentials were provided in the source brief, so the default configuration deliberately disables submissions and explains this beside the form. Booking buttons lead to the contact section until configured. The form never stores entries locally or reports a fictional success.

### Receiver contract

`POST /api/join` validates email, field lengths and an optional PDF/DOC/DOCX resume (up to **3 MB**, leaving space under Vercel's request-size limit). It bounds the incoming stream and forwards only validated fields. Resume extension/size checks do not replace file scanning at the storage receiver. Redirects are rejected, upstream calls time out, and upstream errors return a retry message while the form retains entries.

Without a separate upload handler, `JOIN_FORM_ENDPOINT` receives:

```text
Content-Type: multipart/form-data; boundary=...
email       required
name        optional
interest    optional
resume      optional binary file
```

Return a **2xx HTTP response only after accepting/storing the application**. Other responses produce an error in the UI. The site itself does not persist applications.

With `RESUME_UPLOAD_HANDLER`, the server first sends `multipart/form-data` containing `resume`. The handler must return a 2xx JSON response:

```json
{ "resumeUrl": "https://your-service.example/private-resume-reference" }
```

The application endpoint then receives `resumeUrl` instead of the file. The upload receiver must own access controls, file validation, retention and cleanup of uploads if the later application request fails. Use a combined application receiver when possible to keep acceptance atomic. If `JOIN_FORM_TOKEN` is set, the same Bearer token is attached to both configured receivers. Integrate only trusted endpoints under the team's control.

Before enabling collection, confirm that the text below the form matches your actual data use and retention, and configure your receiver's abuse protection. No external collection service has been selected or enabled in this delivery.

## Replace media

All media intentionally start as `null`. **No robot, dorm scene, team portrait or test video has been invented.**

1. Add supplied files in `public/media/`.
2. Edit `src/lib/media.ts`. Each media entry records its source, type and optional CAD version.
3. Set the corresponding entry to an object:

```ts
hero: {
  src: "/media/robot-hero.webp",
  alt: "Three-quarter view of the 507-AD robot exterior",
  kind: "cad",
  source: "Team-supplied exterior CAD render",
  version: "Your actual product version",
},
```

Use `kind: "concept"` for AI-generated/composited scenes so the site labels them **Concept visualization**. Only use real photos for team portraits. Keep all CAD imagery and the GLB on the same product version. Prefer WebP/AVIF, hero images around 200–500 KB and an optimized GLB around 5 MB or less.

Set `robotModel` in the same file to `{ src: "/media/robot.glb", version: "…", source: "…" }` and add `robotPoster`. The Google model-viewer library and WebGL are loaded **only when visitors choose Explore in 3D**. The viewer supports drag/keyboard rotation, limited camera angles, reset and static view. Rotation stops after interaction, offscreen and under reduced motion. Failed models retain the poster and offer retry. The product text remains readable independently of the model.

Optional slots for delivery flow, dorm environment, team photo, hardware progress and real test video render when supplied. Video uses native controls and is not autoplayed. Geometric hotspots are intentionally absent until the actual CAD is supplied and structures can be verified.

## Visual style and image slots

The frontend uses a black/white editorial style, based on the supplied OpenAI website screenshot. Empty image slots are simple rectangular color fields: blue/lavender in the hero, blue/cyan for the robot, green/blue for dorm life. There are no arch-shaped frames, giant watermark labels or decorative corner marks.

Set an asset in `src/lib/media.ts` to replace its color field with the supplied image. Image proportions stay reserved. CAD renders default to `contain`; photos/concept scenes default to `cover`. Add `fit: "cover"` or `fit: "contain"` to an individual asset to override this. The previous cursor effects, journey slider, capability demos and scene tabs have been removed; the original three-step explanation, viewer and static content structure are restored.

## Scroll motion

GSAP + ScrollTrigger add scroll-linked movement while preserving browser scrolling and the black/white/color-field design:

- Hero copy and media drift gently at different rates as they leave the viewport.
- Section headings enter once; story paragraphs, team cards and progress items enter in small staggered groups.
- On fine-pointer desktops at least 1000px wide and 740px high, the robot image/viewer briefly pins while the existing three feature descriptions pass beside it. The pin ends within its own section; no scroll snapping or wheel interception is used.
- Ambient images/color fields have a small clipped vertical parallax.
- The closing heading reveals through a short vertical mask.

Touch/smaller screens use only short entrance animations. Reduced motion disables all GSAP animation and pinning. Content remains visible and in a normal layout without JavaScript. Match-media cleanup removes styles and spacers when preferences or viewport conditions change. Existing flow tabs, the viewer and form controls keep their original behavior. Fonts and changing product dimensions trigger a position refresh.

Motion configuration lives in `src/components/scroll-motion.tsx`, with the desktop pinned layout in `src/app/scroll-motion.css`. Future configured images use the same media slots and inherit their scroll treatment.

## Content and design

- `src/lib/site.ts`: copy, team, FAQ, steps, feature goals and public link configuration.
- `src/lib/media.ts`: asset manifest and future GLB connection.
- `src/app/page.tsx`: single-page structure.
- `src/app/globals.css`: tokens, layouts and responsive styling.
- `src/components/`: navigation, flow demo, model viewer and join form.
- `src/app/api/join/route.ts`: server-side receiver adapter.
- `docs/`: the three supplied references, retained as project context.

The latest content brief overrides older design-copy defaults: **room-door destination**, **Book a meeting** as the primary action, Ben Jiang and Timmy Ma as the only team members, and **In development** throughout. Lauder is the target for a first complete MVP journey, not an approved pilot or institutional endorsement. Progress copy is the team's October 2026 snapshot and should be refreshed before publishing.

The page includes sticky anchor navigation, mobile menu Escape/focus handling, a keyboard-operable three-step demo with optional play/pause, native FAQ disclosure controls, visible focus, labelled form fields and reduced-motion behavior. Geist fonts are bundled locally, with no external font request.

## Before a public launch

- Supply the real booking link and public email; confirm that all CTA paths work.
- Connect and verify the application receiver and optional upload handler before enabling submissions.
- Replace media placeholders or set `NEXT_PUBLIC_SHOW_ASSET_PLACEHOLDERS=false`.
- Refresh development status and verify the factual copy with the team.
- Set `NEXT_PUBLIC_SITE_URL` to the deployed origin and redeploy.

The project is code-ready for deployment. Actual GitHub pushing, public deployment, supplied media integration and live form delivery are separate from this source handoff.
