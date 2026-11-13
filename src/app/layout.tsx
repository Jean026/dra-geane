import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";
import { clinic } from "@/data/clinic";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

const title = "Mulher + Bonita | Estética Avançada em Dois Vizinhos – PR";
const description =
  "Conheça a Mulher + Bonita Clínicas Integradas, da Dra. Geane Constante, em Dois Vizinhos – PR. Estética avançada, cuidados personalizados e agendamentos pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title: { default: title, template: "%s | Mulher + Bonita" },
  description,
  // canonical só quando o domínio oficial estiver definido em NEXT_PUBLIC_SITE_URL
  ...(clinic.hasDomain ? { alternates: { canonical: "/" } } : {}),
  openGraph: { type: "website", locale: "pt_BR", siteName: clinic.name, title, description, url: "/" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#8C4F59", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Somente dados informados e verificados (sem horário, sem credenciais não confirmadas)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: clinic.name,
    url: clinic.siteUrl,
    telephone: `+${clinic.whatsapp.number}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.zip,
      addressCountry: "BR",
    },
    sameAs: [clinic.instagram.url, clinic.facebook.url],
  };

  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <a href="#conteudo" className="sr-only z-[80] rounded bg-terracota px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
