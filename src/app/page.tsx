import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesSection } from "@/components/service/ServicesSection";
import { PopularRoutes } from "@/components/route/PopularRoutes";
import { CharDhamSection } from "@/components/char-dham/CharDhamSection";
import { FleetSection } from "@/components/vehicle/FleetSection";
import { DestinationsSection } from "@/components/destination/DestinationsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ScenicExperience } from "@/components/sections/ScenicExperience";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { TravelGuidePreview } from "@/components/sections/TravelGuidePreview";
import { FaqBlock } from "@/components/faq/FaqBlock";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQS } from "@/data/faqs";

const HOME_FAQ_IDS = [
  "how-fare-calculated",
  "char-dham-registration",
  "vehicle-choice",
  "one-way-vs-round-trip",
  "airport-flight-delay",
  "advance-booking-window",
];

export default function Home() {
  const homeFaqs = FAQS.filter((f) => HOME_FAQ_IDS.includes(f.id));

  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <PopularRoutes />
      <CharDhamSection />
      <FleetSection />
      <DestinationsSection />
      <WhyChooseUs />
      <HowItWorks />
      <ScenicExperience />
      <ReviewsSection />
      <TravelGuidePreview />
      <FaqBlock
        faqs={homeFaqs}
        eyebrow="Good to Know"
        title="Frequently Asked Questions"
        description="Quick answers about booking, fares and Char Dham travel. See our full FAQ for more."
      />
      <FinalCTA />
    </>
  );
}
