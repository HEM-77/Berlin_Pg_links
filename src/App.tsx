import { PlatformCard } from "./components/PlatformCard"

function App() {
  const marketplaceUrl = import.meta.env.VITE_MARKETPLACE_URL as string | undefined
  const esgUrl = import.meta.env.VITE_ESG_URL as string | undefined
  const insightsUrl = import.meta.env.VITE_INSIGHTS_URL as string | undefined

  return (
    <div className="min-h-screen bg-background page-ambient flex flex-col overflow-hidden">
      <main className="flex-1 mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 sm:py-10">
        
        {/* Header */}
        <header className="flex flex-col items-center">
          <img
            src="/berlin-logo.jpeg"
            alt="Berlin Packaging"
            className="h-20 w-auto sm:h-24"
          />

          {/* Branding */}
          <p className="mt-4 text-center text-[15px] font-semibold tracking-[0.02em] text-muted-foreground sm:text-[1.15rem]">
            Berlin Packaging
            <span className="mx-3 text-border">|</span>
            Sustainability Tools
          </p>

          {/* Enterprise Badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/90 px-5 py-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
            <span className="size-2 rounded-full bg-accent status-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Enterprise Platform
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mx-auto mt-8 max-w-5xl text-center">
          <h1 className="text-[2.7rem] font-semibold tracking-tight leading-[1.02] text-foreground sm:text-[4rem] lg:text-[4.5rem]">
            Access{" "}
            <span className="gradient-text font-bold">
              Sustainability
            </span>{" "}
            Platforms
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-[1rem] leading-[1.8] text-muted-foreground sm:text-[1.18rem]">
            Centralized access to sustainability marketplace tools, ESG supplier
            assessment systems, and sustainability intelligence platforms.
          </p>
        </section>

        {/* Cards */}
        <section
          aria-label="Sustainability platforms"
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3"
        >
          <PlatformCard
            title="Sustainability Marketplace"
            description="Discover and source sustainable packaging solutions from verified eco-conscious suppliers."
            cta="Open Marketplace"
            href={marketplaceUrl}
          />

          <PlatformCard
            title="Supplier Assessment Platform"
            description="Comprehensive ESG evaluation tools to assess supplier sustainability performance."
            cta="Open ESG Platform"
            href={esgUrl}
          />

          <PlatformCard
            title="Sustainability Insights Tool"
            description="Analytics platform for tracking corporate sustainability metrics and benchmarks."
            cta="Open Insights Tool"
            href={insightsUrl}
          />
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-border/60 pt-5">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© 2026 Packgine. All rights reserved.</p>

            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-success status-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App