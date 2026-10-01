import Image from "next/image";
import { clinic, navLinks } from "@/config/clinic";
import { TrackedLink } from "@/components/TrackedLink/TrackedLink";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#inicio" className="logo">
            <Image src="/images/logo-mark.png" alt="" width={58} height={40} />
            <span className="logo-text">
              <b>ODONTO</b>
              <small>VIANÓPOLIS</small>
            </span>
          </a>
          <span>{clinic.slogan}</span>
        </div>
        <nav aria-label="Rodapé">
          <span className="title">NAVEGAÇÃO</span>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div>
          <span className="title">CONTATO</span>
          <TrackedLink href={`tel:${clinic.phone}`} events={["click_phone"]}>
            {clinic.phoneDisplay}
          </TrackedLink>
          <WhatsAppButton>WhatsApp {clinic.whatsappDisplay}</WhatsAppButton>
          <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
          <span>
            {clinic.address.street} · {clinic.address.neighborhood},{" "}
            {clinic.address.city} - {clinic.address.state}
          </span>
        </div>
        <div>
          <span className="title">REDES SOCIAIS</span>
          <TrackedLink
            href={clinic.social.instagram}
            target="_blank"
            rel="noopener"
            events={["click_instagram"]}
          >
            Instagram {clinic.social.instagramHandle}
          </TrackedLink>
          <a href={clinic.social.facebook} target="_blank" rel="noopener">
            Facebook
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {year} {clinic.name} · {clinic.category} em {clinic.address.city} -{" "}
          {clinic.address.state}
        </span>
        <span>Responsável técnico: {clinic.responsibleCro}</span>
      </div>
    </footer>
  );
}
