import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ArticleCard } from "@/components/article-card";
import { CaseStudyCard } from "@/components/case-study-card";
import { HeroWrapper } from "@/components/hero-wrapper";
import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/section-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollExpansionHero } from "@/components/ui/scroll-expansion-hero";
import { articles, caseStudies, ventures } from "@/lib/content";

export default function HomePage() {
  return (
    <Layout>
      <ScrollExpansionHero
        mediaType="video"
        mediaSrc="https://github.com/unclepauliees/peprowebsite/releases/download/v1.0-media/untitled-design.mp4"
        posterSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80"
        bgImageSrc="https://github.com/unclepauliees/peprowebsite/releases/download/v1.0-media/pepsi-hbcu-short.mp4"
        bgMediaType="video"
        bgPosterSrc="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
        title="Building brands with operator discipline and cultural leverage."
        date="Chief Brand / Creative / Strategy Officer"
        scrollToExpand="Scroll to enter"
        textBlend
      >
        <div className="max-w-2xl space-y-6">
          <p className="text-sm uppercase tracking-[0.28em] text-white/58">
            Nike, Pepsi, Microsoft, Ford, Moet-Hennessy, WPP, Pfizer, IPX,
            Cannabinoid Water
          </p>
          <p className="text-lg leading-8 text-white/76 sm:text-xl">
            Twenty years across fashion, technology, media, fintech, and CPG.
            The focus is not visibility. It is building systems, ventures, and
            cultural momentum that compound.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#work-preview"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-7",
              )}
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "ghost" }),
                "rounded-full border border-white/14 bg-white/6 px-7 text-white hover:bg-white/12 hover:text-white",
              )}
            >
              Strategic Opportunities
              <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </ScrollExpansionHero>

      <HeroWrapper
        eyebrow="Positioning"
        title="Built across iconic brands, agency platforms, category launches, and emerging IP infrastructure."
        description="From FUBU, Microsoft, Xbox, and Moet-Hennessy to Pepsi, Ford, Home Depot, and IPX, the throughline is consistent: build brands, ventures, and operating systems that move culture and business at the same time."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Leadership across global brands, holding-company agencies, and founder-led ventures.",
            "A track record spanning brand strategy, creative, content, live experience, and venture building.",
            "Experience building and scaling agencies, launching new categories, and shaping the future of tokenized IP.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-white/72"
            >
              {item}
            </div>
          ))}
        </div>
      </HeroWrapper>

      <SectionWrapper
        id="work-preview"
        eyebrow="Selected Work"
        title="Mandates where brand, growth, and cultural relevance had to move together."
        description="A cross-section of system-level thinking across venture building, repositioning, and category design."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Thinking"
        title="Frameworks for executives navigating brand, IP, culture, and AI."
        description="Editorial notes built for decision-makers, not algorithms."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Built"
        title="Ventures and operating platforms designed to outlive campaigns."
        description="A portfolio of ventures, infrastructure, and ecosystems designed for durable advantage."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {ventures.map((venture) => (
            <article
              key={venture.slug}
              className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                  {venture.category}
                </p>
                <h3 className="font-serif text-3xl text-white">
                  {venture.name}
                </h3>
                <p className="text-sm leading-7 text-white/66">
                  {venture.description}
                </p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/60">
                {venture.impact}
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
