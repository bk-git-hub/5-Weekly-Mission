import '@/styles/reset.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserInfoProvider } from '@/contexts/UserInfoContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const isAuthPage = Component.name === 'SignIn' || Component.name === 'SignUp';

  return (
    <UserInfoProvider>
      <>
        {isAuthPage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </>
    </UserInfoProvider>
  );
}
