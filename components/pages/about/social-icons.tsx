import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGithubAlt } from 'react-icons/fa';
import { RxDiscordLogo } from 'react-icons/rx';
import { IoLogoLinkedin } from 'react-icons/io';

type Social = {
    name: string;
    href: string;
    icon: IconType;
};

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
            icon: IoLogoLinkedin,
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center lg:mb-0 mb-24'>
            <h5 className='font-medium'>Connect with me via:</h5>
            <div className='flex space-x-5'>
                {socialLinks.map((link) => (
                    <Link
                        target={'_blank'}
                        key={link.name}
                        href={link.href}
                        className='ease-in-out duration-200 hover:scale-[115%]'
                    >
                        <link.icon className='w-8 h-8' />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SocialLinks;
