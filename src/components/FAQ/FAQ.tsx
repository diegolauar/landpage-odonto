import { faqs } from "@/config/clinic";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";

export function FAQ() {
  return (
    <section id="duvidas" className="faq-wrap">
      <div className="container section">
        <div className="stack">
          <span className="eyebrow">DÚVIDAS</span>
          <h2 className="h2">Perguntas frequentes</h2>
          <p className="lead" style={{ maxWidth: 360 }}>
            Não encontrou sua resposta? Fale com a nossa equipe pelo
            WhatsApp.
          </p>
          <WhatsAppButton className="link-line">
            Tirar dúvidas →
          </WhatsAppButton>
        </div>
        <div className="faq">
          {faqs.map((item) => (
            <details key={item.id} open={item.openByDefault}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
