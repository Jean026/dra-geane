import { Star } from "lucide-react";
import { clinic } from "@/data/clinic";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  return (
    <section id="avaliacoes" aria-labelledby="aval-titulo" className="section-y bg-nude/60">
      <div className="container-x">
        <SectionHeading id="aval-titulo" eyebrow="A confiança de quem nos conhece" title="Histórias de cuidado e boas experiências." />

        <Reveal className="mx-auto mt-10 max-w-md rounded-2xl border border-champagne/50 bg-white p-8 text-center shadow-card">
          <div className="flex justify-center gap-1 text-terracota" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
          </div>
          <p className="mt-4 font-serif text-4xl text-rose">{clinic.rating.value} <span className="text-2xl text-cocoa/60">/ 5 estrelas</span></p>
          <p className="mt-2 text-cocoa/85">{clinic.rating.count} avaliações no {clinic.rating.source}</p>
          <p className="mt-2 text-xs text-cocoa/60">Dados informados pela clínica; não são sincronizados automaticamente.</p>
          <a href={clinic.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">Ver avaliações no Google</a>
        </Reveal>

        {testimonials.length > 0 && (
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.name} className="rounded-2xl border border-champagne/40 bg-white p-6">
                <div className="flex gap-0.5 text-terracota" role="img" aria-label={`Nota ${t.rating} de 5`}>
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-3 leading-relaxed text-cocoa/85">“{t.comment}”</blockquote>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-cocoa/60">Avaliação no {t.source}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
