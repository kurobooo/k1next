import Image from 'next/image'
import { GA_TRACKING_ID } from '../lib/gtag';

export default function Footer(props) {
  return (
    <footer className="mx-auto text-center bg-white overflow-hidden w-full relative row-start-3 row-end-4" style={{ height: '25.9vw' }}>
      <div style={{ width: '100vw', zIndex: '-1' }}>
        <Image src="/img/footer.svg" width={436} height={113} alt="ホームページ制作、デザインのお手伝い K1ファクトリー（ケーワンファクトリー）" layout="responsive" />
      </div>
      <p className="absolute bottom-1 z-1 text-xs w-full text-center text-white">Copyright(C) K1factory. All Rights Reserved.</p>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
        `,
        }}
      />
    </footer>
  )
}