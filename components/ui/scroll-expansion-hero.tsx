"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type ScrollExpansionHeroProps = PropsWithChildren<{
  mediaType: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  bgMediaType?: "video" | "image";
  bgPosterSrc?: string;
  title: string;
  date: string;
  scrollToExpand?: string;
  textBlend?: boolean;
}>;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function ScrollExpansionHero({
  mediaType,
  mediaSrc,
  posterSrc,
  bgImageSrc,
  bgMediaType = "image",
  bgPosterSrc,
  title,
  date,
  scrollToExpand = "Scroll to expand",
  textBlend = false,
  children,
}: ScrollExpansionHeroProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const [progress, setProgress] = useState(reduceMotion ? 1 : 0);
  const [isComplete, setIsComplete] = useState(reduceMotion);
  const touchStart = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Keep a ref so event handlers always see the latest values without re-attaching
  const stateRef = useRef({ isComplete, reduceMotion, progress });
  stateRef.current = { isComplete, reduceMotion, progress };

  useEffect(() => {
    if (reduceMotion) return;
    document.body.style.overflow = isComplete ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [isComplete, reduceMotion]);

  const applyDelta = (delta: number) => {
    if (stateRef.current.reduceMotion || stateRef.current.isComplete) return;
    setProgress((current) => {
      const next = clamp(current + delta, 0, 1);
      if (next >= 1) setIsComplete(true);
      return next;
    });
  };

  // Attach wheel + touch listeners as { passive: false } so preventDefault works.
  // Must be on window (not the section) so events from fixed/overlay elements are caught too.
  useEffect(() => {
    if (reduceMotion) return;

    const onWheel = (e: WheelEvent) => {
      if (stateRef.current.isComplete) return;
      e.preventDefault();
      applyDelta(Math.abs(e.deltaY) * 0.0016);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (stateRef.current.isComplete || touchStart.current === null) return;
      const current = e.touches[0]?.clientY ?? touchStart.current;
      const delta = touchStart.current - current;
      if (Math.abs(delta) < 4) return;
      e.preventDefault();
      applyDelta(Math.abs(delta) * 0.006);
      touchStart.current = current;
    };

    const onTouchEnd = () => { touchStart.current = null; };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [reduceMotion]);

  const mediaScale = useMemo(() => 0.72 + progress * 0.28, [progress]);
  const mediaHeight = useMemo(() => 52 + progress * 36, [progress]);
  const overlayOpacity = useMemo(() => 0.6 - progress * 0.22, [progress]);
  const panelY = useMemo(() => 42 - progress * 42, [progress]);

  return (
    <section ref={sectionRef} className="relative min-h-[220svh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        {bgMediaType === "video" ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={bgPosterSrc}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={bgImageSrc} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImageSrc})` }}
          />
        )}
        <div className="absolute inset-0 bg-black/45" />

        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(227,184,105,0.25),transparent_24%)]"
          animate={{ opacity: overlayOpacity }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        {/* ↓ pt-20 on mobile (was pt-28), restores to sm:pt-28 on tablet+ */}
        <div className="container-shell relative flex h-full flex-col justify-between pb-10 pt-20 sm:pt-28 sm:pb-14">
          <div className="absolute inset-x-5 top-28 bottom-[24svh] sm:inset-x-8 lg:inset-x-12">
            <motion.div
              className="gradient-border relative h-full overflow-hidden rounded-[2.4rem] bg-black"
              animate={{
                scale: mediaScale,
                height: `${mediaHeight}svh`,
                y: `${panelY}px`,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {mediaType === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={posterSrc}
                  className="h-full w-full object-cover"
                >
                  <source src={mediaSrc} type="video/mp4" />
                </video>
              ) : (
                <div
                  aria-label={title}
                  role="img"
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${mediaSrc})` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            </motion.div>
          </div>

          {/* ↓ pt-4 on mobile (was pt-8), restores to sm:pt-12 on tablet+ */}
          <div
            className={cn(
              "relative z-10 max-w-5xl pt-4 sm:pt-12 lg:pl-10 lg:pt-16",
              textBlend ? "mix-blend-screen" : "",
            )}
          >
            {/* ↓ space-y-3 on mobile (was space-y-5), restores to sm:space-y-5 on tablet+ */}
            <div className="max-w-4xl space-y-3 sm:space-y-5 text-left">
              {/* ↓ tracking-[0.12em] on mobile (was 0.28em), restores to sm:tracking-[0.28em] */}
              <p
                className="pl-1 text-xs uppercase tracking-[0.12em] sm:tracking-[0.28em] mix-blend-normal"
                style={{
                  color: "#22c55e",
                  opacity: 1,
                  textShadow: "0 0 10px rgba(34,197,94,0.18)",
                }}
              >
                {date}
              </p>
              {/* ↓ text-[2rem] on mobile (was 3.2rem), leading-[1.05] (was 0.94) */}
              <h1 className="max-w-4xl font-serif text-[2rem] leading-[1.05] text-white sm:text-[4.8rem] sm:leading-[0.94] lg:text-[7rem]">
                {title}
              </h1>
            </div>
            {!isComplete ? (
              <div className="mt-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/66">
                <span>{scrollToExpand}</span>
                <span className="text-white">{Math.round(progress * 100)}%</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={isComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 -mt-[18svh]"
      >
        <section className="container-shell pb-18">
          <div className="rounded-[2.4rem] border border-white/10 bg-[rgba(13,13,17,0.96)] p-8 pb-20 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-12 sm:pb-20 lg:p-16 lg:pb-20">
            {children}
          </div>
        </section>
      </motion.div>
    </section>
  );
}
