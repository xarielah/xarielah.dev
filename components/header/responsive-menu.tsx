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
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <nav
        id="dropdownDots"
        className="hidden z-10 w-44 bg-white rounded divide-y backdrop-blur-sm  divide-gray-100 shadow-xl dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-1 text-md text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                href={route.path}
                target={route.target}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default ResponsiveMenu;
