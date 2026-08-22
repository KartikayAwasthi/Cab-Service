import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CHAR_DHAM_ITINERARY } from "@/data/charDham";

export function CharDhamItinerary() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Sample Plan"
          title="12-Day Char Dham Itinerary"
          description="An illustrative day-by-day plan for the full circuit from Rishikesh. Exact pacing is confirmed with you before departure, and mountain driving is avoided after dark for safety."
        />

        <ol className="mt-10 space-y-0 border-l border-charcoal-900/10 pl-6">
          {CHAR_DHAM_ITINERARY.map((d, i) => (
            <Reveal key={d.day} delay={i * 0.03}>
              <li className="relative pb-8 last:pb-0">
                <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-forest-800 text-[11px] font-bold text-cream-50">
                  {d.day}
                </span>
                <h3 className="font-display text-lg font-semibold text-charcoal-900">{d.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal-700/80">{d.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
