import { Container } from "@/components/ui/Container";
import { CHAR_DHAM_CREDENTIALS } from "@/data/charDham";

// Renders as a clearly-marked placeholder (TODO values) until the business
// supplies real, verifiable credentials — see data/charDham.ts.
export function CharDhamCredentials() {
  return (
    <section className="bg-forest-950 py-14">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {CHAR_DHAM_CREDENTIALS.map((c) => (
            <div key={c.label} className="rounded-xl border border-dashed border-cream-100/25 p-4 text-center">
              <p className="font-display text-2xl font-semibold text-gold-400">{c.value}</p>
              <p className="mt-1 text-xs leading-snug text-cream-100/70">{c.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
