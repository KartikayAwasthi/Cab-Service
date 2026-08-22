"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-charcoal-900/5 bg-cream-50/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-charcoal-950/60 to-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <Link
          href="/"
          className={cn(
            "font-display text-xl font-semibold tracking-tight transition-colors",
            solid ? "text-forest-900" : "text-cream-50"
          )}
          onClick={() => setMenuOpen(false)}
        >
          {site.shortName}
        </Link>

        <nav
          aria-label="Primary"
          className={cn(
            "hidden items-center gap-7 text-sm font-medium lg:flex",
            solid ? "text-charcoal-800" : "text-cream-100"
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-500",
              solid ? "text-charcoal-800" : "text-cream-100"
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Button href="/contact" size="md">
            Get Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
            solid ? "text-charcoal-900" : "text-cream-50"
          )}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {menuOpen && (
        <div className="border-t border-charcoal-900/10 bg-cream-50 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-charcoal-800 transition-colors hover:bg-forest-900/5"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-3 justify-center" onClick={() => setMenuOpen(false)}>
              Get Quote
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
