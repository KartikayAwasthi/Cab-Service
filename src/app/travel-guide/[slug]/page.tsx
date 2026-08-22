import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { InlineCTA } from "@/components/sections/InlineCTA";
import {
  TRAVEL_GUIDE_ARTICLES,
  getTravelGuideArticleBySlug,
  getRelatedArticles,
} from "@/data/travelGuide";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structuredData";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function generateStaticParams() {
  return TRAVEL_GUIDE_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getTravelGuideArticleBySlug(slug);
  if (!article) return {};
  return buildPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/travel-guide/${article.slug}`,
  });
}

export default async function TravelGuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getTravelGuideArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article);
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Travel Guide", href: "/travel-guide" },
    { name: article.title, href: `/travel-guide/${article.slug}` },
  ];

  return (
    <>
      <section className="bg-cream-50 pb-4 pt-32">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            {article.category}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-charcoal-900 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-charcoal-700/60">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {article.readTimeMinutes} min read
            </span>
            <span>
              {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <ImagePlaceholder label={article.imageLabel} tone="sandstone" aspect="aspect-[21/9]" />
      </Container>

      <section className="pb-16 sm:pb-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-700/60">
                In This Guide
              </p>
              <ul className="mt-4 space-y-2.5 border-l border-charcoal-900/10 pl-4 text-sm">
                {article.tableOfContents.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${slugify(item)}`}
                      className="text-charcoal-700/75 hover:text-forest-800"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="max-w-2xl lg:col-span-9">
            {article.content.map((block, i) => {
              if (block.type === "heading" && block.text) {
                return (
                  <h2
                    key={i}
                    id={slugify(block.text)}
                    className="mt-10 scroll-mt-28 font-display text-2xl font-semibold text-charcoal-900 first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list" && block.items) {
                return (
                  <ul key={i} className="mt-4 space-y-2 pl-1">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-gold-500/50 pl-4 text-base leading-relaxed text-charcoal-700/85"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="mt-4 text-base leading-relaxed text-charcoal-700/85">
                  {block.text}
                </p>
              );
            })}
          </article>
        </Container>
      </section>

      {relatedArticles.length > 0 && (
        <section className="bg-cream-100 py-16 sm:py-24">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-charcoal-900">
              Related Reading
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/travel-guide/${related.slug}`}
                  className="group flex items-start gap-4"
                >
                  <div className="w-28 shrink-0">
                    <ImagePlaceholder label={related.imageLabel} tone="forest" aspect="aspect-square" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-charcoal-900 group-hover:text-forest-800">
                      {related.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-charcoal-700/70">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <InlineCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
    </>
  );
}
