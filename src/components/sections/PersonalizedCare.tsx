import { Check } from "lucide-react";
import { images } from "@/data/images";
import Photo from "@/components/ui/Photo";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const highlights = ["Avaliação individualizada.", "Orientação profissional.", "Atendimento acolhedor."];

export default function PersonalizedCare() {
  return (
    <section aria-labelledby="cuidado-titulo" className="section-y bg-nude">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Atenção a cada detalhe</p>
          <h2 id="cuidado-titulo" className="mt-3 text-balance text-3xl leading-tight sm:text-4xl">Cada pessoa tem sua história. Cada cuidado deve respeitar isso.</h2>
          <span className="rule mt-5" aria-hidden="true" />
          <div className="mt-6 space-y-4 leading-relaxed text-cocoa/85">
            <p>Na Mulher + Bonita, acreditamos que uma boa experiência começa com escuta, acolhimento e atenção às necessidades individuais.</p>
            <p>Por isso, valorizamos o atendimento personalizado e a orientação responsável sobre as possibilidades de cuidado.</p>
          </div>
          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-terracota" strokeWidth={1.8} aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
          <WhatsAppButton className="mt-8">Quero agendar uma avaliação</WhatsAppButton>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-b-4 border-terracota">
            <Photo src={images.care.src} alt={images.care.alt} label={images.care.label} sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
