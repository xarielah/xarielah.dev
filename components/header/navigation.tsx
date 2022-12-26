import Link from 'next/link';
import RestictWidth from '../layout/restrict-width';
import SocialLinks from '../ui-elements/social-icons/social-icons';
import ResponsiveMenu from './responsive-menu';

export type Route = {
  path: string;
  name: string;
  target?: string;
};

const Navigation = () => {
  const routes: Route[] = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/contact',
      name: 'Contact Me',
    },
    {
      path: 'https://github.com/xarielah',
      name: '@GitHub',
      target: '_blank',
    },
  ];

  return (
    <nav className="w-full fixed text-md z-[999]">
      <RestictWidth className="mx-auto flex items-center justify-between p-4 lg:max-w-[200ch] lg:text-xl">
        <Link href="/">
          <div className="font-bold text-xl lg:text-3xl">xarielah.dev</div>
        </Link>
        <div className="flex items-center space-x-3 lg:space-x-10">
          <div className="hidden sm:flex space-x-5 lg:space-x-10">
            {routes.map((link) => (
              <Link href={link.path} target={link.target} key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>
          <SocialLinks />
          <div className="block sm:hidden">
            <ResponsiveMenu routes={routes} />
          </div>
        </div>
      </RestictWidth>
    </nav>
  );
};

export default Navigation;
