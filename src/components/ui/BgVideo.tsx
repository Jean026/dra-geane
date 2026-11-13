"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vídeo decorativo mudo por cima da imagem (que serve de poster).
 * Não carrega com "reduzir movimento" nem "economia de dados" e pausa fora da tela.
 */
export default function BgVideo({ src, objectPosition = "center" }: { src: string; objectPosition?: string }) {
  const [ok, setOk] = useState(false);
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const update = () => setOk(mq.matches && !conn?.saveData);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!ok || !v) return;
    v.muted = true;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [ok]);

  if (!ok) return null;
  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      onPlaying={() => setPlaying(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${playing ? "opacity-100" : "opacity-0"}`}
      style={{ objectPosition }}
    />
  );
}
