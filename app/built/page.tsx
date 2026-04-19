import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { HeroWrapper } from "@/components/hero-wrapper";
import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/section-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ventures } from "@/lib/content";

export default function BuiltPage() {
  return (
    <Layout>
      <HeroWrapper
        eyebrow="Built"
        title="Ventures, platforms, and ecosystems built to create new channels of enterprise value."
        description="This is the operating layer: ventures with clear strategic purpose, not side projects."
      />

      <SectionWrapper>
        <div className="grid gap-6 lg:grid-cols-3">
          {ventures.map((venture) => (
            <article
              key={venture.slug}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                  {venture.category}
                </p>
                <h2 className="font-serif text-3xl text-white">{venture.name}</h2>
                <p className="text-sm leading-7 text-white/68">
                  {venture.description}
                </p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                  Impact
                </p>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  {venture.impact}
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "mt-6 rounded-full border border-white/12 bg-white/[0.03] px-5 text-white hover:bg-white/[0.08] hover:text-white",
                  )}
                >
                  Discuss Venture Strategy
                  <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
