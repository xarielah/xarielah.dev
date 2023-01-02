import AnimationLayout from '../components/layout/animation-layout';
import Introduction from '../components/pages/home/introduction';
import Skills from '../components/pages/home/skills';

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
