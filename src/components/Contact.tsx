
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Contato</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-resume-darkblue">Vamos Conversar</h3>
            <p className="text-resume-gray mb-8">
              Estou interessado em oportunidades de trabalho como desenvolvedor trainee ou júnior. 
              Entre em contato comigo para conversarmos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-resume-blue bg-opacity-10 flex items-center justify-center mr-4">
                  <Mail className="text-resume-blue h-5 w-5" />
                </div>
                <a href="mailto:matheusrangel_99_@hotmail.com" className="text-resume-gray hover:text-resume-blue transition-colors">
                  matheusrangel_99_@hotmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-resume-blue bg-opacity-10 flex items-center justify-center mr-4">
                  <Phone className="text-resume-blue h-5 w-5" />
                </div>
                <a href="tel:+5581992423456" className="text-resume-gray hover:text-resume-blue transition-colors">
                  +55 81 99242-3456
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-resume-blue bg-opacity-10 flex items-center justify-center mr-4">
                  <Linkedin className="text-resume-blue h-5 w-5" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/matheus-rangel-marques-de-barros-78a317181/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-resume-gray hover:text-resume-blue transition-colors"
                >
                  linkedin.com/in/matheus-rangel-marques-de-barros
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-resume-blue bg-opacity-10 flex items-center justify-center mr-4">
                  <Github className="text-resume-blue h-5 w-5" />
                </div>
                <a 
                  href="https://github.com/Tech-Rangel?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-resume-gray hover:text-resume-blue transition-colors"
                >
                  github.com/Tech-Rangel
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-resume-gray mb-1">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-resume-gray mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-resume-gray mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
