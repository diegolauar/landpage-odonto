import Image from "next/image";
import { clinic } from "@/config/clinic";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";

export function Hero() {
  return (
    <section id="inicio" className="container hero">
      <div className="hero-text">
        <span className="eyebrow">
          {clinic.category.toUpperCase()} · {clinic.address.city.toUpperCase()}
          {" - "}
          {clinic.address.state}
        </span>
        <h1>
          {clinic.heroHeadline} <span className="script">{clinic.heroHeadlineScript}</span>
        </h1>
        <div className="rule"></div>
        <p className="lead">{clinic.heroSubheadline}</p>
        <div className="btns">
          <WhatsAppButton
            className="btn btn-primary"
            events={["click_schedule", "click_whatsapp"]}
          >
            Agendar minha consulta
          </WhatsAppButton>
          <a className="btn btn-outline" href="#tratamentos">
            Conheça nossos tratamentos
          </a>
        </div>
        <ul className="hero-notes">
          <li>Atendimento com hora marcada</li>
          <li className="dot" aria-hidden="true">
            ·
          </li>
          <li>Crianças e adultos</li>
          <li className="dot" aria-hidden="true">
            ·
          </li>
          <li>Cartões de crédito e débito</li>
        </ul>
      </div>
      <div className="hero-media">
        <div className="foto">
          {clinic.heroImage ? (
            <Image
              src={clinic.heroImage}
              alt={clinic.heroImageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 500px"
            />
          ) : (
            "Foto: dentista atendendo / profissional sorrindo"
          )}
        </div>
        <div className="hero-card">
          <span>AGENDE SUA AVALIAÇÃO</span>
          <WhatsAppButton events={["click_whatsapp"]}>
            {clinic.whatsappDisplay}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
