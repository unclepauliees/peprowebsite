import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/thinking", label: "Thinking" },
  { href: "/built", label: "Built" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <div className="gradient-border flex items-center justify-between rounded-full bg-black/45 px-5 py-4 backdrop-blur-xl">
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.32em] text-white/72"
          >
            Paul Estevez
          </Link>
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
        </div>
      </div>
    </header>
  );
}
