import type { Metadata } from "next";
import { Archivo, Geist, Instrument_Serif } from "next/font/google";
import { EMAIL, PHONE_DISPLAY } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: "italic",
});

const title = "Rui Pai · CT de Futevôlei no Recreio";
const description =
  "11 quadras no Recreio dos Bandeirantes — 7 no Posto 11 e 4 na Praça Mozart Firmeza. Aulas de futevôlei, personal e funcional. Do iniciante ao profissional.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://rpaifutevoleipersonal.com.br"),
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Rui Pai Futevôlei Personal",
  description,
  url: "https://rpaifutevoleipersonal.com.br",
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Lúcio Costa, 17600 — Posto 11",
    addressLocality: "Recreio dos Bandeirantes",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/ct.rpai_futevolei_personal/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geist.variable} ${archivo.variable} ${instrument.variable} bg-foam text-ink antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#conteudo" className="skip">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
