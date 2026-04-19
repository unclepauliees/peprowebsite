import type { Article } from "@/lib/content";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.24em] text-white/42">
          {article.category} / {article.date}
        </p>
        <h3 className="font-serif text-3xl leading-none text-white">
          {article.title}
        </h3>
        <p className="text-sm leading-7 text-white/66">{article.excerpt}</p>
      </div>
    </article>
  );
}
