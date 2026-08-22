import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TESTIMONIALS } from "@/data/testimonials";
import { site } from "@/data/site";

export function ReviewsSection() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Traveller Experiences"
          title="What Our Guests Say"
          align="center"
          className="mx-auto"
        />

        {TESTIMONIALS.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="flex flex-col rounded-2xl border border-charcoal-900/10 bg-cream-50 p-6"
              >
                <div className="flex items-center gap-0.5 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={i < review.rating ? "currentColor" : "none"}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-700/85">
                  &ldquo;{review.review}&rdquo;
                </p>
                <p className="mt-5 text-sm font-semibold text-charcoal-900">{review.name}</p>
                <p className="text-xs text-charcoal-700/60">{review.route}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-md text-center">
            <p className="text-sm leading-relaxed text-charcoal-700/70">
              We&rsquo;re gathering traveller reviews from recent trips. In the meantime, see verified
              reviews on our Google Business profile.
            </p>
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Button href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
            See More Reviews
          </Button>
        </div>
      </Container>
    </section>
  );
}
