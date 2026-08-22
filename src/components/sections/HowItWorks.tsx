import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    title: "Share Your Trip Details",
    description: "Tell us your pickup, destination, date and group size using the quote widget.",
  },
  {
    title: "Get an Estimated Fare",
    description: "See an instant fare range for your route, vehicle and trip type.",
  },
  {
    title: "Confirm on WhatsApp",
    description: "Our team confirms vehicle availability and finalizes your exact fare.",
  },
  {
    title: "Enjoy the Journey",
    description: "Your driver arrives on time, ready for the road ahead.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-sandstone-300/30 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Simple Process"
          title="How Booking Works"
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-charcoal-900/15 lg:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="relative">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-forest-900 font-display text-lg font-semibold text-cream-50">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-charcoal-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-700/75">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
