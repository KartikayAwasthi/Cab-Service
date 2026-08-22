import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQSection } from "@/components/faq/FAQSection";
import { faqJsonLd } from "@/lib/structuredData";
import type { Faq } from "@/lib/types";

export function FaqBlock({
  faqs,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  description,
  className = "bg-cream-100 py-20 sm:py-28",
}: {
  faqs: Faq[] | { question: string; answer: string }[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section className={className}>
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <FAQSection faqs={faqs} className="mt-10" />
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
    </section>
  );
}
