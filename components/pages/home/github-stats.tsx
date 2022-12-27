import { GitHubUserRepo } from '../../../types/api/github-user-data.type';
import moment from 'moment';

export interface GitHubStatsProps {
  gitHubData: GitHubUserRepo[];
}

const GitHubStats = ({ gitHubData }: GitHubStatsProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* Container */}
      <div className="p-3 bg-gray-600 w-[90vw] min-h-[80vh] rounded-xl flex flex-col md:p-10 shadow">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center font-bold paragraph-title text-3xl">Recent Work:</h2>
          <p className="paragraph px-4 pb-4 text-lg md:px-14 md:mx-auto">
            I try to do my best and contribute to <i className="font-bold">Open-Source projects</i>{' '}
            as well as maintain <i className="font-bold">my own projects</i>, this will present my
            latest updated repositories that I have created / forked.
          </p>
        </div>
        {/* Repos Container */}
        <div className="flex flex-col md:flex-row md:items-start items-center space-y-4 md:space-y-0 md:flex-1 md:space-x-6 md:mt-10">
          {/* Repos */}
          {gitHubData.map((repo: GitHubUserRepo) => (
            <div className="bg-gray-700 rounded-xl w-full p-4 shadow-md">
              <div key={repo.name}>
                <a href={repo.html_url} target="_blank">
                  <h3 className="text-2xl font-medium text-white">{repo.name}</h3>
                </a>
                <p className="paragraph mt-2">{repo.description || 'Description not available'}</p>
              </div>
              <div className="text-center mt-2">
                <small>Last update at {moment(repo.updated_at).format('DD/MM/YYYY')}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
