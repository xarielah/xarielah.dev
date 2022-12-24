import Link from 'next/link';
import React from 'react';
import { Route } from './navigation';

interface ResponsiveMenuProps {
    routes: Route[];
}

const ResponsiveMenu = ({ routes }: ResponsiveMenuProps) => {
    return (
        <>
            <button
                id='dropdownMenuIconButton'
                data-dropdown-toggle='dropdownDots'
                className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                type='button'
            >
                <svg
                    className='w-6 h-6'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
                </svg>
            </button>

            <div
                id='dropdownDots'
                className='hidden z-10 w-44 bg-white rounded divide-y backdrop-blur-sm  divide-gray-100 shadow-xl dark:bg-gray-700 dark:divide-gray-600'
            >
                <ul
                    className='py-1 text-md text-gray-700 dark:text-gray-200'
                    aria-labelledby='dropdownMenuIconButton'
                >
                    {routes.map((route) => (
                        <li key={route.name}>
                            <Link
                                href={route.path}
                                target={route.target}
                                className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ResponsiveMenu;
