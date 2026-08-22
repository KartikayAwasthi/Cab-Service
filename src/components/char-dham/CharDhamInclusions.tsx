import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CHAR_DHAM_EXCLUSIONS, CHAR_DHAM_INCLUSIONS } from "@/data/charDham";

export function CharDhamInclusions() {
  return (
    <section className="bg-sandstone-300/40 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Fine Print" title="What's Included & What's Not" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-charcoal-900/10 bg-cream-50 p-6">
            <h3 className="font-display text-lg font-semibold text-charcoal-900">Included</h3>
            <ul className="mt-4 space-y-3">
              {CHAR_DHAM_INCLUSIONS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal-700/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-800" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-charcoal-900/10 bg-cream-50 p-6">
            <h3 className="font-display text-lg font-semibold text-charcoal-900">Not Included</h3>
            <ul className="mt-4 space-y-3">
              {CHAR_DHAM_EXCLUSIONS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal-700/80">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-charcoal-700/40" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
