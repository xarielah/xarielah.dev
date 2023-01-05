import LoadFromBottom from '../../animation/load-from-bottom';
import { Slideshow } from './slideshow';

const Skills = () => {
  return (
    <div className="flex flex-col space-y-6 justify-start py-10 lg:py-0 items-center h-full mt-20 lg:mt-0">
      <LoadFromBottom delay={0.2} initialY={0} className="flex flex-col space-y-6">
        <h1 className="text-5xl font-bold text-center">My Skillz</h1>
        <p className="text-2xl font-light text-center">
          As a <b>FullStack Developer</b> I'm into both frontend and backend technologies and has
          great knowledge in both ends as well. my main preference is doing all the backend works.
        </p>
      </LoadFromBottom>
      <div className="h-full w-full relative pt-20">
        <Slideshow />
      </div>
    </div>
  );
};

export default Skills;
