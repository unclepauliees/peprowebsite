import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/8 pb-10 pt-16">
      <div className="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="space-y-3">
          <p className="eyebrow">Paul Estevez</p>
          <p className="max-w-xl text-sm leading-7 text-white/58">
            Strategic operator across brand systems, cultural strategy, venture
            building, and AI-native workflows.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/52">
          <Link href="/work" className="hover:text-white">Work</Link>
          <Link href="/thinking" className="hover:text-white">Thinking</Link>
          <Link href="/built" className="hover:text-white">Built</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
