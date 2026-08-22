import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { CHAR_DHAM_PACKAGES, CHAR_DHAM_STOPS } from "@/data/charDham";

export function CharDhamSection() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Sacred Circuit"
          title="Char Dham Yatra by Road"
          description="Four Himalayan shrines, one trusted taxi partner for the whole journey — Yamunotri, Gangotri, Kedarnath and Badrinath."
        />
      </Container>

      <div className="mt-16 flex flex-col gap-16 sm:gap-24">
        {CHAR_DHAM_STOPS.map((stop, index) => (
          <Reveal key={stop.id}>
            <Container
              className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <ImagePlaceholder
                  label={stop.imageLabel}
                  src={stop.image}
                  tone={index % 2 === 0 ? "himalaya" : "forest"}
                  aspect="aspect-[5/4]"
                />
              </div>
              <div className="lg:w-1/2">
                <span className="font-display text-6xl font-semibold text-sandstone-500/50">
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
                  {stop.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold-600">
                  {stop.significance}
                </p>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-charcoal-700/80">
                  {stop.description}
                </p>
                <dl className="mt-6 grid max-w-md grid-cols-3 gap-4 border-t border-charcoal-900/10 pt-5 text-sm">
                  <div>
                    <dt className="text-charcoal-700/60">Altitude</dt>
                    <dd className="mt-1 font-semibold text-charcoal-900">{stop.altitude}</dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-700/60">Distance</dt>
                    <dd className="mt-1 font-semibold text-charcoal-900">
                      {stop.approxDistanceFromRishikesh}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-charcoal-700/60">Duration</dt>
                    <dd className="mt-1 font-semibold text-charcoal-900">
                      {stop.approxDurationFromRishikesh}
                    </dd>
                  </div>
                </dl>
                <Link
                  href={`/routes/rishikesh-to-${stop.slug}-taxi`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 hover:text-forest-900"
                >
                  Explore Journey
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Container>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 bg-sandstone-300/40 py-16">
        <Container>
          <SectionHeading
            eyebrow="Plan Your Circuit"
            title="Do Dham, Teen Dham or the Full Char Dham"
            description="Choose the circuit that fits your time — we'll help plan the vehicle and itinerary around it."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {CHAR_DHAM_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col rounded-2xl border border-charcoal-900/10 bg-cream-50 p-6"
              >
                <h4 className="font-display text-xl font-semibold text-charcoal-900">{pkg.name}</h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  {pkg.approxDurationDays}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-700/80">{pkg.summary}</p>
                <p className="mt-3 text-sm text-charcoal-700/60">{pkg.stops.join(" → ")}</p>
                <div className="mt-5">
                  <WhatsAppButton
                    details={{ service: pkg.name }}
                    variant="secondary"
                    label="Get Quote"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
