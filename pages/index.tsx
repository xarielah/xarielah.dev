import AnimationLayout from '../components/layout/animation-layout';
import Introduction from '../components/pages/home/introduction';
import Skills from '../components/pages/home/skills';

export default function Home({ gitHubData }: any) {
  return (
    <AnimationLayout>
      <section className="flex flex-col">
        <article className="p-4 text-center lg:text-left">
          <Introduction />
        </article>
        <article className="relative overflow-x-hidden h-[244px]">
          <Skills />
        </article>
      </section>
    </AnimationLayout>
  );
}
