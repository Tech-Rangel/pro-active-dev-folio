
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experiencia" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Experiência Profissional</h2>
        
        <div className="mt-10 space-y-8">
          <div className="timeline-item">
            <div className="mb-1 flex items-center">
              <h3 className="text-xl font-semibold text-resume-darkblue">Freelancer - Programador</h3>
              <Badge variant="outline" className="ml-2">Atual</Badge>
            </div>
            <p className="text-sm text-resume-gray mb-2">Digit.all</p>
            <p className="text-resume-gray">
              Desenvolvimento de soluções web utilizando Django e tecnologias frontend. 
              Participação em projetos colaborativos utilizando práticas ágeis para aumentar a produtividade da equipe.
            </p>
          </div>

          <div className="timeline-item">
            <h3 className="text-xl font-semibold text-resume-darkblue mb-1">Agente de Aeroporto</h3>
            <p className="text-sm text-resume-gray mb-2">Gol Linhas Aéreas | 2019 - 2022 (3 anos e 4 meses)</p>
            <p className="text-resume-gray">
              Atendimento ao cliente, resolução de problemas, coordenação de embarques e gestão de crises.
              Desenvolvimento de habilidades de comunicação e trabalho sob pressão.
            </p>
          </div>

          <div className="timeline-item">
            <h3 className="text-xl font-semibold text-resume-darkblue mb-1">Barman</h3>
            <p className="text-sm text-resume-gray mb-2">Pousada Maravilha, Fernando de Noronha | 2017 - 2019 (2 anos)</p>
            <p className="text-resume-gray">
              Atendimento ao cliente em ambiente turístico, preparo de bebidas e coquetéis.
              Desenvolvimento de habilidades de organização e atendimento ao público.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
