import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  imageLabel,
  breadcrumbs,
  tone = "forest",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  imageLabel: string;
  breadcrumbs: { name: string; href: string }[];
  tone?: "forest" | "sandstone" | "charcoal" | "himalaya" | "gold";
}) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-charcoal-950 pb-14 pt-32 sm:min-h-[50vh] sm:pb-16">
      <div className="absolute inset-0">
        <ImagePlaceholder
          label={imageLabel}
          tone={tone}
          aspect="aspect-auto"
          rounded="rounded-none"
          className="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/55 to-charcoal-950/15" />

      <Container className="relative z-10">
        <div className="[&_a]:text-cream-100/70 [&_a:hover]:text-gold-400 [&_span]:text-cream-50 [&_svg]:text-cream-100/40">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        {eyebrow && (
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-cream-50 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-cream-100/80 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
