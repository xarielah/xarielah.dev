import GitHubStats from '../components/pages/home/github-stats';
import Introduction from '../components/pages/home/introduction';
import WebDev from '../components/pages/home/web-dev';
import CroockedContainer from '../components/ui-elements/containers/croocked-container';
import { GitHubUserRepo } from '../types/api/github-user-data.type';

export async function getServerSideProps() {
  const fetchGitHubData = await fetch(`${process.env.BASE_URL}/api/github`);
  const data: GitHubUserRepo[] = await fetchGitHubData.json();

  return {
    props: {
      gitHubData: data,
    },
  };
}

export default function Home({ gitHubData }: any) {
  return (
    <section className="snap-y snap-mandatory overflow-auto overflow-x-hidden w-screen -mx-5 h-screen">
      <div className="snap-end min-h-screen">
        <Introduction />
      </div>

      <div className="min-h-screen snap-align-none lg:snap-end">
        <CroockedContainer>
          <WebDev />
        </CroockedContainer>
      </div>
      <div className="min-h-screen snap-end">
        <GitHubStats gitHubData={gitHubData} />
      </div>
      {/* <SearchProjects /> */}
    </section>
  );
}
