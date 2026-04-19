import type { ReactNode } from "react";

type HeroWrapperProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function HeroWrapper({
  eyebrow,
  title,
  description,
  children,
}: HeroWrapperProps) {
  return (
    <section className="container-shell pt-36 sm:pt-40">
      <div className="rounded-[2.5rem] border border-white/8 bg-white/[0.03] p-8 sm:p-10 lg:p-14">
        <div className="max-w-4xl section-grid">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
