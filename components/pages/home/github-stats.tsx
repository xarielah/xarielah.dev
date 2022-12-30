import { GitHubUserRepo } from '../../../types/api/github-user-data.type';
import moment from 'moment';
import OpenSourceTag from '../../ui-elements/github-repos/open-source.tag';

export interface GitHubStatsProps {
  gitHubData: GitHubUserRepo[];
}

const GitHubStats = ({ gitHubData }: GitHubStatsProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* Container */}
      <div className="p-3 bg-gray-600 rounded-xl flex flex-col md:p-10 shadow m-14">
        <div>
          <h2 className="text-center font-bold paragraph-title text-3xl">Recent Work:</h2>
          <p className="paragraph px-4 pb-4 text-lg md:px-14 md:mx-auto">
            I try to do my best and contribute to <i className="font-bold">Open-Source projects</i>{' '}
            as well as maintain <i className="font-bold">my own projects</i>, this will present my
            latest updated repositories that I have created / forked.
          </p>
        </div>
        {/* Repos Container */}
        <div className="grid grid-cols-3 grid-flow-row gap-6">
          {/* Repos */}
          {gitHubData.map((repo) => (
            <div className="rounded-xl p-5 pt-2 bg-gray-500 relative">
              {repo.fork ? <OpenSourceTag /> : ''}
              <div className="flex justify-center mb-2">
                <p className="bg-gray-900 font-medium py-1 px-2 rounded-xl text-sm">
                  Last updated: {moment(repo.updated_at).format('DD/MM/YYYY')}
                </p>
              </div>
              <a href={repo.html_url} target="_blank">
                <h1 className="text-2xl font-bold">{repo.name}</h1>
              </a>
              <p className="ml-2 mt-2">
                {repo.description || 'No description available for this repository.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
