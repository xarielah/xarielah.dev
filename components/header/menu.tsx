import { motion } from 'framer-motion';
import Link from 'next/link';

const background = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 0 },
};

const items = {
  open: { opacity: 1, x: '-100' },
  closed: { opacity: 0, x: 0 },
};

export type Route = {
  path: string;
  name: string;
  target?: string;
};

const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

export interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  return (
    <motion.aside
      animate={isOpen ? 'open' : 'closed'}
      variants={background}
      className={`absolute min-h-screen w-screen bg-purple-100 flex flex-col space-y-10 text-8xl justify-center items-center top-0 left-0 z-50 overflow-y-hidden overflow-x-hidden ${
        isOpen ? '' : 'hidden'
      }`}
    >
      {routes.map((route) => (
        <Link href={route.path} onClick={onClose} key={route.name}>
          {route.name}
        </Link>
      ))}
    </motion.aside>
  );
};

export default Menu;
