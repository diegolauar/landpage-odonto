import { clinic } from "@/config/clinic";
import { TrackedLink } from "@/components/TrackedLink/TrackedLink";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <span>
          {clinic.address.street} · {clinic.address.neighborhood} ·{" "}
          {clinic.address.city} - {clinic.address.state}
        </span>
        <span>
          Seg a Sex 08h–18h · Sáb 08h–12h &nbsp;·&nbsp;{" "}
          <TrackedLink href={`tel:${clinic.phone}`} events={["click_phone"]}>
            {clinic.phoneDisplay}
          </TrackedLink>
        </span>
      </div>
    </div>
  );
}
