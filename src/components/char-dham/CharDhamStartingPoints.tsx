import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { CHAR_DHAM_STARTING_POINTS } from "@/data/charDham";

export function CharDhamStartingPoints() {
  return (
    <section className="bg-cream-100 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Where To Start"
          title="Best Starting Point for Your Yatra"
          description="Mountain roads are measured in hours, not just kilometres — here's how the common starting points compare."
        />

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-charcoal-900/10 text-xs font-semibold uppercase tracking-wide text-charcoal-700/60">
                <th className="py-3 pr-4 font-semibold">Starting Point</th>
                <th className="py-3 pr-4 font-semibold">Approx. Distance</th>
                <th className="py-3 pr-4 font-semibold">Approx. Duration</th>
                <th className="py-3 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody>
              {CHAR_DHAM_STARTING_POINTS.map((sp) => (
                <tr
                  key={sp.point}
                  className={cn(
                    "border-b border-charcoal-900/10 align-top",
                    sp.recommended && "bg-sandstone-300/30"
                  )}
                >
                  <td className="py-4 pr-4 font-semibold text-charcoal-900">
                    {sp.point}
                    {sp.recommended && (
                      <span className="ml-2 inline-block rounded-full bg-gold-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-charcoal-950">
                        Recommended
                      </span>
                    )}
                  </td>
                  <td className="py-4 pr-4 text-charcoal-700/80">{sp.approxDistance}</td>
                  <td className="py-4 pr-4 text-charcoal-700/80">{sp.approxDuration}</td>
                  <td className="py-4 text-charcoal-700/70">{sp.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
