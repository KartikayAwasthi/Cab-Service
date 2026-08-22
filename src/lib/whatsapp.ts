import { site } from "@/data/site";

export interface WhatsAppEnquiryDetails {
  route?: string;
  service?: string;
  travelDate?: string;
  passengers?: string;
  vehicle?: string;
  tripType?: string;
  estimatedFare?: string;
  note?: string;
}

export function buildWhatsAppMessage(details: WhatsAppEnquiryDetails = {}): string {
  const lines: string[] = [];
  const subject = details.route ?? details.service;

  lines.push(
    subject
      ? `Hello, I would like to enquire about a taxi for: ${subject}.`
      : "Hello, I would like to enquire about a taxi booking."
  );
  lines.push("");
  if (details.travelDate) lines.push(`Travel Date: ${details.travelDate}`);
  if (details.passengers) lines.push(`Passengers: ${details.passengers}`);
  if (details.vehicle) lines.push(`Vehicle: ${details.vehicle}`);
  if (details.tripType) lines.push(`Trip Type: ${details.tripType}`);
  if (details.estimatedFare) lines.push(`Estimated Fare Shown: ${details.estimatedFare}`);
  if (details.note) lines.push(`Note: ${details.note}`);
  lines.push("");
  lines.push("Please share availability and final fare.");

  return lines.join("\n");
}

export function getWhatsAppUrl(details?: WhatsAppEnquiryDetails): string {
  const message = buildWhatsAppMessage(details);
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
