import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/data/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${site.name}'s taxi services.`,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <section className="bg-cream-50 py-16 pt-32 sm:py-24 sm:pt-36">
      <Container className="max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Terms & Conditions", href: "/terms-and-conditions" },
          ]}
        />
        <h1 className="mt-6 font-display text-3xl font-semibold text-charcoal-900 sm:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-sm text-charcoal-700/60">
          Last updated: [TODO — insert date] · This is placeholder content. Have this reviewed by
          the business/legal counsel before publishing.
        </p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-charcoal-700/85 sm:text-base">
          <h2 className="font-display text-lg font-semibold text-charcoal-900">Bookings & Quotes</h2>
          <p>
            Fare estimates shown on this website are approximate and generated for planning
            purposes only. Final fares are confirmed by our team over WhatsApp or phone and depend
            on exact route, travel date, vehicle availability and trip requirements.
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            Vehicle Availability
          </h2>
          <p>
            While we aim to provide the vehicle type requested, availability can vary. We will
            inform you and offer alternatives if your preferred vehicle is unavailable for your
            travel dates.
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            Passenger Responsibilities
          </h2>
          <p>
            Passengers are expected to carry valid identification where required (including for
            Char Dham Yatra registration), follow driver safety instructions, and inform us of any
            special requirements in advance.
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            Liability
          </h2>
          <p>
            [TODO — insert the business&rsquo;s specific liability terms, e.g. regarding delays due to
            weather, road closures, or circumstances beyond our control, in consultation with
            legal counsel.]
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">
            Governing Law
          </h2>
          <p>
            These terms are governed by the laws of India. [TODO — confirm specific jurisdiction,
            e.g. courts of Dehradun, Uttarakhand.]
          </p>

          <h2 className="font-display text-lg font-semibold text-charcoal-900">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
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
