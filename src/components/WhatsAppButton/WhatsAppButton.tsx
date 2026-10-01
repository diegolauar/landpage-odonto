import type { AnalyticsEvent } from "@/lib/analytics";
import { clinic } from "@/config/clinic";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/TrackedLink/TrackedLink";

type WhatsAppButtonProps = {
  className?: string;
  children: React.ReactNode;
  service?: string;
  events?: AnalyticsEvent[];
  ariaLabel?: string;
};

export function WhatsAppButton({
  className,
  children,
  service,
  events = ["click_whatsapp"],
  ariaLabel,
}: WhatsAppButtonProps) {
  const message = service
    ? `Olá! Gostaria de agendar uma avaliação de ${service.toLowerCase()} na ${clinic.name}.`
    : clinic.whatsappDefaultMessage;

  return (
    <TrackedLink
      href={generateWhatsAppLink({ phone: clinic.whatsapp, message })}
      target="_blank"
      rel="noopener"
      className={className}
      events={events}
      aria-label={ariaLabel}
    >
      {children}
    </TrackedLink>
  );
}
