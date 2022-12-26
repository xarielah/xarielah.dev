import Introduction from '../components/pages/home/introduction';
import WebDev from '../components/pages/home/web-dev';
import CroockedContainer from '../components/ui-elements/containers/croocked-container';

export default function Home() {
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
      {/* <SearchProjects /> */}
    </section>
  );
}
