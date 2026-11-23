import Link from "next/link";

export const metadata = {
  title: "Journal | StudioKala",
  description: "Notes on design, engineering, and running a small studio.",
};

const POSTS = [
  {
    id: 1,
    title: "Why we stopped using page builders",
    date: "October 2026",
    readTime: "5 min read",
    excerpt:
      "Page builders are fast on day one and slow on day one hundred. Here is what we do instead, and what it saves our clients.",
  },
  {
    id: 2,
    title: "Typography is most of the design",
    date: "August 2026",
    readTime: "4 min read",
    excerpt:
      "Before colour, before imagery, we choose type. A short look at how two typefaces and a clear scale can carry a whole website.",
  },
  {
    id: 3,
    title: "What a one-second page load changes",
    date: "May 2026",
    readTime: "6 min read",
    excerpt:
      "Speed is not just a score. We look at how faster pages changed enquiries and sales for three of our recent projects.",
  },
  {
    id: 4,
    title: "Working with a small studio: what to expect",
    date: "February 2026",
    readTime: "3 min read",
    excerpt:
      "From first call to launch day, here is how a typical project runs, who you talk to, and how long each stage takes.",
  },
];

export default function JournalPage() {
  return (
    <main className="bg-[#FAF9F6] text-stone-900 min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl space-y-4 mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-amber-800/90 font-semibold">Journal</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.12]">
            Notes from the studio.
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Short writing on design, engineering, and how we run a small studio.
          </p>
        </div>

        <div className="divide-y divide-stone-200/80 border-y border-stone-200/80">
          {POSTS.map((post) => (
            <article key={post.id} className="group py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8">
              <div className="md:col-span-3 text-sm text-stone-500">
                <p>{post.date}</p>
                <p>{post.readTime}</p>
              </div>
              <div className="md:col-span-9 space-y-2">
                <h2 className="text-2xl font-semibold group-hover:text-amber-800 transition-colors">
                  {post.title}
                </h2>
                <p className="text-stone-600 leading-relaxed max-w-2xl">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-stone-500">
          Want to talk about something you read?{" "}
          <Link href="/contact" className="underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 text-stone-800">
            Get in touch
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
