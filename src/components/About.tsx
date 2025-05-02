
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Code, Book, User } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const About = () => {
  const [openSection, setOpenSection] = useState<string | null>("profile");

  return (
    <section id="sobre" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-all duration-300 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <User className="text-resume-blue mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold text-gray-800">Perfil</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Me chamo Matheus Rangel, tenho 25 anos e atuo como Desenvolvedor Junior com foco em soluções web.
                Sou um profissional proativo, com inglês fluente (C1) e paixão por criar experiências digitais eficientes.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all duration-300 animate-fade-in delay-100">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Code className="text-resume-blue mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold text-gray-800">Formação</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Atualmente sou estudante do programa Desenvolvedor Full Stack na EBAC, onde estou aprimorando minhas 
                habilidades em frontend e backend. Possuo conhecimentos sólidos em Python para desenvolvimento backend.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all duration-300 animate-fade-in delay-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Book className="text-resume-blue mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold text-gray-800">Experiência</h3>
              </div>
              <p className="text-gray-600">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="cursor-pointer underline decoration-dotted">Minha trajetória profissional</span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Experiência Profissional</h4>
                      <p className="text-xs">Desenvolvedor freelancer na Digit.all, utilizando Django e metodologias ágeis em projetos web.</p>
                    </div>
                  </HoverCardContent>
                </HoverCard> 
                {" "}inclui experiência como desenvolvedor freelancer na Digit.all, 
                onde trabalhei em projetos web utilizando Django e metodologias ágeis. 
                Também desenvolvi habilidades valiosas em atendimento ao cliente e resolução de problemas
                em minhas experiências anteriores.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <Collapsible open={openSection === "professional"} onOpenChange={() => setOpenSection(openSection === "professional" ? null : "professional")}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="flex w-full justify-between p-4 hover:bg-gray-50">
                <span className="font-semibold">Detalhes Profissionais</span>
                {openSection === "professional" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 bg-gray-50 rounded-md mt-2 animate-accordion-down">
              <p className="text-gray-600 mb-4">
                Como Desenvolvedor Júnior, tenho focado em tecnologias web modernas, utilizando HTML5, CSS, JavaScript e frameworks
                como React no frontend, além de Python e Django para desenvolvimento backend.
              </p>
              <p className="text-gray-600">
                Possuo proficiência em metodologias ágeis como Scrum e Kanban, que utilizo para gerenciar projetos de forma eficiente.
                Minha fluência em inglês (nível C1) me permite colaborar em equipes internacionais e acessar recursos técnicos
                atualizados.
              </p>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible open={openSection === "background"} onOpenChange={() => setOpenSection(openSection === "background" ? null : "background")}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="flex w-full justify-between p-4 hover:bg-gray-50">
                <span className="font-semibold">Background Profissional</span>
                {openSection === "background" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 bg-gray-50 rounded-md mt-2 animate-accordion-down">
              <p className="text-gray-600 mb-4">
                Antes de iniciar minha carreira em desenvolvimento, trabalhei como agente de aeroporto na Gol Linhas Aéreas,
                o que me proporcionou excelentes habilidades de atendimento ao cliente e resolução de problemas sob pressão.
              </p>
              <p className="text-gray-600">
                Também atuei como barman na Pousada Maravilha em Fernando de Noronha, experiência que aprimorou minhas habilidades de 
                comunicação e trabalho em equipe.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default About;
