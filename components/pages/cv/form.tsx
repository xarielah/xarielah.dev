import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { sendCvRequest } from '../../../lib/service/fetch.service';
import FormFieldError from '../contact/form-field-error';

interface ICVForm {
  swapLoading: (value: boolean) => void;
  setSuccess: () => void;
  setUserEmail: (email: string) => void;
}

export type EmailInput = {
  email: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const CVForm = ({ swapLoading, setSuccess, setUserEmail }: ICVForm) => {
  const {
    handleSubmit,

    register,
    formState: { errors },
  } = useForm<EmailInput>({ resolver: yupResolver(schema) });

  const onsubmit = async (data: EmailInput) => {
    swapLoading(true);
    try {
      const response = await sendCvRequest(data).finally(() => swapLoading(false));
      console.log('🚀 ~ file: form.tsx:32 ~ onsubmit ~ response', response);
      setUserEmail(data.email);
      setSuccess();
    } catch (error) {}
  };

  return (
    <>
      <h1 className="text-6xl md:text-8xl font-bold dark:text-blue-500 uppercase">Resume</h1>
      <p className="px-8 text-xl font-light md:text-2xl">
        You can easily get my resume, sure!
        <br />
        <br />
        Since it's a personal document, I'm asking you to please write down your real Email address
        and an rocket-speed mail will be immediately sent to you with a link to the file.
        <br />
        <br />
        Thanks for being interested, keep on rocking! 🚀
      </p>
      <form
        className="w-full max-w-[90%] flex sm:space-x-3 sm:flex-row sm:space-y-0 md:max-w-lg flex-col items-center space-y-6"
        noValidate
        onSubmit={handleSubmit(onsubmit)}
      >
        <input
          {...register('email')}
          type="text"
          placeholder="What is your Email address?"
          className="bg-gray-50 border border-gray-300 text-xl text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.email?.message ? (
          <div className="flex w-1/2 justify-center">
            <FormFieldError message={errors.email.message} />
          </div>
        ) : (
          ''
        )}
        <button className="classic-btn w-max whitespace-nowrap" type="submit">
          Launch the CV!
        </button>
      </form>
    </>
  );
};

export default CVForm;
