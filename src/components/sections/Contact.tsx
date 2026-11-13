import { MapPin } from "lucide-react";
import { clinic, mapsEmbedUrl, mapsRouteUrl } from "@/data/clinic";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { whatsappUrl } from "@/lib/whatsapp";

const link = "underline-offset-4 transition-colors hover:text-terracota hover:underline";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";

export default function Contact() {
  const a = clinic.address;
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="section-y bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="eyebrow">Venha nos conhecer</p>
          <h2 id="contato-titulo" className="mt-3 text-balance text-3xl leading-tight sm:text-4xl">Estamos em Dois Vizinhos, esperando por você.</h2>
          <span className="rule mt-5" aria-hidden="true" />
          <address className="mt-6 space-y-3 not-italic leading-relaxed text-cocoa/85">
            <p className="font-serif text-xl text-rose">{clinic.name}</p>
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-terracota" strokeWidth={1.5} aria-hidden="true" />
              <a href={mapsRouteUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir endereço no Google Maps" className={link}>{a.street}<br />{a.district} – {a.city} – {a.state}<br />CEP {a.zip}</a>
            </p>
            <p className="flex items-center gap-3"><WhatsAppIcon className="h-5 w-5 shrink-0 text-terracota" /> <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp: {clinic.whatsapp.display}</a></p>
            <p className="flex items-center gap-3"><InstagramIcon className="h-5 w-5 shrink-0 text-terracota" /> <a href={clinic.instagram.url} target="_blank" rel="noopener noreferrer" className={link}>Instagram: {clinic.instagram.handle}</a></p>
            <p className="flex items-center gap-3">
              <FacebookIcon className="h-5 w-5 shrink-0 text-terracota" />
              <a href={clinic.facebook.url} target="_blank" rel="noopener noreferrer" className={link}>Facebook: Mulher + Bonita Clínicas Integradas</a>
            </p>
          </address>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={mapsRouteUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">Como chegar</a>
            <WhatsAppButton>Falar no WhatsApp</WhatsAppButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-champagne/50 shadow-card lg:aspect-auto lg:h-full lg:min-h-[22rem]">
            <iframe
              title="Mapa: localização da Mulher + Bonita Clínicas Integradas em Dois Vizinhos – PR"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
