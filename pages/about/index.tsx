import React from 'react';
import LoadFromBottom from '../../components/animation/load-from-bottom';
import AnimationLayout from '../../components/layout/animation-layout';
import PoppingCard from '../../components/pages/about/popping-card';
import TechsIcons from '../../components/pages/about/techs-icons';

const About = () => {
  const age = (): number => {
    const age = new Date(Date.now()).getTime() - new Date('02/21/1997').getTime();
    return new Date(age).getUTCFullYear() - 1970;
  };

  return (
    <AnimationLayout className="w-full">
      <section className="flex flex-col items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-6 lg:flex-row">
        <div className="flex justify-center items-center flex-col lg:flex-col-reverse space-y-6 lg:space-y-0">
          <LoadFromBottom delay={0.8}>
            <PoppingCard additionalDelay={0.8} />
          </LoadFromBottom>
          <LoadFromBottom delay={0.5}>
            <h1 className="uppercase text-7xl lg:text-8xl font-bold lg:mb-5">About</h1>
          </LoadFromBottom>
        </div>
        <article className="px-8 flex flex-col space-y-12 lg:space-y-8">
          <LoadFromBottom delay={0.7}>
            <h2 className="text-center text-3xl lg:text-7xl lg:text-left font-bold dark:text-blue-400">
              Hi there, Nice to meet you!
            </h2>
          </LoadFromBottom>
          <LoadFromBottom delay={0.8}>
            <p className="text-xl text-center font-bold lg:text-left mt-5 lg:text-2xl">
              My name is Ariel, {age()}, I'm a FullStack-Developer born and raised in Israel.
            </p>
          </LoadFromBottom>
          <LoadFromBottom delay={0.8}>
            <p className="text-xl flex flex-col space-y-12 lg:space-y-6 lg:text-2xl font-light">
              <span>
                My way to become a{' '}
                <span className="font-bold hover:text-purple-500 text-slate-800 dark:text-white dark:hover:text-blue-400 duration-300 ease-in-out">
                  Self-taught FullStack Developer
                </span>{' '}
                started at the beginning of 2022. I was looking for a way to express myself and my
                imagination in a way that I'm used to the most -{' '}
                <span className="font-medium hover:text-purple-500 text-slate-800 dark:text-white dark:hover:text-blue-400 duration-300 ease-in-out">
                  through technology
                </span>
                !
              </span>
              <span>
                Creation and creativity are true passion for me. I found my expressions through
                creating Front-End & Back-End Web Applications.
              </span>
              {/* <TechsIcons /> //! Todo: FIX HYDRATION ERROR */}
            </p>
          </LoadFromBottom>
        </article>
      </section>
    </AnimationLayout>
  );
};

export default About;
