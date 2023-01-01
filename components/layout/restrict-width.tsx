import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RestictWidthProps {
  children: ReactNode;
  className?: string;
}

const RestictWidth = ({ children, className }: RestictWidthProps) => {
  return <div className={`max-w-[1340px] ${className ? className : ''}`}>{children}</div>;
};

export default RestictWidth;
