import Image from "next/image";

/** Logo oficial. `light` usa a versão clara (para fundos escuros, como o rodapé). */
export default function Logo({ light = false, priority = false, className = "" }: { light?: boolean; priority?: boolean; className?: string }) {
  return (
    <Image
      src={light ? "/logo/logo-clara.png" : "/logo/logo-escura.png"}
      alt="Mulher + Bonita Clínicas Integradas – estética avançada"
      width={light ? 2024 : 2003}
      height={light ? 423 : 403}
      priority={priority}
      sizes="(min-width:1280px) 240px, 200px"
      className={`w-auto ${className}`}
    />
  );
}
