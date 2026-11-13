import { images } from "@/data/images";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";

export default function AboutClinic() {
  return (
    <section id="clinica" aria-labelledby="sobre-titulo" className="section-y bg-white">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <span className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl border border-champagne" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Photo src={images.clinic.src} alt={images.clinic.alt} label={images.clinic.label} sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">Conheça a Mulher + Bonita</p>
          <h2 id="sobre-titulo" className="mt-3 text-balance text-3xl leading-tight sm:text-4xl">Um espaço onde cuidado, beleza e bem-estar se encontram.</h2>
          <span className="rule mt-5" aria-hidden="true" />
          <div className="mt-6 space-y-4 leading-relaxed text-cocoa/85">
            <p>A Mulher + Bonita Clínicas Integradas, localizada em Dois Vizinhos, Paraná, é um espaço dedicado à saúde, beleza e estética avançada.</p>
            <p>Com uma proposta de atendimento acolhedor e individualizado, a clínica busca oferecer uma experiência de cuidado que respeita as necessidades de cada pessoa.</p>
            <p>Cada detalhe do ambiente e do atendimento é pensado para proporcionar conforto, confiança e bem-estar.</p>
          </div>
          <a href="#especialidades" className="btn-outline mt-8">Conheça nossas especialidades</a>
        </Reveal>
      </div>
    </section>
  );
}
