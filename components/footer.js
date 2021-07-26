import Image from 'next/image'

export default function Footer(props) {
  return (
    <footer className="mx-auto text-center bg-white overflow-hidden relative" style={{ height: '25.5vw' }}>
      <div className="bottom-0" style={{ width: '100vw', zIndex: '-1' }}>
        <Image src="/img/footer.svg" width={436} height={113} alt="ホームページ制作、デザインのお手伝い K1ファクトリー（ケーワンファクトリー）" layout="responsive" />
      </div>
      <p className="text-sm z-1 absolute top-4 w-full text-center">Copyright(C) K1factory. All Rights Reserved.</p>
    </footer>
  )
}