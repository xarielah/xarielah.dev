import GeneralContainer from '../../layout/general-container';

type KnowledgeSource = {
    logo: string;
    name: string;
};

const Technologies = () => {
    const kbSources: KnowledgeSource[] = [
        {
            logo: '/knowledge-logos/react.png',
            name: 'React',
        },
        {
            logo: '/knowledge-logos/nextjs.png',
            name: 'NextJs',
        },
        {
            logo: '/knowledge-logos/typescript.svg',
            name: 'TypeScript',
        },
        {
            logo: '/knowledge-logos/mongodb.webp',
            name: 'MongoDB',
        },
        {
            logo: '/knowledge-logos/postgresql.png',
            name: 'PostgreSQL',
        },
        {
            logo: '/knowledge-logos/nodejs.webp',
            name: 'NodeJs',
        },
        {
            logo: '/knowledge-logos/nestjs.png',
            name: 'NestJs',
        },
        {
            logo: '/knowledge-logos/expressjs.png',
            name: 'ExpressJs',
        },
    ];

    return (
        <>
            <GeneralContainer className='bg-stone-300 my-14'>
                <h3 className='font-bold text-3xl'>
                    What are my Knowledge Sources?
                </h3>
                <p className='text-center'>
                    The main sources for my knowledge are <b>Youtube</b>,{' '}
                    <b>Udemy</b> and reading <b>Docs</b> as well as reviewing
                    code written for other's project.
                    <br />
                    Self-learning is exhausting and yet thrilling anytime I
                    start a new road for new knowledge!
                </p>
            </GeneralContainer>
            <div className='text-center flex flex-col space-y-14 items-center my-10 text-slate-800'>
                <h3 className='font-bold text-3xl'>My Knowledge Stack</h3>
                <div className='flex w-5/6 justify-between'>
                    {kbSources.map((kb) => (
                        <div
                            key={kb.name}
                            className='flex flex-col items-center my-5'
                        >
                            <img
                                src={kb.logo}
                                className='w-16 h-16 object-contain'
                                alt={kb.name}
                            />
                            <p className='text-center text-2xl my-2 font-bold'>
                                {kb.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Technologies;
