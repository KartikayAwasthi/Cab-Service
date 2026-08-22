import { BadgeIndianRupee, CalendarClock, Car, Clock, Mountain, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const TRUST_POINTS = [
  { icon: Mountain, label: "Local Himalayan Expertise" },
  { icon: Clock, label: "24/7 Travel Assistance" },
  { icon: Car, label: "Well-Maintained Vehicles" },
  { icon: ShieldCheck, label: "Experienced Local Drivers" },
  { icon: BadgeIndianRupee, label: "Transparent Quotes" },
  { icon: CalendarClock, label: "Flexible Travel Options" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-charcoal-900/5 bg-sandstone-300/40">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-6 py-8 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:items-center lg:justify-between lg:gap-4 lg:divide-x lg:divide-charcoal-900/10">
        {TRUST_POINTS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 lg:px-4 lg:first:pl-0 lg:last:pr-0">
            <Icon className="h-5 w-5 shrink-0 text-forest-800" aria-hidden="true" />
            <span className="text-sm font-medium leading-tight text-charcoal-800">{label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
