"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Faq } from "@/lib/types";

export function FAQSection({
  faqs,
  className,
}: {
  faqs: Faq[] | { question: string; answer: string }[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-charcoal-900/10 border-t border-charcoal-900/10", className)}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base font-semibold text-charcoal-900 sm:text-lg">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-charcoal-700/60 transition-transform duration-300",
                  isOpen && "rotate-180 text-gold-600"
                )}
                aria-hidden="true"
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-charcoal-700/80 sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
