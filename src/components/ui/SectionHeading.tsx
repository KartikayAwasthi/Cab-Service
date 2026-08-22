import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-gold-600" : "text-gold-400"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance font-display text-3xl leading-tight tracking-tight sm:text-4xl",
          tone === "dark" ? "text-charcoal-900" : "text-cream-50"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-charcoal-700/80" : "text-cream-100/75"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
