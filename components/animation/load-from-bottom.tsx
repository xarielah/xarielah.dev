import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LoadFromBottomProps {
  delay?: number;
  children: ReactNode;
  className?: string;
}

const variants = {
  initial: { opacity: 0, y: 200 },
  normal: { opacity: 1, y: 0 },
};

const LoadFromBottom = ({ delay = 0, children, className = '' }: LoadFromBottomProps) => {
  return (
    <AnimatePresence initial={true}>
      <motion.div
        variants={variants}
        transition={{ delay }}
        initial={'initial'}
        animate={'normal'}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadFromBottom;
