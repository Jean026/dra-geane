/**
 * Slots de imagem. Enquanto `src` for null, o site mostra um placeholder identificado.
 * `video` (opcional) é um vídeo mudo em loop sobre a imagem (que serve de poster).
 */
export type Slot = { src: string | null; alt: string; label: string; ratio: string; video?: string };

export const images = {
  hero: { src: "/images/hero/hero-poster.webp", video: "/videos/hero.mp4", alt: "Dra. Geane Constante sorrindo em ambiente acolhedor da clínica", label: "Hero principal (16:9)", ratio: "16/9" },
  clinic: { src: "/images/clinic/sobre.webp", alt: "Recepção da clínica Mulher + Bonita com balcão, poltronas de madeira e iluminação aconchegante", label: "Sobre a clínica (4:3)", ratio: "4/3" },
  doctor: { src: "/images/doctor/dra-geane.webp", video: "/videos/dra-geane.mp4", alt: "Retrato da Dra. Geane Constante em seu consultório", label: "Retrato da Dra. Geane (4:5)", ratio: "4/5" },
  care: { src: "/images/clinic/atendimento.webp", alt: "Dra. Geane Constante conversando com uma paciente durante a consulta", label: "Atendimento personalizado (4:3)", ratio: "4/3" },
  cta: { src: "/images/cta/campanha-poster.webp", video: "/videos/campanha.mp4", alt: "Dra. Geane Constante sentada em seu consultório", label: "Campanha de agendamento (16:9)", ratio: "16/9" },
  footer: { src: "/images/cta/rodape.webp", video: "/videos/rodape.mp4", alt: "", label: "Fundo decorativo do rodapé (16:9)", ratio: "16/9" },
} satisfies Record<string, Slot>;
