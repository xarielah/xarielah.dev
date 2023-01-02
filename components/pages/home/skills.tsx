import { Slideshow } from './slideshow';

const Skills = () => {
  return (
    <div className="flex flex-col space-y-6 justify-start py-10 items-center h-full mt-20">
      <h1 className="text-5xl font-bold">My Skillz</h1>
      <div className="h-full w-full relative">
        <Slideshow />
      </div>
    </div>
  );
};

export default Skills;
