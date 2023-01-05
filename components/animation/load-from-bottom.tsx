import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface LoadFromBottomProps {
  delay?: number;
  children: ReactNode;
  className?: string;
  initialY?: number;
}

const variants = {
  initial: { opacity: 0, y: 200 },
  normal: { opacity: 1, y: 0 },
};

/**
 * Gets optional parameters and a children.
 * Responsible for animation separate components to give the sprint effect.
 * @param {number} delay delay value.
 * @param {ReactNode} children accepts children.
 * @param {string} className css classes.
 */

const LoadFromBottom = ({ delay = 0, initialY, children, className = '' }: LoadFromBottomProps) => {
  const variantsFromComponent = {
    initial: {
      ...variants.initial,
      y: initialY !== undefined ? initialY : variants.initial.y,
    },
    normal: {
      ...variants.normal,
    },
  };

  return (
    <AnimatePresence initial={true}>
      <motion.div
        variants={initialY !== undefined ? variantsFromComponent : variants}
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
