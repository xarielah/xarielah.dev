import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  // if (typeof window !== undefined) {
  //   const theme = localStorage.getItem('theme') ?? 'light';
  // }

  return (
    <Html lang="en" className={''}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css" />
        <Script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js" />
      </Head>
      <body className="bg-animation dark:dark-bg-animation bg-transparent">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
