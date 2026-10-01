import type { Metadata } from "next";
import { Allura, Jost } from "next/font/google";
import { clinic } from "@/config/clinic";
import { generateDentistSchema } from "@/lib/schema";
import "./globals.css";

const jost = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jost",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title: "Odonto Vianópolis | Clínica Odontológica em Betim - MG",
  description:
    "Odonto Vianópolis: clínica odontológica em Betim-MG. Oferecemos tratamentos odontológicos, estética dental, implantes, ortodontia e atendimento personalizado. Agende sua consulta.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Odonto Vianópolis | Clínica Odontológica em Betim - MG",
    description:
      "Atendimento odontológico completo, personalizado e humanizado em Vianópolis, Betim-MG.",
    url: clinic.siteUrl,
    images: ["/images/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odonto Vianópolis | Clínica Odontológica em Betim - MG",
    description:
      "Atendimento odontológico completo, personalizado e humanizado em Vianópolis, Betim-MG.",
    images: ["/images/og.jpg"],
  },
  icons: {
    icon: "/images/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateDentistSchema();

  return (
    <html lang="pt-BR" className={`${jost.variable} ${allura.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
