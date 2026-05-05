import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { getAllBlogPosts } from "@/src/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog parenting | Somn bebe, mese și rutine",
  description:
    "Ghiduri scurte și practice pentru momentele când bebe nu doarme, plus articole despre diversificare mese copil și rutine blânde.",
  keywords: [
    "bebe nu doarme",
    "somn bebe",
    "program somn bebe",
    "calculator somn bebe",
    "diversificare mese copil",
    "planner mese bebe",
    "ferestre de veghe",
    "rutina somn bebelus",
    "alimente diversificare",
    "parenting Romania",
    "sfaturi parinti",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog parenting | BebeCrește.ro",
    description:
      "Articole pentru părinți despre somnul bebelușilor, bebe nu doarme, diversificare și rutine zilnice.",
    url: "/blog",
    images: [
      {
        url: "/blog/6monthbaby.jpeg",
        width: 1200,
        height: 630,
        alt: "Bebeluș zâmbind, pentru blogul BebeCrește",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog parenting | BebeCrește.ro",
    description:
      "Ghiduri scurte pentru când bebe nu doarme, plus mese, diversificare și rutine blânde.",
    images: ["/blog/6monthbaby.jpeg"],
  },
};

const dateFormatter = new Intl.DateTimeFormat("ro-RO", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <section className="relative px-5 pb-24 pt-10 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.7),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(254,205,211,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl pt-4">
            <p className="mb-5 inline-flex rounded-full border border-rose-200 bg-white/70 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm">
              Blog BebeCrește
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Articole pentru ritmuri mai calme în fiecare zi.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Ghiduri scurte despre somn, rutine și repere blânde pentru
              primii ani.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/90 shadow-xl shadow-rose-200/25 transition duration-300 hover:-translate-y-1.5 hover:border-rose-100 hover:bg-white hover:shadow-2xl hover:shadow-rose-200/45"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-300 via-sky-200 to-emerald-200 opacity-80" />
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-rose-50 focus:outline-none focus:ring-4 focus:ring-rose-100"
                  aria-label={post.title}
                >
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-normal">
                    <time
                      dateTime={post.date}
                      className="rounded-full bg-sky-50 px-3 py-1 text-sky-700 ring-1 ring-sky-100"
                    >
                      {dateFormatter.format(new Date(post.date))}
                    </time>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-100">
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold leading-snug text-slate-950 transition duration-200 group-hover:text-rose-700">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="focus:outline-none focus:ring-4 focus:ring-rose-100"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold uppercase text-rose-700 ring-1 ring-rose-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-7 inline-flex w-fit items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
                  >
                    Citește articolul
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
