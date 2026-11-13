import { clinic } from "@/data/clinic";

export const DEFAULT_MESSAGE = "Olá! Conheci a Mulher + Bonita pelo site e gostaria de agendar uma avaliação.";

export function whatsappUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${clinic.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
