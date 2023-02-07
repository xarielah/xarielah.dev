import { AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';

interface ITooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip = ({ children, text }: ITooltipProps) => {
  return (
    <div className="relative tooltip-parent">
      <div className="absolute w-max ease-in-out duration-300 left-1/2 -translate-x-1/2 bg-slate-900 py-1 px-3 shadow-md -top-8 rounded-lg text-sm text-white">
        {text}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
