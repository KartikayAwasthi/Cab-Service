import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { site } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Contact & Get a Quote",
  description: `Get a taxi quote from ${site.name} in Rishikesh. Call, WhatsApp, or use the quote form for airport, railway, local or Char Dham travel.`,
  path: "/contact",
});

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: "Call",
    value: site.phoneDisplay,
    href: site.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us anytime",
    href: getWhatsAppUrl(),
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: site.serviceArea,
    href: site.mapsUrl,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a Taxi Quote"
        description="Fill in your trip details for an instant estimate, or reach us directly on call or WhatsApp."
        imageLabel="Taxi ready for pickup outside a Rishikesh hotel"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="relative z-10 -mt-12 px-5 sm:-mt-16 sm:px-8 lg:px-12">
        <Container className="px-0">
          <BookingWidget />
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-3 rounded-2xl border border-charcoal-900/10 bg-cream-50 p-6 transition-colors hover:border-forest-700"
              >
                <Icon className="h-5 w-5 text-forest-800" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-700/60">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-charcoal-900">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2.5 text-sm text-charcoal-700/70">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {site.hours}
          </div>
        </Container>
      </section>
    </>
  );
}
