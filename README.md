# Mulher + Bonita Clínicas Integradas — site institucional

Next.js 15 (App Router) + TypeScript + Tailwind 3 + Framer Motion + Lucide.

## Rodar
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start
Defina `NEXT_PUBLIC_SITE_URL` (ex.: https://dominio.com.br) para ativar canonical, sitemap e robots com o domínio real.

## Onde editar
- `src/data/clinic.ts` contato, endereço, nota do Google, link das avaliações
- `src/data/images.ts`, `gallery.ts`, `treatments.ts` imagens (src: null = placeholder) e tratamentos
- `src/data/testimonials.ts` somente depoimentos reais autorizados
- `src/components/sections/DoctorProfile.tsx` array `qualifications` (formações confirmadas)
- Imagens em `public/images/*`, logo em `public/logo/`

## Pendências
Fotos reais, logo oficial, confirmar procedimentos de harmonização, qualificações da Dra., domínio, URL oficial das avaliações do Google, CNPJ e revisão jurídica das páginas legais.

## Mídia (atualizado em 13/11/2026)
- 14 imagens em WebP em `public/images/*`; 4 vídeos mudos em `public/videos/` (hero, campanha, dra-geane, rodape), sem trilha de áudio.
- Hero e Campanha usam o 1º quadro do vídeo como poster (`*-poster.webp`), porque o Flow refez a cena e a Dra. aparece diferente da foto original. Para voltar às fotos originais, troque `src` em `src/data/images.ts` por `/images/hero/hero.webp` e `/images/cta/campanha.webp`.
- Galeria com 4 fotos reais; "Equipamentos" e "Acolhimento" ficam de fora até haver fotos.
