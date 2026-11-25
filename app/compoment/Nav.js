"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DOCK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-4 flex items-center justify-between bg-[#FAF9F6]/85 backdrop-blur-md border-b border-stone-200/50">
        <Link href="/" className="flex items-center gap-2.5 text-stone-900 group">
          <svg
            className="w-6 h-6 text-amber-700 group-hover:rotate-90 transition-transform duration-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 6c4 0 4 12 8 12s4-12 8-12" />
            <path d="M4 18c4 0 4-12 8-12s4 12 8 12" />
          </svg>
          <span className="text-lg font-semibold tracking-wider uppercase">
            Studio<span className="font-light text-stone-500">Kala</span>
          </span>
        </Link>

        <Link
          href="/contact"
          className="flex items-center gap-3 pl-4 pr-1.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-md hover:border-amber-500/50 transition-all duration-300 group"
        >
          <span className="text-xs font-medium text-zinc-200 group-hover:text-white">Contact us</span>
          <span className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center group-hover:bg-amber-500 group-hover:scale-105 transition-all">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </span>
        </Link>
      </header>

      <nav aria-label="Primary" className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 w-max max-w-[92vw]">
        <ul className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-2xl bg-zinc-900/85 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/30">
          {DOCK_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    active ? "bg-white/10 text-white" : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                  }`}
                >
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}