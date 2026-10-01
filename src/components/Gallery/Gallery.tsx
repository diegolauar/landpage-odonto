import { gallery } from "@/config/clinic";

export function Gallery() {
  return (
    <section id="galeria" className="container section">
      <div className="stack">
        <span className="eyebrow">GALERIA</span>
        <h2 className="h2">Um ambiente pensado para você</h2>
      </div>
      <ul className="gallery">
        {gallery.map((item) => (
          <li key={item.id}>
            <div className="foto">Foto: {item.tag.toLowerCase()}</div>
            <span className="tag">{item.tag}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
