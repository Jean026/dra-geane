import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  id?: string;
}) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && <p className={`eyebrow ${light ? "!text-champagne" : ""}`}>{eyebrow}</p>}
      <h2 id={id} className={`mt-3 text-balance text-3xl leading-tight sm:text-4xl lg:text-[2.6rem] ${light ? "!text-white" : ""}`}>{title}</h2>
      <span className={`rule mt-5 ${center ? "mx-auto" : ""}`} aria-hidden="true" />
      {subtitle && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-white/85" : "text-cocoa/80"}`}>{subtitle}</p>}
    </Reveal>
  );
}
