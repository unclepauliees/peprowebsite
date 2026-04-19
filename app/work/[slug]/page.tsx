import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/section-wrapper";
import { ScrollExpansionHero } from "@/components/ui/scroll-expansion-hero";
import { caseStudies } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.title} | Work`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const mediaType = caseStudy.mediaType ?? "image";
  const mediaSrc = caseStudy.coverImage;
  const posterSrc = caseStudy.posterImage;

  return (
    <Layout>
      <ScrollExpansionHero
        mediaType={mediaType}
        mediaSrc={mediaSrc}
        posterSrc={posterSrc}
        bgImageSrc={caseStudy.backgroundImage}
        title={caseStudy.title}
        date={caseStudy.meta}
        scrollToExpand="Scroll to unlock the brief"
      >
        <div className="max-w-3xl space-y-6">
          <p className="max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {caseStudy.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/14 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </ScrollExpansionHero>

      <SectionWrapper
        eyebrow="Engagement"
        title={caseStudy.client}
        description={caseStudy.kicker}
      >
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-10">
            {[
              ["Problem", caseStudy.problem],
              ["Insight", caseStudy.insight],
              ["Strategy", caseStudy.strategy],
              ["Execution", caseStudy.execution],
              ["Outcome", caseStudy.outcome],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-[160px_1fr]"
              >
                <h2 className="text-sm uppercase tracking-[0.24em] text-white/42">
                  {label}
                </h2>
                <p className="max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                  Scope
                </p>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  {caseStudy.scope}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                  Impact
                </p>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-white/72">
                  {caseStudy.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
