import { ReactNode, useContext } from 'react';
import { motion } from 'framer-motion';
import { isMountedContext } from '../../pages/_app';

interface AnimationLayoutProps {
  children: ReactNode;
  className?: string;
}

const AnimationLayout = ({ children, className }: AnimationLayoutProps) => {
  /**
   * isMounted of type boolean. Represents if the site is first loaded.
   * The goal is to have the first animation load slower,
   * and navigation within the site to have a faster animation.
   */
  const isMounted = useContext(isMountedContext);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{
        type: 'spring',
        duration: isMounted ? 0.45 : 1.5,
      }}
      className={className ?? ''}
    >
      {children}
    </motion.div>
  );
};

export default AnimationLayout;
