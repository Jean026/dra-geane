"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/clinic";
import { whatsappUrl } from "@/lib/whatsapp";
import Logo from "@/components/ui/Logo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-card" : ""}`}>
      <div className="container-x flex h-[4.25rem] items-center justify-between gap-4 lg:h-20">
        <a href="#inicio" aria-label="Mulher + Bonita – início" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="whitespace-nowrap text-[0.85rem] font-medium text-cocoa transition-colors hover:text-terracota">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary hidden shrink-0 whitespace-nowrap !px-5 !py-3 lg:inline-flex">
          Agendar avaliação
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="-mr-2 rounded-full p-2 text-rose lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
