import { motion } from 'framer-motion';
import Link from 'next/link';
import { routes } from '../../lib/data/routes';

const background = {
  initial: { opacity: 0 },
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 0 },
};

const items = {
  open: { opacity: 1, x: '-100' },
  closed: { opacity: 0, x: 0 },
};

interface MenuProps {
  toggleAnimation: boolean;
  onToggle: () => void;
}

const Menu = ({ toggleAnimation, onToggle }: MenuProps) => {
  return (
    <motion.aside
      initial={'initial'}
      animate={toggleAnimation ? 'open' : 'closed'}
      variants={background}
      className={`absolute bg-animation min-h-screen w-screen flex flex-col z-50 space-y-10 text-6xl lg:text-8xl justify-center items-center top-0 left-0 overflow-y-hidden overflow-x-hidden`}
    >
      {routes.map((route) => (
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          key={route.name}
          onClick={onToggle}
        >
          <Link href={route.path}>{route.name}</Link>
        </motion.div>
      ))}
    </motion.aside>
  );
};

export default Menu;
