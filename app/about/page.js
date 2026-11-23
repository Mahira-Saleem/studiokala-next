import Link from "next/link";

export const metadata = {
  title: "About | StudioKala",
  description: "A small studio dedicated to honest digital craft.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "No Bloated Templates",
    description:
      "Every layout and line of code is written specifically for your story, ensuring speed and originality.",
  },
  {
    number: "02",
    title: "Direct Collaboration",
    description:
      "You work directly with the designers and engineers building your site, with no middlemen or account managers.",
  },
  {
    number: "03",
    title: "Built to Last",
    description:
      "We focus on timeless typography, clean architecture, and accessible interfaces that age gracefully.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAF9F6] text-stone-900 min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.22em] text-amber-800/90 font-semibold">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.12]">
            A small studio dedicated to honest digital craft.
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            StudioKala started with a simple belief: the web feels better when it is made by humans, for humans.
            Over the past six years, we have partnered with founders, architects, and independent brands to turn
            complex ideas into calm, functional websites.
          </p>
        </div>

        <div className="pt-12 border-t border-stone-200/80">
          <h2 className="text-xl font-semibold mb-10">How we approach every project</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRINCIPLES.map((item) => (
              <div key={item.number} className="space-y-3">
                <span className="text-xs font-mono text-amber-800 font-semibold">{item.number}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-stone-900 text-stone-50 rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Have a project in mind?</h2>
            <p className="text-stone-400 text-sm">We are currently booking new projects for the upcoming quarter.</p>
          </div>
          <Link
            href="/contact"
            className="bg-[#FAF9F6] text-stone-900 text-sm font-medium px-6 py-3.5 rounded-full hover:bg-white transition-colors shrink-0"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </main>
  );
}
