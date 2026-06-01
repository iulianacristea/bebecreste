import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { getAllBlogPosts } from "@/src/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog BebeCrește | Somn bebe, mese, diversificare și rutine",
  description:
    "Articole clare pentru părinți despre somnul bebelușului, mese, diversificare, copil mofturos și rutine blânde în primii ani.",
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
    canonical: "https://bebecreste.ro/blog",
  },
  openGraph: {
    title: "Blog BebeCrește | Somn bebe, mese și rutine",
    description:
      "Ghiduri pentru părinți despre somnul bebelușilor, diversificare, mese pentru copii și rutine zilnice.",
    url: "https://bebecreste.ro/blog",
    siteName: "BebeCrește.ro",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://bebecreste.ro/blog/6monthbaby.jpeg",
        width: 1200,
        height: 630,
        alt: "Bebeluș zâmbind, pentru blogul BebeCrește",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog BebeCrește | Somn bebe și mese",
    description:
      "Ghiduri scurte pentru când bebe nu doarme, plus mese, diversificare și rutine blânde.",
    images: ["https://bebecreste.ro/blog/6monthbaby.jpeg"],
  },
};

const dateFormatter = new Intl.DateTimeFormat("ro-RO", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_#fff7f1_0%,_#ffffff_45%,_#eef9ff_100%)]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-rose-100 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-rose-700 shadow-sm backdrop-blur">
              Blog BebeCrește
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.8rem]">
              Ghiduri blânde pentru somn, mese și rutine.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Articole clare, scrise pe înțelesul părinților, pentru zilele în
              care ai nevoie de un reper simplu și calm.
            </p>
          </div>

          {featuredPost && (
            <article className="mt-12 grid overflow-hidden rounded-[2.5rem] border border-white/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.10)] lg:grid-cols-[1.05fr_0.95fr]">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="relative block min-h-[320px] overflow-hidden bg-rose-50 focus:outline-none focus:ring-4 focus:ring-rose-100 lg:min-h-[440px]"
                aria-label={featuredPost.title}
              >
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.coverAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </Link>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase">
                  <span className="rounded-full bg-rose-50 px-3 py-1 text-rose-700 ring-1 ring-rose-100">
                    Articol recomandat
                  </span>
                  <time
                    dateTime={featuredPost.date}
                    className="rounded-full bg-sky-50 px-3 py-1 text-sky-700 ring-1 ring-sky-100"
                  >
                    {dateFormatter.format(new Date(featuredPost.date))}
                  </time>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-100">
                    {featuredPost.readingTime}
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="transition hover:text-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-100"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-50 px-3 py-1 text-xs font-bold uppercase text-slate-600 ring-1 ring-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex w-fit items-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
                >
                  Citește articolul
                </Link>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Toate articolele
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Citește după ce ai nevoie azi
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500">
              Informațiile sunt orientative și nu înlocuiesc sfatul medicului.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-lg shadow-slate-100/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100/45"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-100 focus:outline-none focus:ring-4 focus:ring-rose-100"
                  aria-label={post.title}
                >
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase">
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

                  <h2 className="mt-5 text-xl font-bold leading-snug text-slate-950 transition duration-200 group-hover:text-rose-700 sm:text-2xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="focus:outline-none focus:ring-4 focus:ring-rose-100"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
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
                    className="mt-6 inline-flex w-fit items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
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
