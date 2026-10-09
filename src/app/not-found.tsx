import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span className="wordmark">
        507-<span>AD</span>
      </span>
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>A little off route.</h1>
      <p>Let’s get you back to 507-AD.</p>
      <Link className="button" href="/">
        Back home
      </Link>
    </main>
  );
}
