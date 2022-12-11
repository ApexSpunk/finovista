import '../styles/globals.css'
import '../styles/main.css'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
const TRACKING_ID = "UA-106154633-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={1000} height={3} showOnShallow={true} />
      {/* <ChakraProvider> */}
      <SessionProvider session={session}>
        <Provider store={store}>
          {Component.auth ? <Auth><Component {...pageProps} role={Component.auth?.role} /></Auth> : <Component {...pageProps} />}
        </Provider>
      </SessionProvider>
      {/* </ChakraProvider> */}
    </>
  )

  function Auth({ children }: any) {
    // console.log(children)
    const { data: session, status } = useSession();
    if (status === "loading") {
      return <div>Loading...</div>;
    }
    if (session?.user?.role !== children.props.role) {
      return <div>Access Denied</div>;
    }
    return children;
  }
}

export default MyApp