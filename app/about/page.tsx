import { HeroWrapper } from "@/components/hero-wrapper";
import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/section-wrapper";

const principles = [
  "Build systems that make talent, content, and capital move together.",
  "Use brand as operating infrastructure, not campaign output.",
  "Design cultural relevance with commercial intent.",
  "Treat AI as a force multiplier for clarity, speed, and precision.",
];

export default function AboutPage() {
  return (
    <Layout>
      <HeroWrapper
        eyebrow="About"
        title="An operating philosophy shaped by brand, venture design, and category-building across multiple industries."
        description="The work has always centered on one idea: when narrative, system design, and distribution align, organizations move faster and scale cleaner."
      />

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-base leading-8 text-white/76 sm:text-lg">
            <p>
              Over two decades, the mandate has remained consistent even as the
              industries changed: build platforms that translate ambition into
              traction. That has meant shaping brands, launching ventures,
              designing agency ecosystems, and helping executives turn cultural
              intuition into repeatable strategic advantage.
            </p>
            <p>
              The lens is cross-functional by design. Creative direction is not
              separated from commercial outcomes. Brand systems are not
              separated from product architecture. AI is not treated as a
              novelty layer, but as a new operating discipline for research,
              workflow, and execution.
            </p>
            <p>
              The result is a practice built for organizations that need
              synthesis more than specialization: founders, leadership teams,
              venture platforms, and enterprise operators navigating inflection
              points.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-white/42">
              Guiding Principles
            </p>
            <div className="mt-6 space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-[1.5rem] border border-white/8 bg-black/30 p-5 text-sm leading-7 text-white/70"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
