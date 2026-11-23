import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "../data/projects";

export const metadata = {
  title: "Work | StudioKala",
  description: "Selected websites, products, and design systems we have shipped.",
};

export default function WorkPage() {
  return (
    <main className="bg-[#FAF9F6] text-stone-900 min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl space-y-4 mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-amber-800/90 font-semibold">Selected Work</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.12]">
            Crafted with patience and purpose.
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            A curated look at recent digital products, brand websites, and design systems we have shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="group border border-stone-200/90 bg-white/60 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-medium text-stone-500 mb-6">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <div className="relative aspect-[16/10] rounded-xl bg-stone-200/70 mb-6 overflow-hidden border border-stone-200/50">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h2 className="text-2xl font-semibold group-hover:text-amber-800 transition-colors">
                  {project.title}
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">{project.summary}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-800">
                  View case study
                  <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}