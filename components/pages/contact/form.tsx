import { useForm } from 'react-hook-form';
import { ContactFields } from '../../../lib/types/contact/contact-fields.type';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormFieldError from './form-field-error';
import LoadFromBottom from '../../animation/load-from-bottom';

interface ContactFormProps {
  swapLoading: (value: boolean) => void;
  loading: boolean;
}

const schema = yup.object({
  name: yup.string().max(16).required(),
  email: yup.string().max(32).email().required(),
  content: yup.string().max(256).required(),
});

const ContactForm = ({ swapLoading, loading }: ContactFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ContactFields>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: ContactFields) => {
    swapLoading(true);
    reset();

    // BASE_URL needs to be public key since used in frontend and it can be since its not a vulnerable key
    const url = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

    // Note: Answer will be used for response
    // Todo: Response based on contact form response
    const answer = await fetch(`${url}/api/contact`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .finally(() => swapLoading(false));
  };

  return (
    <div className="w-full">
      <LoadFromBottom>
        <div className="flex flex-col items-center mb-5 space-y-6">
          <h1 className="uppercase text-center font-bold text-6xl md:text-7xl">Contact</h1>
          <p className="px-5 sm:px-10 max-w-2xl text-xl">
            I'm available at anytime via Email, LinkedIn and basically any profile or way mentioned
            in the website... 🚀
          </p>
        </div>
      </LoadFromBottom>
      <form
        noValidate
        className="w-full sm:w-5/6 lg:w-1/2 p-5 md:p-0 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LoadFromBottom>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <FormFieldError message={errors.name?.message} />
          </div>
        </LoadFromBottom>
        <LoadFromBottom delay={0.1}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <FormFieldError message={errors.email?.message} />
          </div>
        </LoadFromBottom>
        <LoadFromBottom delay={0.2}>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              How can I help you? {':)'}
            </label>
            <textarea
              {...register('content')}
              rows={4}
              id="description"
              className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <FormFieldError message={errors.content?.message} />
          </div>
        </LoadFromBottom>
        <LoadFromBottom delay={0.3}>
          <div className="w-full flex justify-center">
            <button className="classic-btn" disabled={loading}>
              {loading ? 'Loading...' : 'Send Inquiry'}
            </button>
          </div>
        </LoadFromBottom>
      </form>
    </div>
  );
};

export default ContactForm;
