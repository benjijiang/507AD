export function Icon({
  name,
  className = "",
}: {
  name:
    | "route"
    | "elevator"
    | "notification"
    | "pause"
    | "play"
    | "reset"
    | "plus"
    | "check";
  className?: string;
}) {
  const paths = {
    route: (
      <>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M8 6h8a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h4" />
      </>
    ),
    elevator: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M12 3v18M8 9l2-2 2 2M12 15l2 2 2-2" />
      </>
    ),
    notification: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    pause: (
      <>
        <path d="M9 5v14M15 5v14" />
      </>
    ),
    play: <path d="m9 5 10 7-10 7Z" />,
    reset: (
      <>
        <path d="M4 10a8 8 0 1 1 1 8M4 4v6h6" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
