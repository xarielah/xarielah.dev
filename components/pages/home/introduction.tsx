import LoadFromBottom from '../../animation/load-from-bottom';

const Introduction = () => {
  return (
    <div className="bg">
      <LoadFromBottom
        initialY={0}
        className="flex flex-col space-y-10 mb-12 justify-center items-center p-2 lg:p-0"
      >
        <h1 className="text-8xl sm:text-7x font-bold text-center">
          Its all about the <span className="text-purple-600 dark:text-blue-400">code</span>!
        </h1>
        <p className="text-4xl font-light px-2 lg:px-52 lg:text-center md:px-8">
          Web Development for me is a playground of oppurtinities to always have the ability to
          build a Great, Efficient and a Useful product.
        </p>
      </LoadFromBottom>
    </div>
  );
};

export default Introduction;
