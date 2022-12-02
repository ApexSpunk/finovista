import '../styles/globals.css'
import '../styles/main.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
const TRACKING_ID = "UA-106154633-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={1000} height={3} showOnShallow={true} />
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </>
  )
}

export default MyApp