import { testimonials } from "@/config/clinic";

export function Testimonials() {
  return (
    <section className="testi-wrap">
      <div className="container section">
        <div className="stack">
          <span className="eyebrow">DEPOIMENTOS</span>
          <h2 className="h2">O que nossos pacientes dizem</h2>
        </div>
        <div className="testi">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.id}>
              <span className="q" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>{testimonial.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
