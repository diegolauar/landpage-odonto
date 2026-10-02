import type {
  DentalService,
  DifferentialItem,
  FAQItem,
  GalleryImage,
  OpeningHourEntry,
  Testimonial,
  TeamMember,
  TrustStat,
} from "@/types/clinic";

export const clinic = {
  name: "Odonto Vianópolis",
  shortName: "ODONTO VIANÓPOLIS",
  slogan: "Seu sorriso em boas mãos.",
  category: "Clínica Odontológica",

  description:
    "Na Odonto Vianópolis, oferecemos atendimento odontológico completo, personalizado e humanizado para cuidar da saúde e da estética do seu sorriso.",

  heroHeadline: "Seu sorriso em",
  heroHeadlineScript: "boas mãos.",
  heroSubheadline:
    "Atendimento odontológico completo, personalizado e humanizado para cuidar da sua saúde e transformar seu sorriso.",
  heroImage: "/images/hero/alvaro-amaral.jpg",
  heroImageAlt: "Dr. Álvaro Amaral, cirurgião-dentista da Odonto Vianópolis",

  phone: "+553133334444",
  phoneDisplay: "(31) 3333-4444",

  whatsapp: "+5531999999999",
  whatsappDisplay: "(31) 99999-9999",
  whatsappDefaultMessage:
    "Olá! Gostaria de agendar uma avaliação na Odonto Vianópolis.",

  email: "contato@odontovianopolis.com.br",

  address: {
    street: "Rua das Acácias, 250",
    neighborhood: "Vianópolis",
    city: "Betim",
    state: "MG",
    zipCode: "32600-000",
    country: "BR",
  },

  siteUrl: "https://odontovianopolis.com.br",

  social: {
    instagram: "https://instagram.com/odontovianopolis",
    instagramHandle: "@odontovianopolis",
    facebook: "https://facebook.com/odontovianopolis",
  },

  responsibleCro: "CRO-MG 00000",
} as const;

export const openingHours: OpeningHourEntry[] = [
  { day: "Segunda", hours: "08:00 – 18:00" },
  { day: "Terça", hours: "08:00 – 18:00" },
  { day: "Quarta", hours: "08:00 – 18:00" },
  { day: "Quinta", hours: "08:00 – 18:00" },
  { day: "Sexta", hours: "08:00 – 18:00" },
  { day: "Sábado", hours: "08:00 – 12:00" },
  { day: "Domingo", hours: "Fechado", closed: true },
];

export const trustStats: TrustStat[] = [
  { id: "experience", value: "+10 anos", label: "de experiência" },
  { id: "patients", value: "+5.000", label: "pacientes atendidos" },
  { id: "personalized", value: "Atendimento", label: "personalizado" },
  { id: "structure", value: "Estrutura", label: "moderna" },
];

export const services: DentalService[] = [
  {
    id: "limpeza-prevencao",
    name: "Limpeza e prevenção",
    description: "Cuidados preventivos para manter sua saúde bucal em dia.",
    slug: "limpeza-e-prevencao",
    active: true,
  },
  {
    id: "clareamento-dental",
    name: "Clareamento dental",
    description: "Tratamentos para deixar seu sorriso mais iluminado.",
    slug: "clareamento-dental",
    active: true,
  },
  {
    id: "implantes-dentarios",
    name: "Implantes dentários",
    description: "Soluções modernas para recuperação de dentes perdidos.",
    slug: "implantes-dentarios",
    active: true,
  },
  {
    id: "ortodontia",
    name: "Ortodontia",
    description: "Tratamentos para alinhar os dentes e melhorar sua mordida.",
    slug: "ortodontia",
    active: true,
  },
  {
    id: "facetas-dentarias",
    name: "Facetas dentárias",
    description: "Procedimentos estéticos para transformar o sorriso.",
    slug: "facetas-dentarias",
    active: true,
  },
  {
    id: "restauracao",
    name: "Restauração",
    description: "Recuperação da estrutura e função dos dentes.",
    slug: "restauracao",
    active: true,
  },
  {
    id: "odontopediatria",
    name: "Odontopediatria",
    description: "Atendimento especializado para crianças.",
    slug: "odontopediatria",
    active: true,
  },
  {
    id: "avaliacao-odontologica",
    name: "Avaliação odontológica",
    description:
      "Avaliação completa para identificar as melhores opções de tratamento.",
    slug: "avaliacao-odontologica",
    active: true,
  },
];

