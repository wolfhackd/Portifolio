import clsx from 'clsx';
import { Button } from './ui/button';

type NavItem = {
  label: string;
  path: string;
};

export const Navbar = () => {
  const navItems: NavItem[] = [
    { label: 'Projetos', path: 'projetos' },
    { label: 'Tecnologias', path: 'tecnologias' },
    { label: 'Contato', path: 'contato' },
  ];

  const currentHash = typeof window !== 'undefined' ? window.location.hash : '';

  return (
    <nav className="flex w-full items-center justify-center gap-6 bg-black py-4">
      <ul className="flex gap-6">
        {navItems.map((item) => {
          const isActive = currentHash === `#${item.path}`;

          return (
            <li key={item.path}>
              <a
                className={clsx(
                  'cursor-pointer font-semibold text-sm uppercase transition-colors lg:text-md',
                  isActive
                    ? 'border-white border-b-4 text-white'
                    : 'text-gray-300 hover:text-white'
                )}
                href={`#${item.path}`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
      <Button
        asChild
        className="cursor-pointer"
        size={'lg'}
        variant={'outline'}
      >
        <a download="Mauro-Leal-CV.pdf" href="/mauro-leal-cv.pdf">
          Baixar CV
        </a>
      </Button>
    </nav>
  );
};
