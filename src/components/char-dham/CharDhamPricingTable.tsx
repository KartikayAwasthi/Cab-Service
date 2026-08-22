import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { VEHICLE_CATEGORIES, getVehiclesByCategory } from "@/data/vehicles";
import { getPricingRule } from "@/data/pricing";
import { calculateFare, formatInr } from "@/lib/fare";

function circuitRange(category: (typeof VEHICLE_CATEGORIES)[number]["id"], days: number) {
  const rule = getPricingRule(category);
  if (!rule) return null;
  const result = calculateFare({
    vehicleCategory: category,
    tripType: "multi-day",
    distanceKm: rule.minKmPerDay,
    days,
  });
  if (!result) return null;
  return `${formatInr(result.minFare)} – ${formatInr(result.maxFare)}`;
}

export function CharDhamPricingTable() {
  const rows = VEHICLE_CATEGORIES.map((cat) => ({
    ...cat,
    vehicleName: getVehiclesByCategory(cat.id)[0]?.name ?? cat.label,
    price10Day: circuitRange(cat.id, 10),
    price12Day: circuitRange(cat.id, 12),
  }));

  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ballpark Pricing"
          title="Estimated Fare by Vehicle"
          description="A rough guide for the full 10–12 day circuit from Rishikesh. These are estimated ranges, not fixed quotes — final fare is always confirmed by our team on WhatsApp or phone."
        />

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-charcoal-900/10 text-xs font-semibold uppercase tracking-wide text-charcoal-700/60">
                <th className="py-3 pr-4 font-semibold">Vehicle</th>
                <th className="py-3 pr-4 font-semibold">10-Day Circuit</th>
                <th className="py-3 pr-4 font-semibold">12-Day Circuit</th>
                <th className="py-3 font-semibold" />
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-charcoal-900/10">
                  <td className="py-4 pr-4">
                    <p className="font-semibold text-charcoal-900">{row.vehicleName}</p>
                    <p className="text-xs text-charcoal-700/60">{row.label}</p>
                  </td>
                  <td className="py-4 pr-4 text-charcoal-700/80">{row.price10Day ?? "—"}</td>
                  <td className="py-4 pr-4 text-charcoal-700/80">{row.price12Day ?? "—"}</td>
                  <td className="py-4">
                    <WhatsAppButton
                      details={{ vehicle: row.vehicleName, service: "Char Dham Yatra" }}
                      variant="ghost"
                      label="Get Quote"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-charcoal-700/60">
          Estimated ranges only. Actual fare depends on exact route, dates, vehicle availability and trip
          requirements.
        </p>
      </Container>
    </section>
  );
}
