import { PageHero } from "@/components/sections/PageHero";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Traveller Reviews",
  description: "Read what travellers say about their taxi journeys from Rishikesh.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Traveller Experiences"
        description="Honest feedback from travellers who've booked with us for local, outstation and Char Dham journeys."
        imageLabel="Happy travellers boarding a taxi for their journey"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
      />

      <ReviewsSection />

      <InlineCTA />
    </>
  );
}
