"use client";

import { useEffect } from "react";
import { navLinks } from "@/data/clinic";
import { whatsappUrl } from "@/lib/whatsapp";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      id="menu-mobile"
      hidden={!open}
      className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-champagne/40 bg-white lg:hidden"
    >
      <nav aria-label="Menu móvel" className="container-x py-4">
        <ul>
          {navLinks.map((l) => (
            <li key={l.href} className="border-b border-champagne/30">
              <a href={l.href} onClick={onClose} className="block py-3.5 font-serif text-lg text-rose">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={onClose} className="btn-primary mt-5 w-full">
          Agendar avaliação
        </a>
      </nav>
    </div>
  );
}
