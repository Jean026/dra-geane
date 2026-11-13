import Link from "next/link";
import { clinic, fullAddress } from "@/data/clinic";
import { images } from "@/data/images";
import Logo from "@/components/ui/Logo";
import Photo from "@/components/ui/Photo";
import BgVideo from "@/components/ui/BgVideo";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";

const nav = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre Nós", href: "/#clinica" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Dra. Geane", href: "/#dra-geane" },
  { label: "Avaliações", href: "/#avaliacoes" },
  { label: "Contato", href: "/#contato" },
];

export default function Footer() {
  const linkCls = "text-white/85 transition-colors hover:text-champagne";
  return (
    <footer className="relative overflow-hidden bg-rose text-white">
      {images.footer.src && (
        <div className="absolute inset-0" aria-hidden="true">
          <Photo src={images.footer.src} alt="" sizes="100vw" />
          {images.footer.video && <BgVideo src={images.footer.video} />}
          <div className="absolute inset-0 bg-rose/55" />
        </div>
      )}
      <div className="container-x relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/85">Cuidado, beleza e bem-estar com atenção a cada detalhe.</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="font-serif text-lg !text-champagne">Navegação</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkCls}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-serif text-lg !text-champagne">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`https://wa.me/${clinic.whatsapp.number}`} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-2`}>
                <WhatsAppIcon className="h-4 w-4" /> {clinic.whatsapp.display}
              </a>
            </li>
            <li>
              <a href={clinic.instagram.url} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-2`}>
                <InstagramIcon className="h-4 w-4" /> {clinic.instagram.handle}
              </a>
            </li>
            <li>
              <a href={clinic.facebook.url} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-2`}>
                <FacebookIcon className="h-4 w-4" /> Facebook
              </a>
            </li>
            <li className="leading-relaxed text-white/85">{fullAddress}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-lg !text-champagne">Agendamento</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/85">Fale com a nossa equipe e conheça as possibilidades de atendimento.</p>
          <WhatsAppButton variant="light" className="mt-5">Agendar avaliação</WhatsAppButton>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mulher + Bonita Clínicas Integradas. Todos os direitos reservados.</p>
          <p className="flex gap-4">
            <Link href="/politica-de-privacidade" className="underline-offset-4 hover:text-champagne hover:underline">Política de Privacidade</Link>
            <Link href="/termos-de-uso" className="underline-offset-4 hover:text-champagne hover:underline">Informações legais</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
