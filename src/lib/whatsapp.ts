type GenerateWhatsAppLinkParams = {
  phone: string;
  message: string;
};

export function generateWhatsAppLink({
  phone,
  message,
}: GenerateWhatsAppLinkParams): string {
  const digitsOnly = phone.replace(/\D/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}
