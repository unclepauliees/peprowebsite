"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/thinking", label: "Thinking" },
  { href: "/built", label: "Built" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <div className="gradient-border flex items-center justify-between rounded-full bg-black/45 px-5 py-4 backdrop-blur-xl">
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.32em] text-white/72"
            onClick={() => setOpen(false)}
          >
            Paul Estevez
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/58 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="flex items-center justify-center text-white/72 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="gradient-border mt-2 rounded-[1.5rem] bg-black/80 px-5 py-4 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/66 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
