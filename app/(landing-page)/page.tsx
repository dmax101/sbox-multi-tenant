import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { stackServerApp } from "@/stack";
import { CircleDollarSignIcon, Cloud, CloudIcon, ComponentIcon, MonitorCheckIcon, PuzzleIcon, ShieldCheckIcon, Users } from "lucide-react";

export default async function IndexPage() {
  const project = await stackServerApp.getProject();
  if (!project.config.clientTeamCreationEnabled) {
    return (
      <div className="w-full min-h-96 flex items-center justify-center">
        <div className="max-w-xl gap-4">
          <p className="font-bold text-xl">Setup Required</p>
          <p className="">
            {
              "To start using this project, please enable client-side team creation in the Stack Auth dashboard (Project > Team Settings). This message will disappear once the feature is enabled."
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero
        capsuleText="Solução Completa para PMEs"
        capsuleLink="https://studiobox101.com"
        title="Sua Solução Tudo-em-Um para Pequenas e Médias Empresas"
        subtitle="Sistemas abrangentes oferecidos em um só lugar. Seguro e confiável."
        primaryCtaText="Comece Agora"
        primaryCtaLink={stackServerApp.urls.signUp}
      />

      <div id="features" />
      <FeatureGrid
        title="Recursos"
        subtitle="Desbloqueie o potencial do seu negócio."
        items={[
          {
            icon: <Users className="h-12 w-12" />,
            title: "Autenticação",
            description: "Multi-tenant, RBAC, e muito mais.",
          },
          {
            icon: <PuzzleIcon className="h-12 w-12" />,
            title: "Design Modular",
            description: "Soluções prontas ou exclusivas.",
          },
          {
            icon: <ShieldCheckIcon className="h-12 w-12" />,
            title: "Segurança",
            description: "Proteção de dados e informações.",
          },
          {
            icon: <MonitorCheckIcon className="h-12 w-12" />,
            title: "Simples de Utilizar",
            description: "Interface amigável e intuitiva.",
          },
          {
            icon: <CloudIcon className="h-12 w-12" />,
            title: "Está na Núvem",
            description: "Acesse de qualquer lugar.",
          },
          {
            icon: <CircleDollarSignIcon className="h-12 w-12" />,
            title: "Pague apenas o que usar",
            description: "Planos flexíveis e acessíveis.",
          }
        ]}
      />
    </>
  );
}
