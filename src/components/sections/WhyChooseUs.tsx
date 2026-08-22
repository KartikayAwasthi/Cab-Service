import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const REASONS = [
  {
    title: "Local Himalayan Expertise",
    description:
      "Drivers who know these mountain roads, seasonal weather and Yatra-season logistics firsthand.",
  },
  {
    title: "Comfort-First Fleet",
    description:
      "Well-maintained sedans, MPVs, SUVs and Tempo Travellers, matched to your route and group size.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear estimated fares upfront, with final pricing always confirmed directly by our team.",
  },
  {
    title: "Always Reachable",
    description: "Call or message us on WhatsApp any time before, during or after your journey.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight text-charcoal-900 sm:text-4xl lg:text-5xl">
            Travel Uttarakhand with people who actually know these roads.
          </h2>
        </div>

        <div className="lg:col-span-7">
          <dl className="divide-y divide-charcoal-900/10 border-t border-charcoal-900/10">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8">
                  <dt className="font-display text-lg font-semibold text-charcoal-900">
                    {reason.title}
                  </dt>
                  <dd className="text-base leading-relaxed text-charcoal-700/80">
                    {reason.description}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
