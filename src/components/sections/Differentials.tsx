import { Award, UserRound, HeartHandshake, Armchair } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const items = [
  { icon: Award, title: "Experiência e Dedicação", text: "Mais de duas décadas dedicadas à valorização da saúde e beleza, conforme apresentação da profissional." },
  { icon: UserRound, title: "Atendimento Individualizado", text: "Atenção às particularidades, necessidades e objetivos de cada pessoa." },
  { icon: HeartHandshake, title: "Cuidado Integrado", text: "Uma proposta que considera beleza, conforto e bem-estar." },
  { icon: Armchair, title: "Ambiente Acolhedor", text: "Um espaço pensado para proporcionar tranquilidade durante o atendimento." },
];

export default function Differentials() {
  return (
    <section aria-labelledby="diferenciais" className="section-y bg-nude/60">
      <div className="container-x">
        <SectionHeading id="diferenciais" title="Cuidado que vai além da estética." subtitle="Uma experiência que valoriza você em cada detalhe." />
        <ul className="mt-12 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <li key={it.title}>
              <Reveal delay={i * 0.07} className="h-full">
                <div className="h-full rounded-2xl border border-champagne/40 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <it.icon className="h-7 w-7 text-terracota" strokeWidth={1.4} aria-hidden="true" />
                  <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-champagne">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-lg leading-snug">{it.title}</h3>
                  <p className="mt-3 text-[0.93rem] leading-relaxed text-cocoa/80">{it.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
