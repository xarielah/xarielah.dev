import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGithubAlt } from 'react-icons/fa';
import { RxDiscordLogo } from 'react-icons/rx';
import { GrLinkedinOption } from 'react-icons/gr';
import GeneralContainer from '../../layout/general-container';

type Social = {
    name: string;
    href: string;
    icon: IconType;
};

const Information = () => {
    return (
        <GeneralContainer>
            <div className='w-full justify-between flex space-x-14 flex-col lg:flex-row xl:space-y-0'>
                <img
                    src='/images/me.jpg'
                    className='rounded-full w-[18em] mx-auto lg:mx-0 h-[18em] border-2 border-stone-300 shadow-xl'
                    alt='my-avatar'
                />
                <div className='space-y-5 flex flex-col justify-center'>
                    <div className='flex items-center flex-col-reverse lg:flex-row justify-center lg:justify-between'>
                        <h2 className='text-3xl font-bold mt-9 lg:mt-0'>
                            Ariel - @xarielah
                        </h2>
                        <SocialLinks />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum, nobis voluptas velit voluptatibus a enim quia in
                        libero voluptatem unde vero, quas sed et, quidem
                        perspiciatis excepturi porro similique delectus!
                        Obcaecati culpa quaerat natus iure aperiam eligendi quae
                        harum mollitia maxime perspiciatis repudiandae esse
                        tempore eveniet expedita deserunt facere aliquid, dolore
                        dolorem quas minima! Fugit dolore voluptatum officia
                        maxime aliquam?
                    </p>
                </div>
            </div>
        </GeneralContainer>
    );
};

export default Information;

const SocialLinks = () => {
    const socialLinks: Social[] = [
        {
            name: 'Ariel GitHub',
            href: 'https://github.com/xarielah',
            icon: FaGithubAlt,
        },
        {
            name: 'Ariel Discord Link',
            href: '#',
            icon: RxDiscordLogo,
        },
        {
            name: 'Ariel LinkedIn Profile',
            href: 'https://www.linkedin.com/in/ariel-aharon-580899202/',
            icon: GrLinkedinOption,
        },
    ];

    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <h5 className='font-medium'>Connect with me via:</h5>
                <div className='flex space-x-5'>
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className='ease-in-out duration-200 hover:scale-[115%]'
                        >
                            <link.icon className='w-8 h-8' />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};
