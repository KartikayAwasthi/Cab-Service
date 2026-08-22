import Image from "next/image";
import { cn } from "@/lib/utils";

type Tone = "forest" | "sandstone" | "charcoal" | "himalaya" | "gold";

const TONE_GRADIENTS: Record<Tone, string> = {
  forest: "from-forest-800 via-forest-900 to-charcoal-900",
  sandstone: "from-sandstone-400 via-sandstone-500 to-forest-800",
  charcoal: "from-charcoal-700 via-charcoal-900 to-forest-950",
  himalaya: "from-himalaya-500 via-forest-900 to-charcoal-900",
  gold: "from-gold-400 via-sandstone-500 to-forest-900",
};

const TONE_RIDGE: Record<Tone, string> = {
  forest: "text-forest-600/40",
  sandstone: "text-cream-100/30",
  charcoal: "text-sandstone-400/20",
  himalaya: "text-himalaya-400/30",
  gold: "text-cream-100/25",
};

/**
 * Placeholder for real photography. Renders an intentional Himalayan-toned
 * gradient with a mountain ridge silhouette instead of a broken image, so
 * the client/developer can see exactly where and what to replace it with.
 * `label` doubles as the future alt text.
 */
export function ImagePlaceholder({
  label,
  src,
  tone = "forest",
  aspect = "aspect-[4/3]",
  className,
  rounded = "rounded-2xl",
}: {
  label: string;
  src?: string;
  tone?: Tone;
  aspect?: string;
  className?: string;
  rounded?: string;
}) {
  if (src) {
    return (
      <div
        className={cn("relative isolate overflow-hidden", aspect, rounded, className)}
      >
        <Image src={src} alt={label} fill sizes="100vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-gradient-to-br",
        TONE_GRADIENTS[tone],
        aspect,
        rounded,
        className
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full", TONE_RIDGE[tone])}
      >
        <path
          d="M0 220 L60 150 L110 200 L170 110 L230 190 L280 130 L340 210 L400 160 L400 300 L0 300 Z"
          fill="currentColor"
        />
        <path
          d="M0 260 L50 210 L120 250 L190 180 L260 240 L320 190 L400 230 L400 300 L0 300 Z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent" />
      <span className="relative z-10 m-3 rounded-full bg-charcoal-900/60 px-3 py-1 text-[11px] font-medium tracking-wide text-cream-100/80 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
