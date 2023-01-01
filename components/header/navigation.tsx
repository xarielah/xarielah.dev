import Link from 'next/link';

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
      path: '/projects',
      name: 'projects',
    },
    {
      path: '/contact',
      name: 'Contact',
    },
  ];

  return (
    <nav className="w-full flex items-center justify-between p-8">
      <Link href="/">
        <div className="font-bold text-xl lg:text-3xl">xarielah.dev</div>
      </Link>
      <div className="flex items-center space-x-3 lg:space-x-10">
        {/* <div className="hidden sm:flex space-x-5 lg:space-x-10">
          {routes.map((link) => (
            <Link href={link.path} target={link.target} key={link.name}>
              {link.name}
            </Link>
          ))}
        </div> */}
      </div>
    </nav>
  );
};

export default Navigation;
