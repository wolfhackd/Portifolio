import { Github, Linkedin } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Button } from '@/components/ui/button';

export const Home = () => {
  return (
    <div className="w-full">
      <div className="flex h-screen w-full flex-col px-7 py-2">
        <Navbar />
        <div className="mt-auto flex justify-between gap-6 pb-10">
          <div>
            <a
              href="https://github.com/wolfhackd"
              rel="noopener"
              target="_blank"
            >
              <Github className="size-20 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/mauro-leal-b1134425a/"
              rel="noopener"
              target="_blank"
            >
              <Linkedin className="size-20 cursor-pointer" />
            </a>
          </div>
          <div className="flex w-full justify-between ">
            <div className="w-96 space-y-10">
              {/** biome-ignore lint/performance/noImgElement: <Only use> */}
              <img alt="Esse Sou eu" className="w-36" src="/me.png" />
              <div className="font-bold text-8xl text-[#575555]">
                <h1>Mauro</h1>
                <h1 className="text-right">Leal</h1>
              </div>
              <h2 className="font-bold text-2xl text-[#575555] uppercase">
                DESENVOLVEDOR FULLSTACK
              </h2>
              <p className="text-[#575555]">
                Sou Mauro Leal, 21 anos, estudante de Análise e Desenvolvimento
                de Sistemas e desenvolvedor full stack. Trabalho com JavaScript,
                TypeScript, Node.js, React, entre outras tecnologias, e já
                desenvolvi aplicativos e sistemas web completos.
              </p>
              <Button
                asChild
                className="cursor-pointer hover:bg-red-700"
                size={'lg'}
                variant={'destructive'}
              >
                <a href="#projetos">Meus Projetos</a>
              </Button>
            </div>
            <div>
              {/** biome-ignore lint/performance/noImgElement: <only dev> */}
              <img alt="Minha imagem" className="h-[528px]" src="/Mauro.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black" id="projetos">
        <Projects />
      </div>
    </div>
  );
};
