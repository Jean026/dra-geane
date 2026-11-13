"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Slot } from "@/data/images";
import Photo from "./Photo";

export default function GalleryLightbox({ items }: { items: Slot[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(null);
    trigger.current?.focus();
  }, []);
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  return (
    <>
      <ul className={`mx-auto grid grid-cols-2 gap-3 sm:gap-4 ${items.length % 3 === 0 ? "lg:grid-cols-3" : "max-w-4xl"}`}>
        {items.map((it, i) => (
          <li key={it.label}>
            <button
              type="button"
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`Ampliar: ${it.alt}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl"
            >
              <span className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Photo src={it.src} alt={it.alt} label={it.label} sizes="(min-width:1024px) 33vw, 50vw" />
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/70 to-transparent p-3 text-left text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {it.label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Galeria de imagens" className="fixed inset-0 z-[70] flex items-center justify-center bg-cocoa/90 p-4" onClick={close}>
          <button ref={closeBtn} type="button" onClick={close} aria-label="Fechar" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Imagem anterior"
            className="absolute left-2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-xl" onClick={(e) => e.stopPropagation()}>
            <Photo src={items[open].src} alt={items[open].alt} label={items[open].label} sizes="90vw" />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Próxima imagem"
            className="absolute right-2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <p className="absolute bottom-5 left-0 right-0 text-center text-sm text-white/80">
            {items[open].label} · {open + 1}/{items.length}
          </p>
        </div>
      )}
    </>
  );
}
