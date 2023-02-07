import AnimationLayout from '../../components/layout/animation-layout';
import ProjectsGrid from '../../components/pages/projects/projects-grid';

export type Project = {
  name: string;
  description: string;
  source: string;
  demo?: string;
  tags?: string[];
  packages?: string[];
};

const Projects = () => {
  return (
    <AnimationLayout className="w-full">
      <section className="flex items-center flex-col justify-center">
        <h1 className="uppercase font-bold dark:text-blue-500 text-5xl lg:text-6xl">Projects</h1>
        <section className="flex flex-col items-center justify-center">
          <p className="max-w-6xl my-6 px-60 text-xl text-center">
            Best way to show your skills is to show what you know to do, and how good you can do it!
            🚀
          </p>
          <ProjectsGrid />
        </section>
      </section>
    </AnimationLayout>
  );
};

export default Projects;
