import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { routes } from '../../lib/data/routes';
import LoadFromBottom from '../animation/load-from-bottom';

const background = {
  initial: { opacity: 0 },
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 0 },
};

interface MenuProps {
  toggleAnimation: boolean;
  onToggle: () => void;
  isOnDom: boolean;
}

const Menu = ({ toggleAnimation, onToggle, isOnDom }: MenuProps) => {
  useEffect(() => {
    /**
     * This useEffect makes sure couple of things:
     *
     * - Scroll for X axis and Y axis are hidden.
     * - When ever menu is triggered (open / close) user scrolled to top.
     */
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isOnDom) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      // Make sure body isn't stuck
      document.body.classList.remove('overflow-hidden');
    };
  }, [toggleAnimation]);

  return (
    <motion.aside
      initial={'initial'}
      animate={toggleAnimation ? 'open' : 'closed'}
      variants={background}
      className={`absolute bg-animation dark:dark-bg-animation h-screen w-screen flex flex-col z-50 space-y-10 text-6xl lg:text-8xl justify-center items-center top-0 left-0`}
    >
      {routes.map((route, index) => (
        <LoadFromBottom key={route.name} delay={index / 10}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={onToggle}>
            <Link href={route.path}>{route.name}</Link>
          </motion.div>
        </LoadFromBottom>
      ))}
      <LoadFromBottom delay={routes.length / 10}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={onToggle}>
          <Link href={'/cv'}>CV</Link>
        </motion.div>
      </LoadFromBottom>
    </motion.aside>
  );
};

export default Menu;
