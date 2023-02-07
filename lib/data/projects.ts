import { Project } from '../../pages/projects';

export const projects: Project[] = [
  {
    name: 'JWT-Auth-Example',
    description:
      'Simple website with Authentication and Authorizations both Front-End and Back-End. Using the Refresh Token & Access Token strategy while Refresh Token as an httpOnly cookie and Access Token is short-lived and living in a normal cookie. Used as well for the state-management simple Redux slicer using RTK & React-Redux. Back-End is written in Express while managing a simple and very understood file organization.',
    source: 'https://github.com/xarielah/jwt-auth-example',
    demo: 'https://jwt-auth-example.vercel.app',
    tags: [
      'TypeScript',
      'ReduxJS',
      'React',
      'ExpressJS',
      'Authentication',
      'Authorization',
      'jwt.io',
      'Access Token',
      'Refresh Token',
    ],
  },
  {
    name: 'xarielah.dev',
    description:
      'Majorly Front-End Centered project, developed with NextJS for it\'s SSR and build-optimizations as well as having an internal Back-End. I have implemented a "Nest.js" approach with next-api-decorators and tsyringe for dependency injections. I have implemented notifications using the newly centralized notifications infrastructure Novu.co for the requests all over the site.',
    source: 'https://github.com/xarielah/xarielah.dev',
    demo: 'https://xarielah.dev',
    packages: ['next-api-decorators', 'novu', 'framer-motion', 'tsyringe', 'next', 'moment'],
    tags: [
      'TypeScript',
      'Nextjs',
      'React',
      'NextApiDecorators',
      'Novu',
      'SendGrid',
      'SSR',
      'FrontEnd',
      'FramerMotion',
    ],
  },
  {
    name: 'hangman-game',
    description:
      "These times today I'm refining my Front-End skills and decided developing this game again by now using a more complex way of handling the game with some features such as diffculty levels, API for random words, and a fairly not-so-simple state management with Redux, that is dependent and changing by the different slices values.",
    source: 'https://github.com/xarielah/hangman-game',
    demo: 'https://hangman.xarielah.dev',
    packages: ['vite', 'react', 'typescript', 'tailwindcss', 'redux'],
    tags: ['Vite', 'State Management', 'ReduxJS', 'ReduxToolKit', 'TypeScript'],
  },
];
