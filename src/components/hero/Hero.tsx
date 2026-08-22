import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { BookingWidget } from "@/components/booking/BookingWidget";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative flex min-h-[86vh] items-end overflow-hidden bg-charcoal-950 pb-32 pt-40 sm:min-h-[92vh] sm:pb-40 lg:min-h-screen">
        <div className="absolute inset-0 animate-hero-zoom">
          <ImagePlaceholder
            label="Taxi on a Himalayan road above the Ganga valley near Rishikesh"
            src="/images/rishikesh-hero.png"
            tone="forest"
            aspect="aspect-auto"
            rounded="rounded-none"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/55 to-charcoal-950/10" />

        <Container className="relative z-10">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-gold-400 opacity-0">
            Rishikesh · Uttarakhand
          </p>
          <h1 className="animate-fade-up-delay-1 mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream-50 opacity-0 sm:text-5xl lg:text-6xl">
            Your Journey Through Uttarakhand Starts Here.
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-balance text-base leading-relaxed text-cream-100/80 opacity-0 sm:text-lg">
            Reliable taxi services from Rishikesh for Char Dham, airport transfers, railway
            stations, sightseeing and outstation travel.
          </p>
          <div className="animate-fade-up-delay-3 mt-9 flex flex-wrap items-center gap-4 opacity-0">
            <Button href="/contact" size="lg">
              Get a Taxi Quote
            </Button>
            <WhatsAppButton variant="outline" size="lg" />
          </div>
        </Container>
      </div>

      <div className="relative z-20 -mt-14 px-5 sm:-mt-20 sm:px-8 lg:-mt-24 lg:px-12">
        <Container className="px-0">
          <BookingWidget />
        </Container>
      </div>
    </section>
  );
}
