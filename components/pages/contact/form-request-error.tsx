interface RequestErrorProps {
  errorMessage: string;
}

const FormRequestError = ({ errorMessage }: RequestErrorProps) => {
  return (
    <div className="text-center font-medium text-red-500 my-5 p-5 border-2 border-red-900 w-max mx-auto rounded-xl">
      {errorMessage}
    </div>
  );
};

export default FormRequestError;
