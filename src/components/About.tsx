
const About = () => {
  return (
    <section id="sobre" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-resume-gray mb-4">
            Sou um desenvolvedor trainee/júnior com paixão por criar soluções web utilizando HTML5, CSS, JavaScript, Python e Django. 
            Tenho conhecimentos em metodologias ágeis como Scrum e Kanban, que utilizo para gerenciar projetos de forma eficiente.
          </p>
          <p className="text-resume-gray mb-4">
            Antes de iniciar minha carreira em desenvolvimento, trabalhei como agente de aeroporto na Gol Linhas Aéreas por mais de 3 anos, 
            o que me proporcionou excelentes habilidades de atendimento ao cliente e resolução de problemas sob pressão.
          </p>
          <p className="text-resume-gray">
            Também atuei como barman na Pousada Maravilha em Fernando de Noronha por 2 anos, experiência que aprimorou minhas habilidades de 
            comunicação e trabalho em equipe. Atualmente, trabalho como freelancer na Digit.all, onde desenvolvo projetos web utilizando Django e 
            tecnologias frontend, participando de projetos colaborativos e aplicando práticas ágeis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
