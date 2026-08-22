import Link from "next/link";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site, FOOTER_LEGAL_LINKS } from "@/data/site";
import { SERVICES } from "@/data/services";
import { getFeaturedRoutes } from "@/data/routes";
import { CHAR_DHAM_STOPS } from "@/data/charDham";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const routes = getFeaturedRoutes();

  return (
    <footer className="bg-forest-950 text-cream-100/80">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="font-display text-2xl font-semibold text-cream-50">{site.shortName}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.description}</p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-gold-400">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold-400"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              WhatsApp Us
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-gold-400">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-gold-400"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {site.address.line1}, {site.address.locality}, {site.address.region}{" "}
                {site.address.postalCode}
              </span>
            </a>
          </div>
        </div>

        <FooterColumn
          title="Services"
          links={SERVICES.slice(0, 6).map((s) => ({ label: s.title, href: `/services/${s.slug}` }))}
        />

        <FooterColumn
          title="Popular Routes"
          links={routes.map((r) => ({ label: `${r.from} → ${r.to}`, href: `/routes/${r.slug}` }))}
        />

        <div>
          <FooterColumn
            title="Char Dham"
            links={CHAR_DHAM_STOPS.map((s) => ({ label: s.name, href: "/char-dham" }))}
          />
          <div className="mt-8">
            <FooterColumn
              title="Company"
              links={[
                { label: "About", href: "/about" },
                { label: "Travel Guide", href: "/travel-guide" },
                { label: "Fleet", href: "/fleet" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>
        </div>
      </Container>

      <div className="border-t border-cream-100/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold-400">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-400">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-gold-400">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
