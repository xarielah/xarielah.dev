import { useForm } from 'react-hook-form';
import { ContactFields } from '../../../lib/types/contact/contact-fields.type';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormFieldError from './form-field-error';

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

    const url = process.env.BASE_URL ?? 'http://localhost:3000';

    const answer = await fetch(`${url}/api/contact`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .finally(() => swapLoading(false));
  };

  return (
    <div className="w-full">
      <form noValidate className="w-full p-5 md:p-0 mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
        <div className="w-full flex justify-center">
          <button className="classic-btn" disabled={loading}>
            {loading ? 'Loading...' : 'Send Inquiry'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
