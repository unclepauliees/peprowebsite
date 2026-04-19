import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("container-shell py-16 sm:py-20", className)}>
      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-3xl space-y-5">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? (
            <h2 className="font-serif text-4xl leading-none text-white sm:text-5xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="text-base leading-8 text-white/65 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      )}
      {children}
    </section>
  );
}
