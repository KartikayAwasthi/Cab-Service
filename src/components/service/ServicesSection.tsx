import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/service/ServiceCard";
import { SERVICES } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Offer"
            title="Taxi Services Built for Uttarakhand Travel"
            description="From a quick local ride to a two-week Char Dham circuit, every service is run by drivers who know these roads well."
          />
          <Button href="/services" variant="ghost" className="hidden sm:inline-flex">
            View All Services
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((service, i) => (
            <Reveal key={service.id} delay={Math.min(i * 0.08, 0.3)}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button href="/services" variant="ghost" className="w-full justify-center">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
