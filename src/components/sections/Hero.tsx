import { images } from "@/data/images";
import Photo from "@/components/ui/Photo";
import BgVideo from "@/components/ui/BgVideo";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative bg-nude pt-[4.25rem] lg:pt-20">
      {/* Mobile: foto em cima e texto embaixo. Desktop: foto 16:9 de fundo, texto na área livre à esquerda. */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-20 lg:aspect-auto">
        <Photo src={images.hero.src} alt={images.hero.alt} label={images.hero.label} priority sizes="100vw" objectPosition="80% center" />
        {images.hero.video && <BgVideo src={images.hero.video} objectPosition="80% center" />}
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#ecd3c7] via-[#ecd3c7]/55 to-transparent lg:block lg:[mask-image:linear-gradient(to_right,black_0%,black_38%,transparent_62%)]" aria-hidden="true" />
      </div>

      <div className="container-x relative">
        <div className="max-w-xl py-12 sm:py-16 lg:flex lg:min-h-[min(calc(100svh-5rem),46rem)] lg:max-w-[28rem] lg:flex-col lg:justify-center lg:py-24">
          <Reveal y={16}>
            <p className="eyebrow">Mulher + Bonita | Estética Avançada</p>
          </Reveal>
          <Reveal delay={0.1} y={28}>
            <h1 id="hero-title" className="mt-4 text-balance text-4xl leading-[1.1] sm:text-5xl lg:text-[3.1rem]">Sua beleza, sua saúde, seu melhor momento.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="rule mt-6" aria-hidden="true" />
            <p className="mt-6 text-base leading-relaxed text-cocoa sm:text-lg">
              Na Mulher + Bonita, cada cuidado é pensado para valorizar sua individualidade, proporcionando uma experiência de estética, acolhimento e bem-estar.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <WhatsAppButton>Agendar minha avaliação</WhatsAppButton>
              <a href="#especialidades" className="btn-outline bg-white/60 backdrop-blur-sm lg:bg-white/70">Conhecer tratamentos</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
