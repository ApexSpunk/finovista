import '../styles/globals.css'
import '../styles/main.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={1000} height={3} showOnShallow={true} />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp