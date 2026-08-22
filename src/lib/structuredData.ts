import { site } from "@/data/site";
import type { Faq } from "@/lib/types";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: site.serviceArea,
    priceRange: "$$",
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[] | Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
