import { clinic, openingHours } from "@/config/clinic";

const DAY_CODES: Record<string, string> = {
  Segunda: "Mo",
  Terça: "Tu",
  Quarta: "We",
  Quinta: "Th",
  Sexta: "Fr",
  Sábado: "Sa",
  Domingo: "Su",
};

function buildOpeningHoursSpecification() {
  return openingHours
    .filter((entry) => !entry.closed)
    .map((entry) => {
      const [opens, closes] = entry.hours.split(/\s*[–-]\s*/);
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_CODES[entry.day],
        opens,
        closes,
      };
    });
}

export function generateDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    name: clinic.name,
    image: `${clinic.siteUrl}/images/clinic.jpg`,
    url: clinic.siteUrl,
    telephone: clinic.whatsapp,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.zipCode,
      addressCountry: clinic.address.country,
    },
    openingHoursSpecification: buildOpeningHoursSpecification(),
    sameAs: [clinic.social.instagram, clinic.social.facebook],
  };
}
