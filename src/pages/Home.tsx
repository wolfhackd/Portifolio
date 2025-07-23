import { Github, Linkedin } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Button } from '@/components/ui/button';

export const Home = () => {
  return (
    <div className="w-full">
      <div className="flex min-h-screen w-full flex-col px-4 py-4 md:px-7 md:py-7">
        <Navbar />

        {/* Conteúdo principal */}
        <div className="mt-auto flex flex-col gap-10 pb-10 md:flex-row md:justify-between md:gap-6">
          {/* Ícones GitHub e LinkedIn */}
          <div className="flex justify-center gap-6 md:justify-start">
            <a
              href="https://github.com/wolfhackd"
              rel="noopener"
              target="_blank"
            >
              <Github className="h-6 w-6 cursor-pointer md:h-8 md:w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/mauro-leal-b1134425a/"
              rel="noopener"
              target="_blank"
            >
              <Linkedin className="h-6 w-6 cursor-pointer md:h-8 md:w-8" />
            </a>
          </div>

          {/* Coluna texto + botão */}
          <div className="flex flex-col items-center space-y-6 text-center md:w-96 md:items-start md:space-y-10 md:text-left">
            {/** biome-ignore lint/performance/noImgElement: <Only use> */}
            <img
              alt="Esse Sou eu"
              className="mx-auto w-24 rounded-full md:mx-0 md:w-36"
              src="/me.png"
            />
            <div className="font-bold text-4xl text-[#575555] leading-tight md:text-8xl">
              <h1>Mauro</h1>
              <h1 className="text-right">Leal</h1>
            </div>
            <h2 className="font-bold text-[#575555] text-xl uppercase md:text-2xl">
              DESENVOLVEDOR FULLSTACK
            </h2>
            <p className="max-w-md px-4 text-[#575555] md:px-0">
              Sou Mauro Leal, 21 anos, estudante de Análise e Desenvolvimento de
              Sistemas e desenvolvedor full stack. Trabalho com JavaScript,
              TypeScript, Node.js, React, entre outras tecnologias, e já
              desenvolvi aplicativos e sistemas web completos.
            </p>
            <Button
              asChild
              className="mx-auto cursor-pointer hover:bg-red-700 md:mx-0"
              size={'lg'}
              variant={'destructive'}
            >
              <a href="#projetos">Meus Projetos</a>
            </Button>
          </div>

          {/* Coluna imagem grande */}
          <div className="hidden md:block">
            {/** biome-ignore lint/performance/noImgElement: <only dev> */}
            <img alt="Minha imagem" className="h-[528px]" src="/Mauro.png" />
          </div>
        </div>
      </div>

      <div className="bg-black" id="projetos">
        <Projects />
      </div>
    </div>
  );
};
