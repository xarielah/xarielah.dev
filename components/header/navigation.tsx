import Link from 'next/link';
import { Rotate as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import Menu from './menu';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  console.log(show);
  console.log(isOpen);

  /**
   * onToggle - prevents from menu to block the view,
   * by removing the menu from the DOM in consideration of the animation delay.
   * @returns {void} void.
   */
  const onToggle = (): void => {
    const delay = 300;
    if ((show && isOpen) || (!show && !isOpen)) {
      if (show) {
        setIsOpen(!isOpen);
        setTimeout(() => {
          setShow(!show);
        }, delay);
      } else {
        setShow(!show);
        setIsOpen(!isOpen);
      }
    }
  };

  return (
    <nav className="w-full flex items-center justify-between p-8">
      <Link href="/">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="flex items-center">
            <div className="bg-gray-100 rounded-full p-1 mr-2">
              <img src="/images/memoji.png" className="w-10 h-10 lg:w-14 lg:h-14" />
            </div>
            <div className="font-bold text-2xl lg:text-3xl">xarielah</div>
          </div>
        </motion.button>
      </Link>
      <div className="z-[51]" onClick={onToggle}>
        <Hamburger toggled={isOpen} />
      </div>
      {show ? <Menu toggleAnimation={isOpen} onToggle={onToggle} /> : ''}
    </nav>
  );
};

export default Navigation;
