import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimationLayoutProps {
  children: ReactNode;
  className?: string;
}

const AnimationLayout = ({ children, className }: AnimationLayoutProps) => {
  return (
    <motion.div
      initial={{ scale: 0.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.2, opacity: 0 }}
      transition={{
        type: 'spring',
        duration: 0.25,
      }}
      className={className ?? ''}
    >
      {children}
    </motion.div>
  );
};

export default AnimationLayout;
