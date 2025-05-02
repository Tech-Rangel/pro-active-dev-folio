
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              <span className="text-resume-blue">Desenvolvedor</span> Junior
            </h2>
            <p className="text-gray-400 mt-1">Desenvolvedor Web Junior</p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <a href="https://github.com/Tech-Rangel?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/matheus-rangel-marques-de-barros-78a317181/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:matheusrangel_99_@hotmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} - Matheus Rangel - Desenvolvedor Junior. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
