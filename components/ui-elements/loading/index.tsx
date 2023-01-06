import useTheme from 'next-theme';
import { motion } from 'framer-motion';
import { HashLoader as Loader } from 'react-spinners';

const LoadingElement = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      key={'loading-text'}
      animate={{
        rotate: [0, 0, 180, 180, 0],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.5, 1],
        repeat: Infinity,
      }}
    >
      <Loader color={theme === 'light' ? 'rgb(15 23 42)' : '#ffffff'} />
    </motion.div>
  );
};

export default LoadingElement;
