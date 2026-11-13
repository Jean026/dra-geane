import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = { title: "Informações Legais" };

export default function Page() {
  return (
    <LegalPage title="Informações Legais">
      <p>O conteúdo deste site tem caráter informativo e institucional e não substitui avaliação profissional individualizada.</p>
      <h2 className="font-serif">Sobre os tratamentos</h2>
      <p>A indicação de qualquer procedimento depende de avaliação. Os resultados variam de pessoa para pessoa e não há garantia de resultado.</p>
      <h2 className="font-serif">Avaliações</h2>
      <p>A nota exibida é informada pela clínica com base no Google e pode diferir do valor atual.</p>
      <h2 className="font-serif">Empresa</h2>
      <p>{clinic.name}. CNPJ: [a informar]. Responsável técnico e registro profissional: [a informar].</p>
    </LegalPage>
  );
}
