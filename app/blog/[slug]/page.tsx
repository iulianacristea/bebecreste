import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { EmailCapture } from "@/src/components/EmailCapture";
import { Footer } from "@/src/components/Footer";
import { MobileStickyCta } from "@/src/components/MobileStickyCta";
import { Navbar } from "@/src/components/Navbar";
import type { BlogContentBlock, BlogPost } from "@/src/lib/blogPosts";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/src/lib/blogPosts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("ro-RO", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

type FaqItem = {
  question: string;
  answer: string;
};

type FaqPageJsonLd = {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
};

type BreadcrumbListJsonLd = {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }[];
};

const faqSectionHeadings = [
  "faq",
  "întrebări frecvente",
  "intrebari frecvente",
];

function isQuestionHeading(text: string) {
  return text.trim().endsWith("?");
}

function isFaqSectionHeading(text: string) {
  const normalizedText = text.trim().toLocaleLowerCase("ro-RO");

  return faqSectionHeadings.some((heading) =>
    normalizedText.includes(heading),
  );
}

function getBlockPlainText(block: BlogContentBlock) {
  if (block.type === "paragraph") {
    return block.segments
      ? block.segments.map((segment) => segment.text).join("")
      : block.text;
  }

  if (block.type === "list") {
    return block.items.join(" ");
  }

  return "";
}

function getFaqItems(content: BlogContentBlock[]) {
  const collectQuestionAtIndex = (index: number): FaqItem | null => {
    const block = content[index];

    if (block.type !== "heading") {
      return null;
    }

    if (!isQuestionHeading(block.text)) {
      return null;
    }

    const answerParts: string[] = [];

    for (
      let nextBlockIndex = index + 1;
      nextBlockIndex < content.length;
      nextBlockIndex += 1
    ) {
      const nextBlock = content[nextBlockIndex];

      if (nextBlock.type === "heading") {
        break;
      }

      const nextBlockText = getBlockPlainText(nextBlock);

      if (nextBlockText) {
        answerParts.push(nextBlockText);
      }
    }

    const answer = answerParts.join(" ");

    if (!answer) {
      return null;
    }

    return {
      question: block.text,
      answer,
    };
  };

  const explicitFaqHeadingIndex = content.findIndex(
    (block) => block.type === "heading" && isFaqSectionHeading(block.text),
  );

  if (explicitFaqHeadingIndex >= 0) {
    return content
      .slice(explicitFaqHeadingIndex + 1)
      .map((_, slicedIndex) =>
        collectQuestionAtIndex(explicitFaqHeadingIndex + 1 + slicedIndex),
      )
      .filter((item): item is FaqItem => Boolean(item));
  }

  const questionGroups: number[][] = [];
  let currentQuestionGroup: number[] = [];

  content.forEach((block, index) => {
    if (block.type !== "heading") {
      return;
    }

    if (isQuestionHeading(block.text)) {
      currentQuestionGroup.push(index);
      return;
    }

    if (currentQuestionGroup.length > 0) {
      questionGroups.push(currentQuestionGroup);
      currentQuestionGroup = [];
    }
  });

  if (currentQuestionGroup.length > 0) {
    questionGroups.push(currentQuestionGroup);
  }

  const faqLikeQuestionGroup = questionGroups
    .filter((group) => group.length >= 3)
    .at(-1);

  if (!faqLikeQuestionGroup) {
    return [];
  }

  return faqLikeQuestionGroup
    .map((index) => collectQuestionAtIndex(index))
    .filter((item): item is FaqItem => Boolean(item));
}

function getFaqJsonLd(faqItems: FaqItem[]): FaqPageJsonLd | null {
  if (faqItems.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function getBreadcrumbJsonLd(post: BlogPost): BreadcrumbListJsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `/blog/${post.slug}`,
      },
    ],
  };
}

function stringifyJsonLd(jsonLd: FaqPageJsonLd | BreadcrumbListJsonLd) {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}

