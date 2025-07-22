import type { AppProps } from 'next/app';
import '../src/app-backup/globals.css';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}