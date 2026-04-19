import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
