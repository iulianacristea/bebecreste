import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { getAllBlogPosts, getBlogPostBySlug } from "@/src/lib/blogPosts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("ro-RO", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Articol negăsit | BebeCrește.ro",
      description:
        "Articolul căutat nu a fost găsit pe blogul BebeCrește.ro.",
    };
  }

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription,
    keywords: post.seoKeywords ?? [
      post.title,
      "somn bebe",
      "somn bebelus",
      "program somn bebe",
      "ferestre de veghe",
      "rutina somn copil",
      "parenting Romania",
      "sfaturi parinti",
      ...post.tags,
    ],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] text-slate-900">
      <Navbar />

      <article className="relative px-5 pb-24 pt-10 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.7),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(254,205,211,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />
        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:shadow-slate-200/70 focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-y-0"
          >
            Înapoi la blog
          </Link>

          <div className="mt-8 rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-2xl shadow-rose-200/30 sm:p-10 lg:p-12">
            <time
              dateTime={post.date}
              className="inline-flex rounded-full bg-rose-50 px-4 py-2 text-sm font-bold uppercase text-rose-700 ring-1 ring-rose-100"
            >
              {dateFormatter.format(new Date(post.date))}
            </time>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-600">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase text-sky-700 ring-1 ring-sky-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 max-w-3xl space-y-7 border-t border-rose-100 pt-10 text-lg leading-9 text-slate-700">
              {post.content.map((block) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={block.text}
                      className="pt-4 text-2xl font-bold leading-snug text-slate-950 sm:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul
                      key={block.items.join("|")}
                      className="space-y-3 rounded-[1.5rem] bg-rose-50/70 p-5 text-base leading-7 text-slate-700 ring-1 ring-rose-100 sm:p-6"
                    >
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (block.segments) {
                  return (
                    <p key={block.text}>
                      {block.segments.map((segment, index) =>
                        segment.href ? (
                          <Link
                            key={`${segment.text}-${index}`}
                            href={segment.href}
                            className="font-semibold text-rose-700 underline decoration-rose-300 underline-offset-4 transition duration-200 hover:text-rose-800 hover:decoration-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-100"
                          >
                            {segment.text}
                          </Link>
                        ) : (
                          <span key={`${segment.text}-${index}`}>
                            {segment.text}
                          </span>
                        ),
                      )}
                    </p>
                  );
                }

                return <p key={block.text}>{block.text}</p>;
              })}
            </div>

            <div className="mt-10 max-w-3xl rounded-[1.5rem] border border-rose-100 bg-gradient-to-br from-rose-50 to-sky-50 p-6 shadow-lg shadow-rose-100/50 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <p className="text-lg font-bold leading-8 text-slate-950">
                Vrei un program personalizat de somn? Încearcă calculatorul
                nostru.
              </p>
              <Link
                href="/calculator-somn"
                className="mt-5 inline-flex shrink-0 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0 sm:mt-0"
              >
                Deschide calculatorul
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
