import { Sparkles, Heart, Flower2, Leaf } from "lucide-react";
import type { Treatment } from "@/data/treatments";
import Photo from "./Photo";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";

const icons = { sparkles: Sparkles, heart: Heart, flower: Flower2, leaf: Leaf };

export default function TreatmentCard({ t, index }: { t: Treatment; index: number }) {
  const Icon = icons[t.icon];
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-champagne/40 bg-white shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft">
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <Photo src={t.image.src} alt={t.image.alt} label={t.image.label} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 shrink-0 text-terracota" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.2em] text-champagne">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="mt-3 text-xl leading-snug">{t.name}</h3>
          <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-cocoa/80">{t.description}</p>
          <WhatsAppButton message={t.message} variant="outline" className="mt-6 w-full">
            {t.cta}
          </WhatsAppButton>
        </div>
      </article>
    </Reveal>
  );
}
