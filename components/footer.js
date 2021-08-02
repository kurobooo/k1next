import Image from 'next/image'

export default function Footer(props) {
  return (
    <footer className="mx-auto text-center bg-white overflow-hidden w-full relative row-start-3 row-end-4" style={{ height: '26vw' }}>
      <div style={{ width: '100vw', zIndex: '-1' }}>
        <Image src="/img/footer.svg" width={436} height={113} alt="ホームページ制作、デザインのお手伝い K1ファクトリー（ケーワンファクトリー）" layout="responsive" />
      </div>
      <p className="absolute bottom-1 z-1 text-xs w-full text-center text-white">Copyright(C) K1factory. All Rights Reserved.</p>
    </footer>
  )
}