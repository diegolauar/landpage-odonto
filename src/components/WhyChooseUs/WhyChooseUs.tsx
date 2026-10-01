import { differentials } from "@/config/clinic";

export function WhyChooseUs() {
  return (
    <section className="why">
      <div className="container section">
        <div className="stack">
          <span className="eyebrow">DIFERENCIAIS</span>
          <h2 className="h2">Por que escolher a Odonto Vianópolis?</h2>
          <p className="script">Sua saúde bucal, nossa missão.</p>
        </div>
        <ol>
          {differentials.map((item, index) => (
            <li key={item.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
