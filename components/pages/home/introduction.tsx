import React from 'react';
import useWindow from '../../../hooks/use-window';

const Introduction = () => {
    const { width } = useWindow();

    return (
        <div className='snap-start text-center flex flex-col space-y-10 h-screen items-center justify-center'>
            <h1 className='main-title xl:text-8xl'>
                I LOVE{' '}
                <span className='text-orange-300'>
                    {width < 500 ? 'JS' : 'JavaScript'}
                </span>
                <span>.</span>
            </h1>
            <div>
                <h4 className='font-bold text-2xl lg:text-5xl'>Hi there!</h4>
                <p className='text-xl md:text-3xl lg:text-4xl'>
                    <br />
                    My name is <b>Ariel</b>,<br className='sm:hidden' /> also
                    known as <b>@xarielah</b>.
                    <br />
                    I'm A Web-Developer based in{' '}
                    <span className='font-bold'>Israel</span>.
                </p>
            </div>
        </div>
    );
};

export default Introduction;
