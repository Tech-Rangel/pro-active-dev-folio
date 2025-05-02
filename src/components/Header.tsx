
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-white py-6 sticky top-0 z-10 shadow-sm animate-fade-in">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-resume-darkblue">
              <span className="text-resume-blue">Dev</span> Trainee
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-2 md:space-x-6">
              <li>
                <a href="#sobre" className="text-resume-gray hover:text-resume-blue transition-colors duration-200">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#experiencia" className="text-resume-gray hover:text-resume-blue transition-colors duration-200">
                  Experiência
                </a>
              </li>
              <li>
                <a href="#habilidades" className="text-resume-gray hover:text-resume-blue transition-colors duration-200">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contato" className="text-resume-gray hover:text-resume-blue transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          {!isMobile && (
            <div className="flex space-x-3">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
