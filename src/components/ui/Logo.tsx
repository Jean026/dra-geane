/** Logo provisória em texto. Substituir por public/logo/logo.svg quando o arquivo oficial for fornecido. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none" aria-label="Mulher + Bonita Clínicas Integradas">
      <span className={`font-serif text-[1.35rem] font-medium tracking-wide sm:text-2xl ${light ? "text-white" : "text-rose"}`}>
        Mulher <span className={light ? "text-champagne" : "text-terracota"}>+</span> Bonita
      </span>
      <span className={`mt-1 text-[0.55rem] uppercase tracking-[0.34em] ${light ? "text-champagne" : "text-terracota"}`}>Clínicas Integradas</span>
    </span>
  );
}
