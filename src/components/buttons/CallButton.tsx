import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function CallButton({
  variant = "outline",
  size = "md",
  label = "Call Now",
  className,
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "md" | "lg";
  label?: string;
  className?: string;
}) {
  return (
    <Button
      href={site.phoneHref}
      variant={variant}
      size={size}
      icon={<Phone className="h-4 w-4" aria-hidden="true" />}
      iconPosition="left"
      className={className}
    >
      {label}
    </Button>
  );
}
