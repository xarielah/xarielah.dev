import { useState } from 'react';
import type { Project } from '../../../pages/projects';
import DemoButton from './demo-button';
import SourceButton from './source-button';

interface IProjectsProps {
  item: Project;
}

const ProjectItem = ({ item }: IProjectsProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div className="bg-white dark:bg-slate-600/20 h-max dark:text-white shadow flex flex-col space-y-3 text-slate-900 p-6 rounded-xl max-w-sm">
      <div className="flex space-x-3">
        <SourceButton href={item.source} />
        {item.demo ? <DemoButton href={item.demo} /> : ''}
      </div>
      <h1 className="font-bold text-3xl">{item.name.toUpperCase()}</h1>
      <p className="min-h-[60px] flex space-x-3 flex-wrap text-sm justify-center font-bold text-slate-600/50 dark:text-slate-400 italic">
        {item.tags && item.tags.length > 0 ? item.tags.map((tag) => <span>{tag}</span>) : ''}
      </p>
      <div className="flex flex-col space-y-3">
        <p className={`text-md ${!showMore ? 'project-search-results' : ''}`}>{item.description}</p>
        <button
          onClick={toggleShowMore}
          className="font-bold italic text-sm hover:text-white hover:bg-slate-800 w-max mx-auto px-2 hover:rounded-md ease-in-out duration-300"
        >
          {showMore ? 'Hide more...' : 'Show more...'}
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
