import Image from "next/image";
import { team } from "@/config/clinic";

export function Team() {
  return (
    <section id="equipe" className="container section">
      <div className="stack center">
        <span className="eyebrow">EQUIPE</span>
        <h2 className="h2">Conheça nossa equipe</h2>
      </div>
      <ul className="team">
        {team.map((member) => (
          <li key={member.id}>
            <div className="foto">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 600px) 100vw, 33vw"
                />
              ) : (
                `Foto: ${member.name}`
              )}
            </div>
            <div>
              <h3>{member.name}</h3>
              <span className="role">
                {member.role} · {member.credential}
              </span>
              <p>{member.specialty}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
