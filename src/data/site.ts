// Business identity & contact details.
// NOTE: Replace every placeholder below with the client's real details
// before launch. Nothing here is fabricated for display as fact — phone,
// address and hours are marked clearly so they are not shipped by mistake.

export const site = {
  name: "Himgiri Taxi Rishikesh",
  shortName: "Himgiri Taxi",
  tagline: "Local taxi & Char Dham travel service based in Rishikesh, Uttarakhand",
  description:
    "Himgiri Taxi is a Rishikesh-based taxi service offering airport transfers, railway station pickups, Char Dham Yatra taxis, outstation trips and local sightseeing across Uttarakhand.",
  url: "https://www.himgiritaxi.example", // TODO: replace with production domain
  // TODO: replace with the client's real phone number
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  // TODO: replace with the client's real WhatsApp business number (with country code, no + or spaces)
  whatsappNumber: "919876543210",
  email: "booking@himgiritaxi.example", // TODO: replace with real email
  address: {
    line1: "Near Ram Jhula", // TODO: confirm exact address
    locality: "Rishikesh",
    region: "Uttarakhand",
    postalCode: "249201",
    country: "IN",
  },
  serviceArea: "Rishikesh, Haridwar, Dehradun & across Uttarakhand",
  hours: "Available 24/7 for bookings and travel assistance", // TODO: confirm actual hours
  mapsUrl: "https://maps.google.com/?q=Rishikesh+Uttarakhand", // TODO: replace with exact Google Maps pin
  googleReviewsUrl: "https://www.google.com/maps", // TODO: replace with Google Business review link
  social: {
    instagram: "", // TODO: add if available
    facebook: "", // TODO: add if available
  },
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Char Dham", href: "/char-dham" },
  { label: "Fleet", href: "/fleet" },
  { label: "Destinations", href: "/destinations" },
  { label: "Travel Guide", href: "/travel-guide" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
] as const;
