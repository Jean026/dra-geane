import { gallery } from "@/data/gallery";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryLightbox from "@/components/ui/GalleryLightbox";

export default function Gallery() {
  return (
    <section id="estrutura" aria-labelledby="estrutura-titulo" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading id="estrutura-titulo"
          eyebrow="Conheça nosso espaço"
          title="Um ambiente preparado para receber você."
          subtitle="Conheça a estrutura da Mulher + Bonita e os espaços dedicados ao seu conforto."
        />
        <div className="mt-12">
          <GalleryLightbox items={gallery} />
        </div>
      </div>
    </section>
  );
}
