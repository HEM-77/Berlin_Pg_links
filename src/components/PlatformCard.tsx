interface PlatformCardProps {
  title: string
  description: string
  cta: string
  href: string | undefined
}

export function PlatformCard({ title, description, cta, href }: PlatformCardProps) {
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
      className="card-hover group relative flex w-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 text-left shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03),0_12px_32px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-border-subtle hover:shadow-[0_8px_20px_rgba(0,0,0,0.08),0_20px_48px_rgba(211,32,39,0.12),0_0_0_1px_rgba(211,32,39,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-default disabled:opacity-70 sm:p-7"
    >
      {/* Animated sweep line */}
      <div className="card-line" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      {/* Ambient glow */}
      <div className="card-ambient" aria-hidden="true" />

      {/* Inner gradient overlay */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
        aria-hidden="true" 
      />

      <div className="relative flex h-full flex-col">
        {/* Title */}
        <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-muted-foreground sm:text-sm sm:leading-relaxed">
          {description}
        </p>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-4">
          <span className="text-[13px] font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
            {cta}
          </span>
          <span
            aria-hidden="true"
            className="inline-flex size-7 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-[0_0_16px_rgba(211,32,39,0.35)]"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
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
