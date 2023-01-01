import AnimationLayout from '../components/layout/animation-layout';
import GitHubStats from '../components/pages/home/github-stats';
import Introduction from '../components/pages/home/introduction';
import Skills from '../components/pages/home/skills';
import WebDev from '../components/pages/home/web-dev';
import CroockedContainer from '../components/ui-elements/containers/croocked-container';
import { GitHubUserRepo } from '../lib/types/github/github-user-data.type';

export async function getServerSideProps() {
  const fetchGitHubData = await fetch(
    `${process.env.BASE_URL ?? 'http://localhost:3000'}/api/github`
  );
  const data: GitHubUserRepo[] = await fetchGitHubData.json();

  return {
    props: {
      gitHubData: data,
    },
  };
}

export default function Home({ gitHubData }: any) {
  return (
    <AnimationLayout>
      <section className="flex h-full items-center">
        <article className="w-1/2">
          <Introduction />
        </article>
        <article className="w-1/2">
          <Skills />
        </article>
      </section>
    </AnimationLayout>
  );
}
