
import { BarChart, CheckCircle, Code, Database, GitBranch, Globe } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { id: 1, name: "HTML5", level: 80 },
    { id: 2, name: "CSS", level: 75 },
    { id: 3, name: "JavaScript", level: 70 },
    { id: 4, name: "Python", level: 65 },
    { id: 5, name: "Django", level: 60 },
    { id: 6, name: "Git/GitHub", level: 70 },
    { id: 7, name: "SQL/PostgreSQL", level: 65 },
  ];

  const otherSkills = [
    { id: 1, name: "Metodologias Ágeis (Scrum, Kanban)", icon: BarChart },
    { id: 2, name: "Controle de Versão (Git)", icon: GitBranch },
    { id: 3, name: "Inglês - C1", icon: Globe },
    { id: 4, name: "Resolução de Problemas", icon: CheckCircle },
    { id: 5, name: "Banco de Dados (SQL, PostgreSQL)", icon: Database },
    { id: 6, name: "Frontend", icon: Code },
  ];

  return (
    <section id="habilidades" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-resume-darkblue">Habilidades Técnicas</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-resume-gray">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-resume-lightgray rounded-full h-2">
                    <div 
                      className="bg-resume-blue h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-resume-darkblue">Outras Habilidades</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherSkills.map((skill) => (
                <div 
                  key={skill.id} 
                  className="flex items-start p-4 bg-white rounded-lg border border-resume-lightgray"
                >
                  <div className="mr-3 text-resume-blue">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
