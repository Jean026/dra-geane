/** Dados oficiais da clínica — fonte única para header, rodapé, contato e SEO. */
export const clinic = {
  name: "Mulher + Bonita Clínicas Integradas",
  shortName: "Mulher + Bonita",
  doctor: "Dra. Geane Constante",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** true somente quando NEXT_PUBLIC_SITE_URL estiver definida (domínio oficial) */
  hasDomain: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  whatsapp: { number: "5546999800883", display: "(46) 99980-0883" },
  instagram: { handle: "@dra.geaneconstante", url: "https://www.instagram.com/dra.geaneconstante/" },
  facebook: { url: "https://www.facebook.com/clinicamulhermaisbonitadv/" },
  address: {
    street: "Rua João Dalpasquale, 479, Sala 12",
    district: "Centro Norte",
    city: "Dois Vizinhos",
    state: "PR",
    zip: "85660-000",
  },
  /** Informado pelo cliente — NÃO é sincronizado automaticamente com o Google. */
  rating: { value: "4,8", count: 86, source: "Google", informed: true },
  /** Cole aqui o link oficial das avaliações (Google Business) quando disponível. */
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Mulher+%2B+Bonita+Cl%C3%ADnicas+Integradas+Dois+Vizinhos+PR",
  experienceYears: "20",
} as const;

export const fullAddress = `${clinic.address.street}, ${clinic.address.district}, ${clinic.address.city} – ${clinic.address.state}, CEP ${clinic.address.zip}`;
const q = encodeURIComponent(`${clinic.address.street}, ${clinic.address.city} - ${clinic.address.state}, ${clinic.address.zip}`);
export const mapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${q}&output=embed`;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Dra. Geane", href: "#dra-geane" },
  { label: "Nossa Estrutura", href: "#estrutura" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
] as const;
