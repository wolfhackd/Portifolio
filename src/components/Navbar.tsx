import { Button } from './ui/button';

type NavItens = {
  label: string;
  path: string;
};

export const Navbar = () => {
  const navItens: NavItens[] = [
    { label: 'Projetos', path: 'projetos' },
    { label: 'Contato', path: 'contato' },
  ];
  return (
    <div className="flex items-center justify-between ">
      {/** biome-ignore lint/performance/noImgElement: <only use> */}
      <img alt="Logo da ML" className="h-20 w-20" src="/ml.png" />
      <nav>
        {navItens.map((item) => (
          <Button
            asChild
            className="cursor-pointer lg:text-lg"
            key={item.path}
            variant={'link'}
          >
            <a href={`#${item.path}`}>{item.label}</a>
          </Button>
        ))}
        <Button
          asChild
          className="cursor-pointer hover:bg-red-700"
          size={'lg'}
          variant={'destructive'}
        >
          <a download="Mauro-Leal-CV.pdf" href="/mauro-leal-cv.pdf">
            Baixar CV
          </a>
        </Button>
      </nav>
    </div>
  );
};
