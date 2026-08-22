import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/service/ServiceCard";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { SERVICES } from "@/data/services";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Taxi Services in Rishikesh",
  description:
    "Airport transfers, railway pickups, local sightseeing, outstation trips, Char Dham taxis and Tempo Traveller hire — all taxi services offered from Rishikesh.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Taxi Services from Rishikesh"
        description="Every way we help you move around Rishikesh and across Uttarakhand — local, outstation, airport, railway and pilgrimage travel."
        imageLabel="Fleet of taxis ready for departure in Rishikesh"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <InlineCTA />
    </>
  );
}
