import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Paul Estevez",
    template: "%s | Paul Estevez",
  },
  description:
    "Strategic portfolio for a senior executive building brand systems, ventures, and AI-native operating models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full scroll-smooth antialiased">
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
