import { IoLogoLinkedin } from 'react-icons/io';
import { FaGithubSquare } from 'react-icons/fa';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';

export type SocialLink = {
  logo: IconType;
  href: string;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials: SocialLink[] = [
    {
      logo: FaGithubSquare,
      href: '#',
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-center text-center p-10 bg-[#fafafa]/30 dark:bg-slate-900/20 font-bold">
      <div className="flex space-x-1 items-center">
        <Link href={'https://www.linkedin.com/in/ariel-aharon-580899202/'} target={'_blank'}>
          <IoLogoLinkedin className="w-6 h-6" />
        </Link>
        <Link href={'https://github.com/xarielah'} target={'_blank'}>
          <FaGithubSquare className="w-[1.37em] h-[1.37em]" />
        </Link>
      </div>
      <p className="uppercase font-light text-[.75em]">Ariel Aharon &copy; {currentYear}</p>
      <p className="uppercase font-light text-[.75em]">
        Inspired by{' '}
        <b>
          <Link href="https://www.tamirassayag.com/">Tamir Assayag</Link>
        </b>
      </p>
    </footer>
  );
};

export default Footer;
