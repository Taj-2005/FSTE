import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { ProblemFraming } from "@/components/problem-framing";
import { CausalLoopDiagram } from "@/components/causal-loop-diagram";
import { EPSAnalysis } from "@/components/eps-analysis";
import { LeveragePoints } from "@/components/leverage-points";
import { SystemsArchetypes } from "@/components/systems-archetypes";
import { DataDashboard } from "@/components/data-dashboard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="container py-10 md:py-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Systemic Barriers and Leverage Points
            </h1>
            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Enhancing Interdisciplinary Learning in Indian Higher Education
            </p>
          </div>
        </section>
        
        <ProblemFraming />
        <CausalLoopDiagram />
        <EPSAnalysis />
        <LeveragePoints />
        <SystemsArchetypes />
        <DataDashboard />
      </main>
      <SiteFooter />
    </div>
  );
}
