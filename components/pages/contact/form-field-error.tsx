import { capsString } from '../../../lib/utils';

export interface FormFieldErrorProps {
  message: string | undefined;
}

const FormFieldError = ({ message }: FormFieldErrorProps) => {
  return (
    <p className={`${message === undefined ? 'hidden' : ''} flex items-center form-error-field`}>
      <img src="/icons/warning.svg" alt="warning sign" className="w-4 h-4 mr-2" />
      {capsString(message ?? '')}
    </p>
  );
};

export default FormFieldError;
