import { projects } from '../../../lib/data/projects';
import ProjectItem from './project-item';

const ProjectsGrid = () => {
  return (
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-3 space-y-6 md:space-y-0 md:space-x-6">
      {projects.map((project, i) => (
        <ProjectItem item={project} />
      ))}
    </section>
  );
};

export default ProjectsGrid;
