import Link from 'next/link';
import RestictWidth from '../layout/restrict-width';

type Route = {
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
            path: 'https://github.com/xarielah',
            name: '@GitHub',
            target: '_blank',
        },
    ];

    return (
        <RestictWidth>
            <nav className='text-slate-700 py-5 px-10 dark:bg-stone-700 dark:text-white rounded-xl'>
                <div className='flex justify-center sm:justify-between mx-auto items-center sm:space-x-10'>
                    <div className='text-xl font-bold hidden sm:block'>
                        <Link href='/'>xarielah.dev</Link>
                    </div>
                    <ul className='flex justify-center font-medium'>
                        {routes.map((route) => (
                            <li
                                key={route.name}
                                className='hover:text-slate-500 mx-2 ease-in-out duration-300 rounded-xl py-1 px-3'
                            >
                                <Link href={route.path} target={route.target}>
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </RestictWidth>
    );
};

export default Navigation;
