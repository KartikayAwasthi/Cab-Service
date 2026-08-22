import type { Faq } from "@/lib/types";

export const FAQS: Faq[] = [
  {
    id: "vehicle-availability",
    category: "vehicles",
    question: "How do I know which vehicle is available for my dates?",
    answer:
      "Send us your travel date, route and group size on WhatsApp or by phone, and we'll confirm which vehicles are available and suggest the best fit for your trip.",
  },
  {
    id: "vehicle-choice",
    category: "vehicles",
    question: "Which vehicle should I choose for my trip?",
    answer:
      "For 1–4 people and shorter distances, a sedan works well. Families and small groups usually prefer an Ertiga/Rumion. For Char Dham and longer mountain routes, Innova/Innova Crysta is the most popular choice. Larger groups can opt for a Tempo Traveller.",
  },
  {
    id: "char-dham-registration",
    category: "char-dham",
    question: "Do I need to register for the Char Dham Yatra?",
    answer:
      "Yes, Char Dham Yatra registration/biometric verification is mandatory under current Uttarakhand government rules. We can guide you on the process when you book — carry valid ID proof for all travellers.",
  },
  {
    id: "char-dham-best-time",
    category: "char-dham",
    question: "When is the best time for Char Dham Yatra?",
    answer:
      "The Yatra season typically runs from late April/May to November, with May–June and September–October considered the most comfortable months. Exact opening dates vary each year — confirm with us before finalizing travel.",
  },
  {
    id: "airport-flight-delay",
    category: "airport",
    question: "What if my flight to Jolly Grant Airport is delayed?",
    answer:
      "Share your flight number when booking. Drivers track timing where possible, and for significant delays you can message us on WhatsApp to reconfirm your pickup time.",
  },
  {
    id: "airport-advance-booking",
    category: "airport",
    question: "How far in advance should I book an airport transfer?",
    answer:
      "We recommend booking at least a day in advance to guarantee vehicle availability, though we do try to accommodate short-notice requests where possible.",
  },
  {
    id: "railway-stations-covered",
    category: "railway",
    question: "Which railway stations do you cover?",
    answer:
      "We regularly serve Rishikesh, Haridwar and Dehradun railway stations for pickups and drops.",
  },
  {
    id: "multi-day-booking",
    category: "booking",
    question: "Can I keep the same vehicle for multiple days?",
    answer:
      "Yes, multi-day bookings keep the same vehicle and driver with you throughout your trip, ideal for Char Dham Yatra or multi-destination itineraries.",
  },
  {
    id: "one-way-vs-round-trip",
    category: "booking",
    question: "What's the difference between one-way and round-trip taxi bookings?",
    answer:
      "A one-way booking drops you at your destination and the vehicle does not wait. A round trip keeps the vehicle with you for the return journey as well, which is common on longer outstation and Char Dham trips.",
  },
  {
    id: "tempo-traveller-capacity",
    category: "vehicles",
    question: "How many people fit in a Tempo Traveller?",
    answer:
      "Tempo Travellers are typically available in 12, 17 and 26 seater configurations depending on availability — let us know your group size and we'll suggest the right option.",
  },
  {
    id: "advance-booking-window",
    category: "booking",
    question: "How far in advance should I book, especially for Char Dham season?",
    answer:
      "For Char Dham Yatra season (May–June, Sept–Oct) we recommend booking several weeks in advance since vehicle availability gets tight. For local and short outstation trips, a day or two is usually sufficient.",
  },
  {
    id: "how-fare-calculated",
    category: "pricing",
    question: "How is the fare calculated?",
    answer:
      "Fares depend on distance, vehicle type, trip type (one-way/round-trip/multi-day) and season. The quote widget on this site gives an estimated range — the final fare is confirmed by our team over WhatsApp or phone based on your exact requirements.",
  },
  {
    id: "included-in-fare",
    category: "pricing",
    question: "What is typically included in the fare?",
    answer:
      "Standard inclusions are fuel, driver allowance and applicable tolls/parking. Exact inclusions can vary by trip and are confirmed at the time of booking.",
  },
  {
    id: "driver-experience",
    category: "drivers",
    question: "Are your drivers experienced with mountain routes?",
    answer:
      "Yes, drivers assigned to outstation and Char Dham routes are experienced with Uttarakhand's hill roads, seasonal conditions and Yatra-season traffic management.",
  },
  {
    id: "driver-language",
    category: "drivers",
    question: "Do drivers speak English?",
    answer:
      "Most drivers are comfortable with basic English and Hindi. Let us know if you need any specific language assistance and we'll do our best to accommodate.",
  },
];

export function getFaqsByCategory(category: string): Faq[] {
  return FAQS.filter((f) => f.category === category);
}
