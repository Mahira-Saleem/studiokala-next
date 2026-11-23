import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS } from "../../data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    return { title: "Project Not Found | StudioKala" };
  }

  return {
    title: `${project.title} | StudioKala`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#FAF9F6] text-stone-900 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-950 transition-colors"
        >
          <span aria-hidden="true">←</span>
          Back to all work
        </Link>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-amber-800/90 font-semibold">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.12]">
            {project.title}
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed max-w-2xl">
            {project.summary}
          </p>
        </div>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-stone-200/70 border border-stone-200/60 shadow-lg shadow-stone-900/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-200/80">
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-[0.18em] text-amber-800 font-semibold">
              The Challenge
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">{project.challenge}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-[0.18em] text-amber-800 font-semibold">
              Our Approach
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">{project.approach}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-[0.18em] text-amber-800 font-semibold">
              The Outcome
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">{project.outcome}</p>
          </div>
        </div>
      </div>
    </main>
  );
}