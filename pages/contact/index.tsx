import { useState } from 'react';
import ContactForm from '../../components/pages/contact/form';

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const swapLoading = (value: boolean): void => setIsLoading(value);

  return (
    <section className="min-h-screen min-w-screen flex items-center justify-center">
      <ContactForm swapLoading={swapLoading} loading={isLoading} />
    </section>
  );
};

export default Contact;
