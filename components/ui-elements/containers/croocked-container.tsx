import { ReactNode } from 'react';

interface CroockedContainerProps {
  children: ReactNode;
  className?: string;
}

const CroockedContainer = ({ children, className }: CroockedContainerProps) => {
  return (
    <section className="z-10 -mx-5 min-h-screen flex justify-center flex-col">
      <div className="dark:bg-gray-900 min-w-full h-14 -rotate-1 translate-y-5"></div>
      <div
        className={`z-10 py-5 origin-top-right dark:bg-gray-900 min-h-[70%] flex items-center px-5 md:px-10  ${
          className ? className : ''
        }`}
      ></div>
      <div className="dark:bg-gray-900 w-full h-14 -rotate-1 -translate-y-5"></div>
    </section>
  );
};

export default CroockedContainer;
