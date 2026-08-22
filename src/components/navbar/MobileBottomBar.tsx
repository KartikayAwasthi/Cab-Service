import { MessageCircle, Phone, Send } from "lucide-react";
import { site } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal-900/10 bg-cream-50/95 backdrop-blur-md lg:hidden">
      <div
        className="grid grid-cols-3 divide-x divide-charcoal-900/10"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={site.phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-charcoal-800 active:bg-charcoal-900/5"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-forest-800 active:bg-forest-900/5"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 bg-gold-500 py-3 text-xs font-semibold text-charcoal-950 active:bg-gold-400"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
          Get Quote
        </a>
      </div>
    </div>
  );
}
