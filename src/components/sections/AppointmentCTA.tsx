import { images } from "@/data/images";
import Photo from "@/components/ui/Photo";
import BgVideo from "@/components/ui/BgVideo";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function AppointmentCTA() {
  return (
    <section aria-labelledby="cta-titulo" className="relative overflow-hidden bg-rose">
      {/* Mobile: foto em cima, texto sobre rosé embaixo. Desktop: foto 16:9 com véu rosé à esquerda. */}
      <div className="relative aspect-[16/10] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-[62%] lg:aspect-auto">
        <Photo src={images.cta.src} alt={images.cta.alt} label={images.cta.label} tone="dark" sizes="100vw" objectPosition="center" />
        {images.cta.video && <BgVideo src={images.cta.video} objectPosition="center" />}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-rose via-rose/30 to-transparent lg:block" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-rose to-transparent lg:hidden" aria-hidden="true" />
      </div>
      <div className="container-x relative">
        <Reveal className="max-w-xl py-12 sm:py-16 lg:flex lg:min-h-[34rem] lg:flex-col lg:justify-center lg:py-24">
          <p className="eyebrow !text-champagne">Seu momento de cuidar de você</p>
          <h2 id="cta-titulo" className="mt-3 text-balance text-3xl leading-tight !text-white sm:text-4xl lg:text-5xl">O cuidado que você merece começa aqui.</h2>
          <span className="rule mt-5 !bg-champagne" aria-hidden="true" />
          <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
            Entre em contato com a Mulher + Bonita e descubra mais sobre nossos tratamentos e possibilidades de atendimento.
          </p>
          <WhatsAppButton variant="light" className="mt-8 w-full sm:w-auto">Agendar pelo WhatsApp</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
