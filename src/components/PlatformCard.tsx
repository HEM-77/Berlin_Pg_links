interface PlatformCardProps {
  title: string
  description: string
  cta: string
  href: string | undefined
}

export function PlatformCard({
  title,
  description,
  cta,
  href,
}: PlatformCardProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!href}
      className="card-hover group relative flex min-h-[240px] w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 text-left shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-border-subtle hover:shadow-[0_12px_32px_rgba(211,32,39,0.10)] focus:outline-none disabled:cursor-default disabled:opacity-70"
    >
      {/* Animated top line */}
      <div className="card-line" aria-hidden="true" />

      {/* Ambient glow */}
      <div className="card-ambient" aria-hidden="true" />

      <div className="relative flex h-full flex-col">
        {/* Title */}
        <h3 className="text-[1.1rem] font-semibold tracking-tight text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-[14px] leading-[1.9] text-muted-foreground">
          {description}
        </p>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-4">
          <span className="text-[14px] font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
            {cta}
          </span>

          <span
            aria-hidden="true"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 ease-out group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-[0_0_18px_rgba(211,32,39,0.28)]"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </button>
  )
}