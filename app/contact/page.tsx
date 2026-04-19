import { ArrowUpRight } from "lucide-react";

import { HeroWrapper } from "@/components/hero-wrapper";
import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <Layout>
      <HeroWrapper
        eyebrow="Contact"
        title="Partnerships, advisory, and strategic opportunities."
        description="For opportunities where brand, venture design, cultural strategy, and AI leverage need to work as a single system."
      />

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5 text-base leading-8 text-white/74">
            <p>
              This site is designed for serious conversations: growth mandates,
              strategic partnerships, advisory roles, venture formation, and
              executive-level brand transformation.
            </p>
            <p>
              If the brief involves ambiguity, pressure, and the need to align
              multiple disciplines quickly, that is usually the right starting
              point.
            </p>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-white/66">
                <span>Name</span>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2 text-sm text-white/66">
                <span>Email</span>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
                  placeholder="name@company.com"
                />
              </label>
            </div>
            <label className="mt-5 block space-y-2 text-sm text-white/66">
              <span>Opportunity</span>
              <textarea
                rows={6}
                className="w-full rounded-[1.5rem] border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
                placeholder="Partnership, advisory, venture, transformation mandate..."
              />
            </label>
            <Button className="mt-6 rounded-full px-6" size="lg" type="submit">
              Start the Conversation
              <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </form>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
