import type { ReactNode } from "react";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="container-x max-w-3xl pb-20 pt-32 sm:pt-36">
      <p className="eyebrow">Mulher + Bonita</p>
      <h1 className="mt-3 text-4xl">{title}</h1>
      <span className="rule mt-5" aria-hidden="true" />
      <div className="mt-8 space-y-4 leading-relaxed text-cocoa/85 [&_h2]:mt-8 [&_h2]:text-2xl">{children}</div>
      <p className="mt-10 rounded-xl border border-champagne/60 bg-nude p-4 text-sm">
        Texto-base provisório. Deve ser revisado por profissional jurídico antes da publicação.
      </p>
    </article>
  );
}
