import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimationLayoutProps {
  children: ReactNode;
}

const AnimationLayout = ({ children }: AnimationLayoutProps) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 15,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationLayout;
