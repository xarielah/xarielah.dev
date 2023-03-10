import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../footer/footer';
import Navigation from '../header/navigation';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>xarielah.dev: Where magic happens</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ariel" />
        <meta
          name="keywords"
          content="Personal developer website, web-development israel, html, css, javascript, hebrew, israel, fullstack, nextjs, react, ssr, ssg"
        />
        <meta property="og:type" content="personal" />
        <meta property="og:title" content="xarielah.dev: Passionate Israeli Web-Developer" />
        <meta
          property="og:description"
          content="Web-Development moves fast and it is fascinating and exciting! come share with me that passion."
        />
        <meta property="og:url" content="PERMALINK" />
        <meta property="og:site_name" content="xarielah.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="max-w-[1350px] mx-auto">
        <Navigation />
      </header>
      <div className="mx-auto max-w-[1350px]">
        <main className="app">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
