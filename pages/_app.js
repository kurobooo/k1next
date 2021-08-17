import '../styles/globals.css'
import { AnimateSharedLayout } from "framer-motion"
// 追加
import { GA_TRACKING_ID, pageview } from '../lib/gtag';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// function MyApp({ Component, pageProps }) {
//   return (
//     <AnimateSharedLayout>
//       <Component {...pageProps} />
//     </AnimateSharedLayout>
//   )
// }

// export default MyApp

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // GA_TRACKING_ID が設定されていない場合は、処理終了
    if (!GA_TRACKING_ID) return;

    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}