export const differentials: DifferentialItem[] = [
  {
    id: "atendimento-humanizado",
    title: "Atendimento humanizado",
    description: "Cada paciente é atendido de forma individualizada.",
  },
  {
    id: "estrutura-moderna",
    title: "Estrutura moderna",
    description:
      "Ambiente confortável e equipado para proporcionar uma experiência tranquila.",
  },
  {
    id: "profissionais-qualificados",
    title: "Profissionais qualificados",
    description:
      "Equipe preparada para diferentes necessidades odontológicas.",
  },
  {
    id: "tecnologia",
    title: "Tecnologia",
    description:
      "Utilização de recursos modernos para diagnóstico e tratamento.",
  },
  {
    id: "seguranca",
    title: "Segurança",
    description:
      "Protocolos de higiene e segurança em todos os atendimentos.",
  },
];

export const team: TeamMember[] = [
  {
    id: "mariana-oliveira",
    name: "Dra. Mariana Oliveira",
    role: "Cirurgiã-Dentista",
    credential: "CRO-MG 00000",
    specialty: "Especialista em Dentística e Estética.",
  },
  {
    id: "alvaro-amaral",
    name: "Dr. Álvaro Amaral",
    role: "Cirurgião-Dentista",
    credential: "CRO-MG 62817",
    specialty:
      "Especialista em Implante e Prótese, pós-graduado em Periodontia.",
    image: "/images/team/alvaro-amaral.jpg",
  },
  {
    id: "camila-ferreira",
    name: "Dra. Camila Ferreira",
    role: "Cirurgiã-Dentista",
    credential: "CRO-MG 00000",
    specialty: "Especialista em Ortodontia.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "mariana-s",
    quote:
      "Fui muito bem atendida desde o primeiro contato. Toda a equipe foi extremamente atenciosa.",
    author: "Mariana S.",
  },
  {
    id: "carlos-r",
    quote: "O ambiente é muito confortável e o atendimento foi excelente.",
    author: "Carlos R.",
  },
  {
    id: "fernanda-a",
    quote:
      "Finalmente encontrei uma clínica onde me sinto tranquilo durante o tratamento.",
    author: "Fernanda A.",
  },
];

export const gallery: GalleryImage[] = [
  { id: "recepcao", tag: "Recepção", alt: "Recepção da clínica" },
  { id: "consultorios", tag: "Consultórios", alt: "Consultório odontológico" },
  { id: "equipamentos", tag: "Equipamentos", alt: "Equipamentos odontológicos" },
  { id: "equipe", tag: "Equipe", alt: "Equipe da clínica" },
  { id: "ambiente", tag: "Ambiente", alt: "Ambiente da clínica" },
  { id: "fachada", tag: "Fachada", alt: "Fachada da clínica" },
];

export const faqs: FAQItem[] = [
  {
    id: "marcar-consulta",
    question: "Preciso marcar uma consulta?",
    answer:
      "Sim. Entre em contato pelo WhatsApp para verificar os horários disponíveis.",
    openByDefault: true,
  },
  {
    id: "atende-criancas",
    question: "Vocês atendem crianças?",
    answer: "Sim. A clínica oferece atendimento odontológico infantil.",
  },
  {
    id: "aceita-cartao",
    question: "A clínica aceita cartão?",
    answer: "Sim. Aceitamos cartões de crédito e débito.",
  },
  {
    id: "convenios",
    question: "Vocês trabalham com convênios?",
    answer:
      "Consulte nossa equipe pelo WhatsApp para saber quais convênios são aceitos no momento.",
  },
  {
    id: "como-chegar",
    question: "Como chegar à clínica?",
    answer:
      "Estamos localizados em Vianópolis, Betim-MG. Consulte o mapa na seção de localização.",
  },
  {
    id: "duvidas-whatsapp",
    question: "Posso tirar dúvidas pelo WhatsApp?",
    answer:
      "Sim. Nossa equipe está disponível para orientar você e realizar o agendamento.",
  },
];

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];
