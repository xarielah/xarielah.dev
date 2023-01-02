import { tags } from '../../../lib/data/tags';

const Introduction = () => {
  return (
    <div className="flex flex-col space-y-8 justify-center p-2 lg:p-0">
      <h1 className="text-6xl sm:text-7x font-bold">
        Its all about <br />
        the <span className="text-purple-600">code</span>!
      </h1>
      <p className="text-4xl font-light px-2 md:px-8 lg:px-0">
        <span className="text-5xl font-normal">W</span>eb Development for me is a playgroud of
        oppurtinities to always have the ability to build a Great, Efficient and a Useful product.
      </p>
      <span className="flex flex-wrap space-x-5 justify-center lg:justify-start">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-bold ring-2 mb-4 ring-gray-900/90 bg-slate-200 w-max py-1 px-2 text-sm rounded-full shadow-md shadow-gray-600/80"
          >
            #{tag}
          </span>
        ))}
      </span>
    </div>
  );
};

export default Introduction;
