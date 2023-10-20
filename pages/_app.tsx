import '@/styles/globals.css'
import MinLayout from '../components/minLayout'
import Head from 'next/head'

export default function App({ Component, pageProps }) :JSX.Element {
  return (
    <MinLayout>
      <Head>
        <title>rgatnaou</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </MinLayout>
  );
}
