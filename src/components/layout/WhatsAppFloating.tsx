import { WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappUrl } from "@/lib/whatsapp";

export default function WhatsAppFloating() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35)] transition hover:scale-105 hover:bg-[#1ebe5a] sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
