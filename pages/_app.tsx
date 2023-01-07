import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import MainLayout from '../components/layout/main-layout';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-theme';
import { createContext, useEffect, useState } from 'react';

export const isMountedContext = createContext(false);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <MainLayout>
        <isMountedContext.Provider value={isMounted}>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </isMountedContext.Provider>
      </MainLayout>
    </ThemeProvider>
  );
}
