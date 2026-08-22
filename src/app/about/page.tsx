import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "About Us",
  description: `About ${site.name}, a taxi service based in Rishikesh serving local, outstation and Char Dham travel across Uttarakhand.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Rishikesh Is Home Ground"
        description="A local taxi service built around knowing these roads, these mountains and this river valley well."
        imageLabel="Driver standing beside a taxi with the Ganga valley behind"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <section className="bg-cream-50 py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ImagePlaceholder
            label="Taxi driver checking the vehicle before a mountain journey"
            tone="sandstone"
            aspect="aspect-[4/5]"
          />
          <div>
            <h2 className="font-display text-2xl font-semibold text-charcoal-900 sm:text-3xl">
              Built by people who drive these mountains every day
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-700/85">
              {site.name} started as a small local taxi operation in Rishikesh and grew around one
              idea — that travel in the Himalayas goes better with a driver who genuinely knows the
              roads, not just the route on a map. From the narrow lanes near Ram Jhula to the long
              climb toward Kedarnath, our drivers have made these drives often enough to know where
              to slow down, where to stop for a break, and how the weather changes as you gain
              altitude.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-700/85">
              We work with families on their first Char Dham Yatra, solo travellers heading to an
              ashram, and groups planning a full Uttarakhand circuit. Every trip gets the same
              approach: a well-maintained vehicle, a driver who&rsquo;s done the route before, and honest
              communication about what to expect on the road.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-forest-950 py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <AboutPillar
            title="Local Knowledge"
            description="Drivers based in Rishikesh who know local roads, ghats and the wider Uttarakhand highway network."
          />
          <AboutPillar
            title="Reliable Vehicles"
            description="A fleet maintained for long mountain drives, not just city runs."
          />
          <AboutPillar
            title="Honest Communication"
            description="Clear estimated fares upfront and real answers about route conditions and timing."
          />
        </Container>
      </section>

      <InlineCTA />
    </>
  );
}

function AboutPillar({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-t border-cream-100/15 pt-5">
      <h3 className="font-display text-lg font-semibold text-cream-50">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{description}</p>
    </div>
  );
}
