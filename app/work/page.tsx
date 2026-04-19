import { CaseStudyCard } from "@/components/case-study-card";
import { HeroWrapper } from "@/components/hero-wrapper";
import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/section-wrapper";
import { caseStudies } from "@/lib/content";

export default function WorkPage() {
  return (
    <Layout>
      <HeroWrapper
        eyebrow="Case Studies"
        title="Work shaped at the intersection of category creation, brand systems, and business design."
        description="A focused view of how strategy, creative direction, and operating structure come together when the stakes are enterprise-level."
      />

      <SectionWrapper>
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
