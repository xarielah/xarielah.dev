import AnimationLayout from '../components/layout/animation-layout';
import Introduction from '../components/pages/home/introduction';
import Skills from '../components/pages/home/skills';
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
      <section className="flex flex-col lg:flex-row">
        <article className="basis-1/2 p-4 text-center lg:text-left">
          <Introduction />
        </article>
        <article className="basis-1/2 p-4 overflow-hidden lg:overflow-visible">
          <Skills />
        </article>
      </section>
    </AnimationLayout>
  );
}
