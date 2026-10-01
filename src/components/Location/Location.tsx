import { clinic } from "@/config/clinic";
import { TrackedLink } from "@/components/TrackedLink/TrackedLink";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";
import { OpeningHours } from "@/components/OpeningHours/OpeningHours";

const fullAddress = `${clinic.address.street}, ${clinic.address.neighborhood}, ${clinic.address.city} - ${clinic.address.state}`;
const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  fullAddress,
)}&output=embed`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  fullAddress,
)}`;

export function Location() {
  return (
    <section id="contato" className="container section">
      <div className="stack">
        <span className="eyebrow">LOCALIZAÇÃO</span>
        <h2 className="h2">Onde estamos</h2>
      </div>
      <div className="loc">
        <div className="map">
          <iframe
            title={`Mapa da ${clinic.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapsEmbedSrc}
          />
        </div>
        <div className="loc-cards">
          <div className="card">
            <h3>{clinic.name}</h3>
            <address>
              {clinic.address.street}
              <br />
              {clinic.address.neighborhood}
              <br />
              {clinic.address.city} - {clinic.address.state}
              <br />
              {clinic.address.zipCode}
            </address>
            <div className="links">
              <TrackedLink href={`tel:${clinic.phone}`} events={["click_phone"]}>
                Tel. {clinic.phoneDisplay}
              </TrackedLink>
              <WhatsAppButton>WhatsApp {clinic.whatsappDisplay}</WhatsAppButton>
              <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
            </div>
            <TrackedLink
              className="btn btn-maps"
              target="_blank"
              rel="noopener"
              events={["click_maps"]}
              href={mapsLink}
            >
              Abrir no Google Maps
            </TrackedLink>
          </div>
          <OpeningHours />
        </div>
      </div>
    </section>
  );
}
