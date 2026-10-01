import { trustStats } from "@/config/clinic";

export function TrustBar() {
  return (
    <section className="trust" aria-label="Diferenciais">
      <dl className="container">
        {trustStats.map((stat) => (
          <div key={stat.id}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
