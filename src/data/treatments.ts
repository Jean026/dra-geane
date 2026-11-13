import type { Slot } from "./images";

export type Treatment = {
  id: string;
  name: string;
  description: string;
  cta: string;
  /** mensagem pré-preenchida no WhatsApp */
  message: string;
  image: Slot;
  icon: "sparkles" | "heart" | "flower" | "leaf";
};

/** Para adicionar um novo tratamento, basta incluir mais um item neste array. */
export const treatments: Treatment[] = [
  {
    id: "secagem-de-vasinhos",
    name: "Secagem de Vasinhos",
    description:
      "Cuidado estético voltado aos vasinhos superficiais, com avaliação individualizada para verificar a indicação do procedimento.",
    cta: "Saiba mais",
    message: "Olá! Conheci o site da Mulher + Bonita e gostaria de saber mais sobre a secagem de vasinhos.",
    image: { src: "/images/treatments/secagem-de-vasinhos.webp", alt: "Dra. Geane e paciente em avaliação estética das pernas", label: "Secagem de vasinhos (1:1)", ratio: "1/1" },
    icon: "leaf",
  },
  {
    id: "lipedema",
    name: "Cuidados Relacionados ao Lipedema",
    description:
      "Acompanhamento e cuidados oferecidos pela clínica para pessoas com lipedema, sempre respeitando os limites da atuação profissional.",
    cta: "Conhecer atendimento",
    message: "Olá! Conheci o site da Mulher + Bonita e gostaria de saber mais sobre o atendimento relacionado ao lipedema.",
    image: { src: "/images/treatments/lipedema.webp", alt: "Dra. Geane explicando a uma paciente com auxílio de um tablet", label: "Lipedema (1:1)", ratio: "1/1" },
    icon: "heart",
  },
  {
    // TODO: confirmar com a clínica quais procedimentos de harmonização são realizados
    id: "harmonizacao",
    name: "Harmonização",
    description:
      "Procedimentos de harmonização com avaliação individualizada e planejamento responsável.",
    cta: "Saiba mais",
    message: "Olá! Conheci o site da Mulher + Bonita e gostaria de saber mais sobre harmonização.",
    image: { src: "/images/treatments/harmonizacao.webp", alt: "Dra. Geane realizando avaliação facial em paciente", label: "Harmonização (1:1)", ratio: "1/1" },
    icon: "sparkles",
  },
  {
    id: "protocolos-personalizados",
    name: "Protocolos Estéticos Personalizados",
    description:
      "Cuidados pensados a partir das necessidades e dos objetivos de cada pessoa, com orientação profissional em cada etapa.",
    cta: "Consultar tratamentos",
    message: "Olá! Conheci o site da Mulher + Bonita e gostaria de consultar os protocolos estéticos personalizados.",
    image: { src: "/images/treatments/protocolos.webp", alt: "Produtos de cuidado sobre bancada de mármore", label: "Protocolos personalizados (1:1)", ratio: "1/1" },
    icon: "flower",
  },
];
