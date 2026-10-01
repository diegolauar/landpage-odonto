import { clinic } from "@/config/clinic";
import { TrackedLink } from "@/components/TrackedLink/TrackedLink";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";

export function CTA() {
  return (
    <section className="container cta">
      <div className="cta-box">
        <div className="stack">
          <p className="eyebrow">AGENDE SUA AVALIAÇÃO</p>
          <h2 className="h2">Seu novo sorriso começa com uma conversa.</h2>
          <p className="lead">
            Fale com a nossa equipe e encontre o melhor horário para você.
          </p>
        </div>
        <div className="cta-actions">
          <WhatsAppButton
            className="btn btn-gold"
            events={["click_schedule", "click_whatsapp"]}
          >
            Agendar pelo WhatsApp
          </WhatsAppButton>
          <TrackedLink href={`tel:${clinic.phone}`} events={["click_phone"]}>
            ou ligue {clinic.phoneDisplay}
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
