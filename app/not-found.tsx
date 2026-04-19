import Link from "next/link";

import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/section-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <Layout>
      <SectionWrapper
        eyebrow="404"
        title="That page is outside the current portfolio system."
        description="The destination may have moved, or it may not be part of the public surface."
      >
        <Link
          href="/"
          className={cn(buttonVariants(), "rounded-full px-6")}
        >
          Return Home
        </Link>
      </SectionWrapper>
    </Layout>
  );
}
