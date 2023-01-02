import { motion } from 'framer-motion';
import { tags } from '../../../lib/data/tags';
import LoadFromBottom from '../../animation/load-from-bottom';

const Introduction = () => {
  return (
    <div className="">
      <LoadFromBottom className="flex flex-col space-y-10 mb-12 justify-center p-2 lg:p-0">
        <h1 className="text-6xl sm:text-7x font-bold">
          Its all about <br />
          the <span className="text-purple-600 dark:text-blue-400">code</span>!
        </h1>
        <p className="text-4xl font-light px-2 md:px-8 lg:px-0">
          Web Development for me is a playgroud of oppurtinities to always have the ability to build
          a Great, Efficient and a Useful product.
        </p>
      </LoadFromBottom>
      <LoadFromBottom delay={0.1}>
        <span className="flex flex-wrap space-x-5 justify-center lg:justify-start">
          {tags.map((tag) => (
            <motion.span
              whileHover={{ scale: 1.1 }}
              key={tag}
              className="font-bold ring-2 mb-4 ring-gray-900/90 dark:ring-gray-800 bg-slate-200 dark:bg-slate-900 w-max py-1 px-2 text-sm rounded-full shadow-md shadow-gray-600/80"
            >
              #{tag}
            </motion.span>
          ))}
        </span>
      </LoadFromBottom>
    </div>
  );
};

export default Introduction;
