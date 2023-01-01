import Link from 'next/link';
import { Rotate as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import Menu from './menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full flex items-center justify-between p-8">
      <Link href="/">
        <div className="font-bold text-xl lg:text-3xl">xarielah.dev</div>
      </Link>
      <div className="z-[51]">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </nav>
  );
};

export default Navigation;
