import { AnimatePresence, motion } from 'framer-motion';
import useTheme from 'next-theme';
import React from 'react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

const variants = {
  initial: { opacity: 0, y: 50 },
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: -150 },
};

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useTheme();

  /**
   * Sets the theme to light / dark based on current value.
   * @returns {void} void
   */
  const swapTheme = (): void => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <AnimatePresence initial={true}>
      <div
        className="cursor-pointer relative hover:bg-slate-400/20 hover:ring-2 ring-slate-400/50 w-9 h-9 flex justify-center items-center rounded-full"
        onClick={swapTheme}
      >
        <motion.button
          initial={'initial'}
          transition={{ delay: theme === 'light' ? 0 : 0.1 }}
          className="absolute"
          variants={variants}
          animate={theme === 'light' ? 'open' : 'close'}
        >
          <BsMoonStarsFill size={22} />
        </motion.button>
        <motion.button
          initial={'initial'}
          transition={{ delay: theme === 'light' ? 0.1 : 0 }}
          className="absolute"
          variants={variants}
          animate={theme === 'light' ? 'close' : 'open'}
        >
          <BsFillSunFill size={22} />
        </motion.button>
      </div>
    </AnimatePresence>
  );
};

export default ThemeSwitchButton;
