import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function Page() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>Esta página descreve, de forma resumida, como o site da {clinic.name} trata informações, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>
      <h2 className="font-serif">Quais dados são coletados</h2>
      <p>Este site não possui formulários nem cadastro. Os agendamentos são feitos diretamente pelo WhatsApp, e as informações enviadas por lá são tratadas apenas para responder ao seu contato e organizar o atendimento.</p>
      <h2 className="font-serif">Serviços de terceiros</h2>
      <p>O site incorpora o Google Maps e links para WhatsApp, Instagram e Facebook. Esses serviços possuem políticas de privacidade próprias.</p>
      <h2 className="font-serif">Seus direitos</h2>
      <p>Você pode solicitar acesso, correção ou exclusão dos seus dados pelo WhatsApp {clinic.whatsapp.display}.</p>
    </LegalPage>
  );
}
