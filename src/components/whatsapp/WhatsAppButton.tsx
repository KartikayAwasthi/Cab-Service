import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl, type WhatsAppEnquiryDetails } from "@/lib/whatsapp";

export function WhatsAppButton({
  details,
  variant = "secondary",
  size = "md",
  label = "WhatsApp Us",
  className,
}: {
  details?: WhatsAppEnquiryDetails;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "md" | "lg";
  label?: string;
  className?: string;
}) {
  return (
    <Button
      href={getWhatsAppUrl(details)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
      iconPosition="left"
      className={className}
    >
      {label}
    </Button>
  );
}
