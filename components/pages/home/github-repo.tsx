import moment from 'moment';
import { GitHubUserRepo } from '../../../lib/types/github/github-user-data.type';

interface RepoRecordProps {
  repo: GitHubUserRepo;
}

const RepoRecord = ({ repo }: RepoRecordProps) => {
  return (
    <div key={repo.name} className={'mt-4 first:mt-0'}>
      <div className="flex justify-between items-center">
        <h1>
          <a href={repo.html_url} target="_blank">
            {'>'} {repo.name.slice(0, 1).toUpperCase() + repo.name.slice(1)}
          </a>
          {repo.homepage ? (
            <small className="text-gray-200">
              {' '}
              (
              <a href={repo.homepage} target="_blank">
                Homepage
              </a>
              )
            </small>
          ) : (
            ''
          )}
        </h1>
        <small className="whitespace-nowrap">
          Updated: {moment(repo.updated_at).format('DD/MM/YY')}
        </small>
      </div>
      <p className="text-gray-400 text-sm">
        {repo.description || 'No available description for the repository'}
      </p>
    </div>
  );
};

export default RepoRecord;
