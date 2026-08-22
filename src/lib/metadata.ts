import type { Metadata } from "next";
import { site } from "@/data/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  imageLabel?: string;
}

export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = `${title} | ${site.shortName}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
