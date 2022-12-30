import GitHubStats from '../components/pages/home/github-stats';
import Introduction from '../components/pages/home/introduction';
import WebDev from '../components/pages/home/web-dev';
import CroockedContainer from '../components/ui-elements/containers/croocked-container';
import { GitHubUserRepo } from '../types/api/github-user-data.type';

export async function getServerSideProps() {
  const url: string = process.env.BASE_URL ?? 'http://localhost:3000';
  const fetchGitHubData = await fetch(`${url}/api/github`);
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
      {/* <div className="min-h-screen snap-end">
        <GitHubStats gitHubData={gitHubData} />
      </div> */}
    </section>
  );
}
