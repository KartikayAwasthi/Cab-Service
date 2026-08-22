import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function ScenicExperience() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-charcoal-950 py-24 sm:py-32">
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="Wide shot of a taxi on a winding Himalayan road above a river valley"
          src="/images/ganga-valley.png"
          tone="himalaya"
          aspect="aspect-auto"
          rounded="rounded-none"
          className="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/50 to-transparent" />

      <Container className="relative z-10">
        <Reveal>
          <p className="max-w-xl text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            The Road Is Part of the Journey
          </p>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight text-cream-50 sm:text-4xl lg:text-5xl">
            Every route runs through some of the most scenic driving in India.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg">
            River valleys, pine forests, and mountain passes unfold outside your window while your
            driver handles the road — so the journey feels as good as the destination.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
