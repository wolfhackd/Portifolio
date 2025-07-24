/** biome-ignore-all lint/performance/noImgElement: <Only use> */
import { ChevronLeft, ChevronRight, Github, X } from 'lucide-react';
import { useState } from 'react';

interface Technology {
  name: string;
  color: string;
}

interface Technologies {
  [key: string]: Technology;
}

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  technologies: Technologies;
}

export const Projects = () => {
  const TECHNOLOGIES: Technologies = {
    // Front-end
    html: { name: 'HTML5', color: 'bg-orange-500' },
    css: { name: 'CSS3', color: 'bg-blue-600' },
    javascript: { name: 'JavaScript', color: 'bg-yellow-400' },
    typescript: { name: 'TypeScript', color: 'bg-blue-500' },
    react: { name: 'React', color: 'bg-sky-500' },
    reactNative: { name: 'React Native', color: 'bg-purple-500' },
    nextjs: { name: 'Next.js', color: 'bg-gray-800' },
    vite: { name: 'Vite', color: 'bg-purple-400' },
    tailwind: { name: 'Tailwind CSS', color: 'bg-cyan-500' },
    bootstrap: { name: 'Bootstrap', color: 'bg-violet-600' },
    reactRouter: { name: 'React Router DOM', color: 'bg-red-400' },
    reactQuery: { name: 'React Query', color: 'bg-pink-400' },
    hooks: { name: 'Hooks Personalizados', color: 'bg-yellow-500' },

    // Back-end
    node: { name: 'Node.js', color: 'bg-green-600' },
    express: { name: 'Express.js', color: 'bg-gray-700' },
    fastify: { name: 'Fastify', color: 'bg-gray-600' },
    apiRest: { name: 'API REST', color: 'bg-emerald-600' },
    graphql: { name: 'GraphQL', color: 'bg-pink-600' },

    // Banco de Dados
    postgres: { name: 'PostgreSQL', color: 'bg-blue-700' },
    mysql: { name: 'MySQL', color: 'bg-blue-400' },
    sqlite: { name: 'SQLite', color: 'bg-blue-300' },
    mongodb: { name: 'MongoDB', color: 'bg-green-600' },
    firebase: { name: 'Firebase', color: 'bg-yellow-400' },
    supabase: { name: 'Supabase', color: 'bg-green-400' },

    // ORMs e Ferramentas
    prisma: { name: 'Prisma', color: 'bg-pink-500' },
    drizzle: { name: 'Drizzle ORM', color: 'bg-orange-400' },
    sequelize: { name: 'Sequelize', color: 'bg-indigo-500' },

    // DevOps e Infra
    docker: { name: 'Docker', color: 'bg-blue-400' },
    git: { name: 'Git', color: 'bg-red-500' },
    github: { name: 'GitHub', color: 'bg-gray-800' },
    vercel: { name: 'Vercel', color: 'bg-black' },
    netlify: { name: 'Netlify', color: 'bg-teal-500' },

    // Outras tecnologias
    jest: { name: 'Jest', color: 'bg-red-600' },
    cypress: { name: 'Cypress', color: 'bg-green-500' },
    vitest: { name: 'Vitest', color: 'bg-lime-500' },
    figma: { name: 'Figma', color: 'bg-pink-500' },

    // API
    gemini: { name: 'Gemini', color: 'bg-blue-400' },
  };

  const PROJECTS: Project[] = [
    {
      title: 'Let Me Ask',
      description:
        'O Let Me Ask é um app de perguntas e respostas em tempo real para lives e eventos, onde os participantes podem enviar questões, votar nas mais relevantes e acompanhar se já foram respondidas. A proposta é organizar a participação do público, promovendo engajamento e clareza na comunicação.',
      images: ['/letmeaskone.jpeg', '/letmeasktwo.jpeg'],
      technologies: [
        'react',
        'vite',
        'typescript',
        'tailwind',
        'reactRouter',
        'reactQuery',
        'hooks',
        'node',
        'fastify',
        'postgres',
        'drizzle',
        'apiRest',
      ],
      link: 'https://github.com/wolfhackd/let-me-ask',
    },
    {
      title: 'Spotify',
      description: 'Website de música parecido com o spotify',
      images: ['/spotify.jpg', '/spotify2.jpg', '/spotify3.jpg'],
      technologies: [
        'react',
        'vite',
        'javascript',
        'tailwind',
        'reactRouter',
        'hooks',
        'node',
        'express',
        'mongodb',
        'apiRest',
      ],
      link: 'https://github.com/wolfhackd/Spotify-Project',
    },
    {
      title: 'Portugenio',
      description:
        'O Portugenio é um projeto web voltado para o ensino e aprimoramento da língua portuguesa, com foco inicial na gramática. A plataforma utiliza inteligência artificial para oferecer correções automáticas, explicações personalizadas e exemplos práticos, tornando o aprendizado mais dinâmico e interativo.',
      images: ['/portugenio.jpeg', '/portugenio2.jpeg'],
      technologies: [
        'react',
        'gemini',
        'vite',
        'typescript',
        'tailwind',
        'fastify',
        'hooks',
        'node',
        'apiRest',
        'docker',
      ],
      link: 'https://github.com/wolfhackd/Spotify-Project',
    },
  ];

  return (
    <div className="bg-black px-6 py-12 text-white">
      <h1 className="mb-8 text-center font-bold text-4xl">Meus Projetos</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            technologies={TECHNOLOGIES}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, technologies }: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Card */}
      <button
        className="w-full cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 text-left shadow-lg transition-transform hover:scale-105"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <div className="relative h-56 w-full">
          <img
            alt={project.title}
            className="h-full w-full object-cover"
            src={project.images[currentImage]}
          />
        </div>
        <div className="p-4">
          <h2 className="mb-2 font-bold text-2xl">{project.title}</h2>
          <p className="line-clamp-3 text-sm text-zinc-300">
            {project.description}
          </p>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-11/12 max-w-3xl rounded-xl bg-zinc-900 p-6 shadow-lg">
            {/* Botão fechar */}
            <button
              aria-label="Fechar modal"
              className="absolute top-4 right-4 z-[9999] rounded-full bg-zinc-800 p-2 hover:bg-zinc-700"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Carrossel de Imagens */}
            <div className="relative mb-4 flex h-[400px] w-full items-center justify-center">
              <img
                alt={project.title}
                className="max-h-full max-w-full origin-center object-contain"
                src={project.images[currentImage]}
              />

              {project.images.length > 1 && (
                <div className="absolute inset-x-0 bottom-2 flex justify-between gap-4">
                  <button
                    aria-label="Imagem anterior"
                    className="rounded-full bg-zinc-800 p-2 hover:bg-zinc-700"
                    onClick={prevImage}
                    type="button"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Próxima imagem"
                    className="rounded-full bg-zinc-800 p-2 hover:bg-zinc-700"
                    onClick={nextImage}
                    type="button"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Infos do Projeto */}
            <h2 className="mb-2 font-bold text-2xl">{project.title}</h2>
            <p className="text-sm text-zinc-300">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((techKey) => {
                const tech = technologies[techKey];
                return (
                  <span
                    className={`rounded px-2 py-1 font-bold text-xs ${tech.color}`}
                    key={techKey}
                  >
                    {tech.name}
                  </span>
                );
              })}
            </div>

            <a
              className="mt-4 inline-flex items-center gap-2 text-blue-400 text-sm hover:underline"
              href={project.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              Ver no GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
};
