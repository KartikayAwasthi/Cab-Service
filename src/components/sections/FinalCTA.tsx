import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-charcoal-950 py-24">
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="Taxi driving into the mountains at golden hour, Uttarakhand"
          tone="gold"
          aspect="aspect-auto"
          rounded="rounded-none"
          className="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 bg-charcoal-950/60" />

      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight text-cream-50 sm:text-4xl lg:text-5xl">
          Wherever Uttarakhand Takes You.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-cream-100/80 sm:text-lg">
          From peaceful riversides to the high Himalayas, travel comfortably with a trusted local
          taxi service from Rishikesh.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Get a Taxi Quote
          </Button>
          <WhatsAppButton variant="outline" size="lg" />
        </div>
      </Container>
    </section>
  );
}
