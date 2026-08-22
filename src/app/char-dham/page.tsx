import { PageHero } from "@/components/sections/PageHero";
import { CharDhamSection } from "@/components/char-dham/CharDhamSection";
import { CharDhamStartingPoints } from "@/components/char-dham/CharDhamStartingPoints";
import { CharDhamItinerary } from "@/components/char-dham/CharDhamItinerary";
import { CharDhamPricingTable } from "@/components/char-dham/CharDhamPricingTable";
import { CharDhamInclusions } from "@/components/char-dham/CharDhamInclusions";
import { CharDhamCredentials } from "@/components/char-dham/CharDhamCredentials";
import { FaqBlock } from "@/components/faq/FaqBlock";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { getFaqsByCategory } from "@/data/faqs";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Char Dham Taxi Service from Rishikesh",
  description:
    "Taxi services for the Char Dham Yatra from Rishikesh — Kedarnath, Badrinath, Gangotri and Yamunotri, with Do Dham, Teen Dham and Char Dham packages.",
  path: "/char-dham",
});

export default function CharDhamPage() {
  const faqs = getFaqsByCategory("char-dham");

  return (
    <>
      <PageHero
        eyebrow="Pilgrimage Travel"
        title="Char Dham Yatra Taxi Service"
        description="Reliable road transport for Yamunotri, Gangotri, Kedarnath and Badrinath, run by drivers experienced on Yatra-season routes."
        imageLabel="Pilgrims' road journey through the Himalayas towards a Char Dham shrine"
        tone="himalaya"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Char Dham", href: "/char-dham" },
        ]}
      />

      <CharDhamStartingPoints />

      <CharDhamSection />

      <CharDhamItinerary />

      <CharDhamPricingTable />

      <CharDhamInclusions />

      <CharDhamCredentials />

      <FaqBlock faqs={faqs} title="Char Dham Yatra — FAQs" />

      <InlineCTA
        title="Planning Your Char Dham Yatra?"
        description="Share your preferred dates and circuit — Do Dham, Teen Dham or full Char Dham — and we'll help plan the right vehicle."
        whatsappDetails={{ service: "Char Dham Yatra" }}
      />
    </>
  );
}
