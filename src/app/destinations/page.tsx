import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { DestinationExplorer } from "@/components/destination/DestinationExplorer";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Uttarakhand Destinations",
  description:
    "Explore hill stations, spiritual towns and Char Dham shrines reachable by taxi from Rishikesh — Mussoorie, Auli, Chopta, Haridwar and more.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Explore Uttarakhand"
        description="From nearby ghats to high Himalayan shrines, browse destinations reachable by taxi from Rishikesh."
        imageLabel="Panoramic view of Uttarakhand's Himalayan foothills"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Destinations", href: "/destinations" },
        ]}
      />

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <DestinationExplorer />
        </Container>
      </section>

      <InlineCTA />
    </>
  );
}
