import { ReactNode } from 'react';
import RestictWidth from '../../layout/restrict-width';

interface CroockedContainerProps {
    children: ReactNode;
    className?: string;
}

const CroockedContainer = ({ children, className }: CroockedContainerProps) => {
    return (
        <section className='-mx-5'>
            <div className='bg-gray-900 w-full h-14 -rotate-1 translate-y-5'></div>
            <div
                className={`origin-top-right left-0 bg-gray-900 px-5 md:px-10 py-10 ${
                    className ? className : ''
                }`}
            >
                <RestictWidth className='mx-auto xl:max-w-[90%]'>
                    {children}
                </RestictWidth>
            </div>
            <div className='bg-gray-900 w-full h-14 -rotate-1 -translate-y-5'></div>
        </section>
    );
};

export default CroockedContainer;
