import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import MainLayout from '../components/layout/main-layout';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-theme';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <MainLayout>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </MainLayout>
    </ThemeProvider>
  );
}
