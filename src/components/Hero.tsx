
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Desenvolvedor <br />
              <span className="text-resume-blue">Junior</span>
            </h1>
            <p className="text-lg text-gray-600">
              Desenvolvedor web proativo com experiência em HTML5, CSS, JavaScript, Python e Django. 
              Conhecimento em metodologias ágeis como Scrum e Kanban.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contato">
                <Button className="transition-transform hover:scale-105 duration-300">
                  <Mail className="mr-2 h-4 w-4" /> Contatar
                </Button>
              </a>
              <Button variant="outline" className="transition-transform hover:scale-105 duration-300">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-700 to-resume-blue rounded-full h-64 w-64 mx-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Ilustração de Código" 
                  className="object-cover h-full w-full opacity-75 mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <p className="font-mono text-xs">
                  <span className="text-purple-600">const</span> <span className="text-green-600">developer</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-600">skills</span>: [<span className="text-orange-500">'HTML'</span>, <span className="text-orange-500">'CSS'</span>, <span className="text-orange-500">'JS'</span>, <span className="text-orange-500">'Python'</span>],
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-600">passion</span>: <span className="text-orange-500">'coding'</span>
                  <br />
                  {"}"};
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
