import WebDev from '../components/pages/home/web-dev';
import CroockedContainer from '../components/ui-elements/containers/croocked-container';
import useWindow from '../hooks/use-window';

export default function Home() {
    const { width } = useWindow();

    return (
        <section>
            <div className='text-center flex flex-col space-y-6 min-h-[100vh] items-center justify-center -mt-14'>
                <h1 className='main-title'>
                    I LOVE{' '}
                    <span className='text-orange-300'>
                        {width < 500 ? 'JS' : 'JavaScript'}
                    </span>
                    .
                </h1>
                <p className='text-xl'>
                    <span className='font-bold text-2xl'>Hi there!</span>
                    <br />
                    My name is <b>Ariel</b>,
                    <br className='block md:hidden' /> A Web-Developer based in{' '}
                    <span className='font-bold'>Israel</span>.
                </p>
            </div>
            <CroockedContainer className='md:py-24'>
                <WebDev />
            </CroockedContainer>
            {/* <SearchProjects /> */}
        </section>
    );
}
