import { useState } from 'react';
import AnimationLayout from '../../components/layout/animation-layout';
import CVForm from '../../components/pages/cv/form';
import { motion } from 'framer-motion';
import LoadingElement from '../../components/ui-elements/loading';
import SuccessRequest from '../../components/pages/cv/success-request';

const variants = {
  load: { opacity: 0, y: -500 },
  open: { opacity: 1, y: 0 },
  closing: { opacity: 0, y: 500 },
};

const CVPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');

  const swapLoading = (value: boolean): void => setIsLoading(value);
  return (
    <AnimationLayout className="w-full">
      <section className="w-full flex justify-center items-center flex-col space-y-6 sm:max-w-4xl mx-auto">
        {success ? (
          <>
            <motion.div
              key={'success'}
              variants={variants}
              initial={'load'}
              animate={'open'}
              exit={'closing'}
            >
              <SuccessRequest userEmail={userEmail} />
            </motion.div>
          </>
        ) : isLoading ? (
          <>
            <motion.div
              initial={{ opacity: 0, x: -800 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 800 }}
              className="flex flex-col items-center text-center"
            >
              <LoadingElement />
            </motion.div>
          </>
        ) : (
          <CVForm
            setUserEmail={(email: string) => setUserEmail(email)}
            setSuccess={() => setSuccess(true)}
            swapLoading={swapLoading}
          />
        )}
      </section>
    </AnimationLayout>
  );
};

export default CVPage;
