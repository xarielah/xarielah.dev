import React from 'react';
import useWindow from '../../../hooks/use-window';

export type Saying = {
    text: string;
    img: string;
    alt: string;
};

const WebDev = () => {
    const { width } = useWindow();

    const sayings: Saying[] = [
        {
            text: `For me the web is something that most of the population on
            Earth interact with everyday! <b>without even knowing.</b>`,
            img: '/images/earth-gif.webp',
            alt: 'earth rotating gif',
        },
        {
            text: `The web is a place for businesses to thrive, communities to
            grow, tools to be built and used, its an entire eco-system
            that grows non-stop.`,
            img: '/images/leaf.gif',
            alt: 'leaf growing gif',
        },
        {
            text: `So I took the decision to be a part of it. the idea of building
            something that is
            <i class='font-normal text-gray-400'>Great</i>,
            <i class='font-normal text-gray-400'>Purpose-driven</i>,
            <i class='font-normal text-gray-400'>
            Well Built &amp; Will help it's users
            </i>
            -
            <span class='text-orange-300 font-bold'>
            excites me
            </span>
            !`,
            img: '/images/graph.gif',
            alt: 'a graph growing',
        },
    ];

    return (
        <div className='flex flex-col text-center items-center justify-center space-y-8 min-h-screen md:min-h-max lg:snap-align-none lg:snap-none snap-y snap-mandatory'>
            <div className='flex flex-col lg:flex-row lg:space-y-0 lg:space-x-10 items-center space-y-5 lg:mb-14 md:h-max h-screen snap-end lg:snap-align-none lg:snap-type-none justify-center'>
                <img
                    src='/images/web-dev.gif'
                    className='round-image w-40 h-40 md:w-56 md:h-56 lg:hidden'
                    alt='Animation of developers that are coding'
                />
                <div>
                    <h4 className='paragraph-title md:text-4xl lg:text-5xl'>
                        What is <b>Web {width < 768 ? 'Dev' : 'Development'}</b>{' '}
                        for me?
                    </h4>
                    <p className='paragraph lg:hidden'>
                        Web Development for me is...
                    </p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row space-y-8 px-5 lg:space-y-0 lg:space-x-20 justify-center items-center lg:items-start'>
                {sayings.map((say) => (
                    <div
                        key={say.alt}
                        className='w-full flex flex-col space-y-6 lg:space-y-10 lg:w-1/3 items-center justify-center h-screen lg:h-auto snap-end lg:snap-align-none'
                    >
                        <img
                            src={say.img}
                            className='round-image w-40 h-40 lg:w-52 lg:h-52'
                            alt={say.alt}
                        />
                        <p
                            dangerouslySetInnerHTML={{
                                __html: say.text,
                            }}
                            className='paragraph text-xl md:text-2xl font-light w-full'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebDev;
