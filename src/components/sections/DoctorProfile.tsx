import { Check } from "lucide-react";
import { images } from "@/data/images";
import Photo from "@/components/ui/Photo";
import BgVideo from "@/components/ui/BgVideo";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const highlights = [
  "Mais de 20 anos de experiência informados.",
  "Atuação em estética avançada.",
  "Atendimento individualizado.",
  "Cuidado com saúde e beleza.",
];

/** Qualificações confirmadas (formação, registro profissional etc.). Preencher somente com dados comprovados. */
const qualifications: string[] = [];

export default function DoctorProfile() {
  return (
    <section id="dra-geane" aria-labelledby="dra-titulo" className="section-y bg-white">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">Quem cuida de você</p>
          <h2 id="dra-titulo" className="mt-3 text-4xl leading-tight sm:text-5xl">Dra. Geane Constante</h2>
          <p className="mt-3 font-serif text-xl italic text-terracota">Experiência, dedicação e cuidado em cada atendimento.</p>
          <span className="rule mt-5" aria-hidden="true" />
          <div className="mt-6 space-y-4 leading-relaxed text-cocoa/85">
            <p>Com mais de 20 anos de atuação dedicados à saúde e beleza, conforme sua apresentação profissional, a Dra. Geane Constante construiu uma trajetória marcada pelo cuidado e pela atenção individualizada.</p>
            <p>À frente da Mulher + Bonita, valoriza uma abordagem acolhedora, buscando compreender as necessidades de cada pessoa e proporcionar uma experiência de atendimento diferenciada.</p>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-[0.95rem]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-terracota" strokeWidth={1.8} aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>

          {qualifications.length > 0 && (
            <div className="mt-7 rounded-xl border border-champagne/50 bg-nude/60 p-5">
              <h3 className="text-lg">Qualificações</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem]">
                {qualifications.map((q) => <li key={q}>{q}</li>)}
              </ul>
            </div>
          )}

          <WhatsAppButton className="mt-8" message="Olá! Conheci o site da Mulher + Bonita e gostaria de agendar um atendimento com a Dra. Geane.">
            Agendar com a Dra. Geane
          </WhatsAppButton>
        </Reveal>

        <Reveal delay={0.1} className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="relative">
            <span className="absolute -bottom-4 -right-4 h-full w-full rounded-t-[10rem] rounded-b-2xl border border-champagne" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-2xl">
              <Photo src={images.doctor.src} alt={images.doctor.alt} label={images.doctor.label} sizes="(min-width:1024px) 40vw, 90vw" objectPosition="center top" />
              {images.doctor.video && <BgVideo src={images.doctor.video} objectPosition="center top" />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
