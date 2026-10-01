import { services } from "@/config/clinic";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";

export function Treatments() {
  return (
    <section id="tratamentos" className="treat-wrap">
      <div className="container section">
        <div className="section-head">
          <div className="stack" style={{ maxWidth: 620 }}>
            <span className="eyebrow">TRATAMENTOS</span>
            <h2 className="h2">Tratamentos para cuidar do seu sorriso</h2>
          </div>
          <p className="lead">
            Da prevenção à estética, com avaliação completa antes de qualquer
            procedimento.
          </p>
        </div>
        <ul className="treat-grid">
          {services
            .filter((service) => service.active)
            .map((service, index) => (
              <li key={service.id}>
                <span className="num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <WhatsAppButton service={service.name}>
                  Agendar avaliação →
                </WhatsAppButton>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
