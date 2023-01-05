import { useState } from 'react';
import AnimationLayout from '../../components/layout/animation-layout';
import ContactForm from '../../components/pages/contact/form';

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const swapLoading = (value: boolean): void => setIsLoading(value);

  return (
    <AnimationLayout className="w-full">
      <section>
        <ContactForm swapLoading={swapLoading} loading={isLoading} />
      </section>
    </AnimationLayout>
  );
};

export default Contact;
