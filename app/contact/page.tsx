"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { HeroWrapper } from "@/components/hero-wrapper";
import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xwpovdvw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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

          {status === "sent" ? (
            <div className="flex items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12">
              <p className="text-center text-base leading-8 text-white/72">
                Message received. We&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-white/66">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-2 text-sm text-white/66">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
                    placeholder="name@company.com"
                  />
                </label>
              </div>
              <label className="mt-5 block space-y-2 text-sm text-white/66">
                <span>Opportunity</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-[1.5rem] border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-white/30"
                  placeholder="Partnership, advisory, venture, transformation mandate..."
                />
              </label>
              {status === "error" && (
                <p className="mt-3 text-sm text-red-400">
                  Something went wrong. Please try again or email paul@ipx.exchange directly.
                </p>
              )}
              <Button
                className="mt-6 rounded-full px-6"
                size="lg"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Start the Conversation"}
                <ArrowUpRight className="ml-2 size-4" />
              </Button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
