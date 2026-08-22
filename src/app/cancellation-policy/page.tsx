import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Cancellation Policy",
  description: `Cancellation and refund policy for ${site.name}'s taxi bookings.`,
  path: "/cancellation-policy",
});

export default function CancellationPolicyPage() {
  return (
    <section className="bg-cream-50 py-16 pt-32 sm:py-24 sm:pt-36">
      <Container className="max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Cancellation Policy", href: "/cancellation-policy" },
          ]}
        />
        <h1 className="mt-6 font-display text-3xl font-semibold text-charcoal-900 sm:text-4xl">
          Cancellation Policy
        </h1>
        <p className="mt-2 text-sm text-charcoal-700/60">
          Last updated: [TODO — insert date] · This is placeholder content. Confirm exact
          cancellation windows and refund terms with the business before publishing.
        </p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-charcoal-700/85 sm:text-base">
          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            Cancelling a Booking
          </h2>
          <p>
            To cancel a confirmed booking, please contact us as early as possible by phone or
            WhatsApp. [TODO — insert specific cancellation window, e.g. &ldquo;at least X hours before
            the scheduled pickup&rdquo;, and any applicable cancellation charge.]
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            Char Dham & Multi-Day Bookings
          </h2>
          <p>
            Multi-day and Char Dham Yatra bookings may involve advance vehicle and driver
            allocation. [TODO — insert any specific advance-notice requirement or partial
            cancellation charge for these longer bookings.]
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            Refunds
          </h2>
          <p>
            [TODO — insert refund timeline and method, e.g. &ldquo;eligible refunds are processed within
            X business days to the original payment method.&rdquo;]
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            Changes Outside Our Control
          </h2>
          <p>
            In cases of road closures, extreme weather, or other circumstances beyond our control
            on hill and Char Dham routes, we will work with you to reschedule or adjust your
            booking where possible.
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">Contact</h2>
          <p>
            To request a cancellation, contact{" "}
            <a href={`mailto:${site.email}`} className="text-forest-800 underline">
              {site.email}
            </a>{" "}
            or {site.phoneDisplay}.
          </p>
        </div>
      </Container>
    </section>
  );
}
