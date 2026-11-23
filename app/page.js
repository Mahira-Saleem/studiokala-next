import Link from "next/link";
import Image from "next/image";

const STUDIO_STATS = [
  { value: "40+", label: "Projects shipped" },
  { value: "6 yrs", label: "Design experience" },
];

export default function Home() {
  return (
    <main className="bg-[#FAF9F6] text-stone-900 min-h-[calc(100vh-80px)] flex items-center selection:bg-amber-200/60">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <p className="text-xs uppercase tracking-[0.22em] text-amber-800/90 font-semibold">
            Digital Design &amp; Engineering Studio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.1]">
            Thoughtful websites built for brands that care about craft.
          </h1>

          <p className="text-stone-600 text-lg leading-relaxed max-w-xl">
            Instead of templates and shortcuts, we design clean, fast, and
            human-centered digital products tailored for your brand.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-1">
            <Link
              href="/work"
              className="bg-stone-900 text-stone-50 text-sm font-medium px-7 py-3.5 rounded-full hover:bg-stone-800 active:scale-[0.98] transition-all duration-200 shadow-sm"
            >
              Explore our work
            </Link>

            <Link
              href="/about"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-stone-700 hover:text-stone-950 px-3 py-3 transition-colors"
            >
              <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors">
                How we work
              </span>
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>

          <div className="pt-8 border-t border-stone-200/80 flex items-center gap-10">
            {STUDIO_STATS.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-10">
                <div>
                  <span className="block text-2xl font-semibold tracking-tight">{stat.value}</span>
                  <span className="text-sm text-stone-500">{stat.label}</span>
                </div>
                {index === 0 && <div className="h-9 w-px bg-stone-200/90" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual Frame */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden bg-stone-200/70 aspect-[4/5] shadow-2xl shadow-stone-900/10 ring-1 ring-stone-900/5">
            <Image
              src="/Minimalist.avif"
              alt="Minimalist architectural studio workspace"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>

          <Link
            href="/work/kala-architecture"
            className="hidden sm:block absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-sm border border-stone-200/90 p-4 rounded-xl shadow-lg shadow-stone-900/5 max-w-[240px] hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-medium text-stone-500">Latest Launch</p>
            </div>
            <p className="text-sm font-semibold mt-1 group-hover:text-amber-800 transition-colors">
              Kala Architecture — 2026
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
