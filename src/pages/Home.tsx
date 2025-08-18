import {
  ChevronDown,
  Github,
  LinkedinIcon,
  LucideGithub,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Projects, TECHNOLOGIES } from '@/components/Projects';

export const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen w-full bg-[radial-gradient(circle,rgba(999,999,999,1)_0%,rgba(148,187,233,1)_100%)]">
        <Navbar />

        <div className="mt-8 flex flex-1 flex-col items-center justify-center space-y-10 px-4 text-center">
          {/* Logo */}
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-black border-dashed">
            <h1 className="font-bold text-5xl">ML</h1>
          </div>

          {/* Headings */}
          <h2 className="font-bold text-3xl uppercase md:text-4xl">
            Oi, eu sou Mauro Leal
          </h2>
          <h3 className="font-extralight text-2xl uppercase md:text-4xl">
            Desenvolvedor FullStack
          </h3>

          <div className="flex gap-4">
            <a
              href="https://github.com/wolfhackd"
              rel="noopener"
              target="_blank"
            >
              <LucideGithub className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/mauro-leal-b1134425a/"
              rel="noopener"
              target="_blank"
            >
              <LinkedinIcon className="h-8 w-8" />
            </a>
          </div>

          {/* Description */}
          <p className="mx-auto w-[90%] text-justify font-medium text-lg md:w-[60%] md:text-xl lg:text-2xl">
            Sou Mauro Leal, 21 anos, estudante de Análise e Desenvolvimento de
            Sistemas e desenvolvedor full stack. Trabalho com JavaScript,
            TypeScript, Node.js, React, entre outras tecnologias, e já
            desenvolvi aplicativos e sistemas web completos.
          </p>

          {/* Scroll icon */}
          <ChevronDown className="h-10 w-10 animate-bounce text-gray-800" />
        </div>
      </section>

      {/* Projetos */}
      <section className="py-20" id="projetos">
        <h1 className="text-center font-bold text-4xl">Projetos</h1>
        <Projects />
      </section>

      {/* Tecnologias */}
      <section className="py-20" id="tecnologias">
        <h1 className="mb-12 text-center font-bold text-4xl">Tecnologias</h1>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {Object.values(TECHNOLOGIES).map((tech, index) => (
            <div
              className={`flex flex-col items-center justify-center rounded-lg p-4 shadow-md transition-transform hover:scale-105 ${tech.color} text-white`}
              key={index}
            >
              <span className="font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contatos */}
      <section className="bg-gray-100 py-20" id="contatos">
        <h1 className="mb-12 text-center font-bold text-4xl">Contatos</h1>

        <div className="flex flex-wrap justify-center gap-6">
          {/* WhatsApp */}
          <a
            className="flex items-center gap-3 rounded-lg bg-green-500 px-6 py-4 text-white shadow-md transition-transform hover:scale-105"
            href="https://wa.me/81996676623"
            rel="noopener noreferrer"
            target="_blank"
          >
            <MessageCircle />
            <span>WhatsApp</span>
          </a>

          {/* Email */}
          <a
            className="flex items-center gap-3 rounded-lg bg-red-500 px-6 py-4 text-white shadow-md transition-transform hover:scale-105"
            href="mailto:mauro.costa.12.j@hotmail.com"
          >
            <Mail className="ri-mail-line text-2xl" />
            <span>Email</span>
          </a>

          <a
            className="flex items-center gap-3 rounded-lg bg-blue-700 px-6 py-4 text-white shadow-md transition-transform hover:scale-105"
            href="https://www.linkedin.com/in/mauro-leal-b1134425a/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            className="flex items-center gap-3 rounded-lg bg-gray-800 px-6 py-4 text-white shadow-md transition-transform hover:scale-105"
            href="https://github.com/wolfhackd"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github />
            <span>GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
};
