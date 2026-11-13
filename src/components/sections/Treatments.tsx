import { treatments } from "@/data/treatments";
import SectionHeading from "@/components/ui/SectionHeading";
import TreatmentCard from "@/components/ui/TreatmentCard";

export default function Treatments() {
  return (
    <section id="especialidades" aria-labelledby="esp-titulo" className="section-y bg-nude/60">
      <div className="container-x">
        <SectionHeading id="esp-titulo"
          eyebrow="Nossas especialidades"
          title="Cuidados especializados para diferentes necessidades."
          subtitle="Conheça algumas das áreas de atendimento da Mulher + Bonita."
        />
        <ul className="mt-12 mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {treatments.map((t, i) => (
            <li key={t.id}>
              <TreatmentCard t={t} index={i} />
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-cocoa/70">
          A indicação de qualquer procedimento depende de avaliação individualizada. Resultados variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  );
}
