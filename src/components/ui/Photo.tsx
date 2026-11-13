import Image from "next/image";
import { ImageIcon } from "lucide-react";

type Props = {
  src: string | null;
  alt: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  objectPosition?: string;
  tone?: "light" | "dark";
};

/** Foto real (next/image) ou placeholder identificado. O pai precisa ser `relative` com altura definida. */
export default function Photo({ src, alt, label, priority, sizes = "100vw", className = "", objectPosition = "center", tone = "light" }: Props) {
  if (src) {
    return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} style={{ objectPosition }} />;
  }
  const dark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para foto: ${alt}`}
      data-placeholder="foto"
      className={`absolute inset-0 flex flex-col items-center justify-center gap-2 text-center ${
        dark ? "bg-gradient-to-br from-rose-dark via-rose to-rose-dark text-white/55" : "bg-gradient-to-br from-[#f3e3dc] via-[#f8eee9] to-[#ecd5c8] text-rose/50"
      } ${className}`}
    >
      <ImageIcon className="h-7 w-7" strokeWidth={1.2} aria-hidden="true" />
      <span className="max-w-[16rem] px-4 text-[0.65rem] uppercase tracking-[0.2em]">Foto a inserir{label ? `: ${label}` : ""}</span>
    </div>
  );
}
