import { GitHubUserRepo } from '../../../lib/types/github/github-user-data.type';
import moment from 'moment';
import OpenSourceTag from '../../ui-elements/github-repos/open-source.tag';
import { useEffect, useState } from 'react';
import GitHubContainers from './github-containers';

export interface GitHubStatsProps {
  gitHubData: GitHubUserRepo[];
}

const GitHubStats = ({ gitHubData }: GitHubStatsProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* Container */}
      <div className="p-3 flex flex-col md:p-10 lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className="text-center lg:text-left lg:pl-14 lg:pb-4 font-bold paragraph-title text-3xl">
            GitHub Repositories 🚀
          </h2>
          <p className="paragraph text-lg md:px-14 md:mx-auto px-4 border-l-4 md:border-l-0 border-gray-900/50 ml-4">
            I try to do my best and <i className="font-bold">contribute to Open-Source projects</i>{' '}
            as well as maintain <i className="font-bold">my own projects</i>, this will present my
            latest updated repositories that I have created / forked.
          </p>
        </div>
        <div className="mt-10 lg:w-1/2">
          <GitHubContainers gitHubData={gitHubData} />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
