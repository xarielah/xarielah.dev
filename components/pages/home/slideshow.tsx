import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { useState } from 'react';
import { techs } from '../../../lib/data/techs';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, techs.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative h-full flex justify-center items-center my-28 lg: my-0">
      <AnimatePresence>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          className="absolute"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 60 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <img src={techs[imageIndex].src} className="w-44 h-44 object-contain" />
          <p className="text-center text-3xl mt-2">{techs[imageIndex].label}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between absolute w-full">
        <div
          className="cursor-pointer bg-gray-100/50 flex justify-center items-center rounded-full w-10 h-10"
          onClick={() => paginate(1)}
        >
          {'<'}
        </div>
        <div
          className="cursor-pointer bg-gray-100/50 flex justify-center items-center rounded-full w-10 h-10"
          onClick={() => paginate(-1)}
        >
          {'>'}
        </div>
      </div>
    </div>
  );
};

{
  /* <motion.img
          key={page}
          src={techs[imageIndex].src}
          custom={direction}
          variants={variants}
          className="w-44 h-44 object-contain absolute"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 60 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        /> */
}
