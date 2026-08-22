import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream-50 py-16 pt-32 sm:py-24 sm:pt-36">
      <Container className="max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Privacy Policy", href: "/privacy-policy" },
          ]}
        />
        <h1 className="mt-6 font-display text-3xl font-semibold text-charcoal-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-charcoal-700/60">
          Last updated: [TODO — insert date] · This is placeholder content. Have this reviewed by
          the business before publishing.
        </p>

        <div className="prose-content mt-10 space-y-6 text-sm leading-relaxed text-charcoal-700/85 sm:text-base">
          <p>
            This Privacy Policy explains how {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses and protects
            information you share with us when you enquire about or book a taxi service.
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            Information We Collect
          </h2>
          <p>
            When you contact us via phone, WhatsApp, email or the quote form on this website, we
            may collect information such as your name, phone number, travel dates, pickup and
            destination details, and any other information you choose to share to help us provide
            a quote or confirm a booking.
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            How We Use Information
          </h2>
          <p>
            Information you share is used only to respond to your enquiry, provide a fare
            estimate, confirm bookings and coordinate your trip. We do not sell your personal
            information to third parties.
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            Third-Party Communication
          </h2>
          <p>
            Messages sent via the WhatsApp buttons on this site are handled through WhatsApp&rsquo;s own
            platform, subject to WhatsApp&rsquo;s privacy policy. [TODO — confirm and add any additional
            third-party tools used, e.g. analytics, before publishing.]
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">Contact</h2>
          <p>
            For questions about this policy, contact us at{" "}
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
