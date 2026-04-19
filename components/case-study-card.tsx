import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/lib/content";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[2rem] border border-white/10 bg-black"
    >
      {caseStudy.mediaType === "video" ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={caseStudy.posterImage}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        >
          <source src={caseStudy.coverImage} />
        </video>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${caseStudy.coverImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
      <div className="relative z-10 space-y-5 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-white/48">
          {caseStudy.meta}
        </p>
        <div className="space-y-3">
          <h3 className="max-w-xl font-serif text-3xl leading-none text-white sm:text-4xl">
            {caseStudy.title}
          </h3>
          <p className="max-w-xl text-sm leading-7 text-white/72">
            {caseStudy.summary}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/76">
          View Case Study
          <ArrowUpRight className="size-4 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