function ArticleCta({
  cta,
  placement,
}: {
  cta: BlogPost["cta"];
  placement: "inline" | "end";
}) {
  const isEndPlacement = placement === "end";

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-lg shadow-slate-100/80 ${
        isEndPlacement
          ? "mt-8 sm:p-6"
          : "my-9 sm:p-6"
      }`}
    >
      <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-rose-300 via-sky-200 to-emerald-200" />
      <div className="flex flex-col gap-5 pl-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-normal text-rose-700">
            Un reper util
          </p>
          <p className="mt-2 text-base font-semibold leading-7 text-slate-800 sm:text-lg">
            {cta.text}
          </p>
        </div>
        <Link
          href={cta.href}
          className="inline-flex w-full shrink-0 justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/15 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0 sm:w-auto"
        >
          {cta.buttonText}
        </Link>
      </div>
    </div>
  );
}

function AuthorBox() {
  return (
    <div className="mt-8 rounded-[1.5rem] border border-sky-100 bg-sky-50/70 p-5 text-slate-700 ring-1 ring-white/80 sm:p-6">
      <p className="text-sm font-bold uppercase text-sky-700">BebeCrește</p>
      <p className="mt-2 text-base leading-7">
        Conținut creat pentru părinți, cu recomandări orientative și un ton
        blând.
      </p>
      <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
        Informațiile nu înlocuiesc sfatul medicului.
      </p>
    </div>
  );
}

function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mt-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500"
    >
      <Link
        href="/"
        className="transition duration-200 hover:text-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-100"
      >
        Acasă
      </Link>
      <span className="text-slate-300" aria-hidden="true">
        &gt;
      </span>
      <Link
        href="/blog"
        className="transition duration-200 hover:text-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-100"
      >
        Blog
      </Link>
      <span className="text-slate-300" aria-hidden="true">
        &gt;
      </span>
      <span className="max-w-full truncate text-slate-700 sm:max-w-md">
        {title}
      </span>
    </nav>
  );
}

function getMobileCtaLabel(href: string) {
  if (href === "/planner-mese") {
    return "Planner mese";
  }

  if (href === "/calculator-somn") {
    return "Calculator somn";
  }

  return "Citește blogul";
}

function renderContentBlock(block: BlogContentBlock) {
  if (block.type === "heading") {
    return (
      <h2 className="pt-4 text-2xl font-bold leading-snug text-slate-950 sm:text-3xl">
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-3 rounded-[1.5rem] bg-rose-50/70 p-5 text-base leading-7 text-slate-700 ring-1 ring-rose-100 sm:p-6">
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
      <p>
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
            <span key={`${segment.text}-${index}`}>{segment.text}</span>
          ),
        )}
      </p>
    );
  }

  return <p>{block.text}</p>;
}

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
      images: [
        {
          url: post.coverImage,
          alt: post.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.relatedSlugs);
  const faqJsonLd = getFaqJsonLd(getFaqItems(post.content));
  const breadcrumbJsonLd = getBreadcrumbJsonLd(post);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f1] pb-20 text-slate-900 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(breadcrumbJsonLd),
        }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(faqJsonLd),
          }}
        />
      ) : null}
      <Navbar />

      <article className="relative px-5 pb-24 pt-10 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.7),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(254,205,211,0.72),_transparent_30%),linear-gradient(135deg,_#fff7f1_0%,_#f8fbff_48%,_#fff1f7_100%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-x-0.5 hover:bg-white hover:text-rose-700 hover:shadow-md hover:shadow-slate-200/70 focus:outline-none focus:ring-4 focus:ring-rose-100 active:translate-x-0"
          >
            <span aria-hidden="true">←</span>
            <span>Înapoi la toate articolele</span>
          </Link>
          <Breadcrumbs title={post.title} />

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-2xl shadow-rose-200/30">
            <div className="relative aspect-[16/9] bg-rose-50">
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover"
              />
            </div>

            <div className="mx-auto max-w-4xl p-6 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-normal">
                <time
                  dateTime={post.date}
                  className="rounded-full bg-rose-50 px-4 py-2 text-rose-700 ring-1 ring-rose-100"
                >
                  {dateFormatter.format(new Date(post.date))}
                </time>
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-emerald-700 ring-1 ring-emerald-100">
                  {post.readingTime}
                </span>
              </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-600">
              {post.excerpt}
            </p>
            <AuthorBox />
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

            <div className="mt-10 space-y-7 border-t border-rose-100 pt-10 text-lg leading-9 text-slate-700">
              {post.content.map((block, index) => (
                <Fragment key={`${block.type}-${index}`}>
                  {renderContentBlock(block)}
                  {index === 1 ? (
                    <ArticleCta cta={post.cta} placement="inline" />
                  ) : null}
                </Fragment>
              ))}
            </div>

              </div>
            </div>

          <ArticleCta cta={post.cta} placement="end" />

          <EmailCapture className="mt-8" wide />

          {relatedPosts.length > 0 ? (
            <section className="mt-12">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                  Citește și
                </h2>
                <Link
                  href="/blog"
                  className="hidden rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition duration-200 hover:bg-white focus:outline-none focus:ring-4 focus:ring-rose-100 sm:inline-flex"
                >
                  Toate articolele
                </Link>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="group flex h-full flex-col rounded-[1.25rem] border border-white/80 bg-white/90 p-5 shadow-lg shadow-rose-200/20 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-rose-200/35"
                  >
                    <div className="flex flex-wrap gap-2">
                      {relatedPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold uppercase text-rose-700 ring-1 ring-rose-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-snug text-slate-950 transition duration-200 group-hover:text-rose-700">
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="focus:outline-none focus:ring-4 focus:ring-rose-100"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="mt-5 inline-flex w-fit rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 active:translate-y-0"
                    >
                      Citește articolul
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
          </div>
      </article>

      <Footer />
      <MobileStickyCta
        links={[
          {
            href: post.cta.href,
            label: getMobileCtaLabel(post.cta.href),
          },
        ]}
      />
    </main>
  );
}
