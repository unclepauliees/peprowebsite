import { ArticleCard } from "@/components/article-card";
import { HeroWrapper } from "@/components/hero-wrapper";
import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/section-wrapper";
import { articles } from "@/lib/content";

export default function ThinkingPage() {
  return (
    <Layout>
      <HeroWrapper
        eyebrow="Thinking"
        title="Editorial notes on brand architecture, cultural timing, venture design, and AI leverage."
        description="A strategic publication for leaders building durable relevance in fast-moving categories."
      />

      <SectionWrapper>
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
