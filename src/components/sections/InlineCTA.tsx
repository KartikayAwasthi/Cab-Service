import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { CallButton } from "@/components/buttons/CallButton";
import type { WhatsAppEnquiryDetails } from "@/lib/whatsapp";

export function InlineCTA({
  title = "Ready to Plan Your Trip?",
  description = "Share your route and travel date, and we'll confirm availability and fare on WhatsApp.",
  whatsappDetails,
}: {
  title?: string;
  description?: string;
  whatsappDetails?: WhatsAppEnquiryDetails;
}) {
  return (
    <section className="bg-forest-950 py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <div>
          <h2 className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream-100/75 sm:text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Get a Taxi Quote
          </Button>
          <WhatsAppButton details={whatsappDetails} variant="outline" size="lg" />
          <CallButton variant="outline" size="lg" />
        </div>
      </Container>
    </section>
  );
}
