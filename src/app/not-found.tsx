import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream-50 pt-24">
      <Container className="text-center">
        <p className="font-display text-6xl font-semibold text-sandstone-500">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-charcoal-900 sm:text-3xl">
          This road doesn&rsquo;t exist.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-charcoal-700/75">
          The page you&rsquo;re looking for may have moved. Head back home, or reach out and we&rsquo;ll help
          you find what you need.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <WhatsAppButton variant="secondary" size="lg" />
        </div>
      </Container>
    </section>
  );
}
