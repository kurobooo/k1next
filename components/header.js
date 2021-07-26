import Image from 'next/image'

export default function Header(props) {
  return (
    <header className="mx-auto text-center" style={{ height: '42vw' }}>
      <div className="fixed" style={{ width: '100vw', zIndex: '-1' }}>
        <Image src={props.headerUrl} width={1200} height={503} alt="ホームページ制作、デザインのお手伝い K1ファクトリー（ケーワンファクトリー）" layout="responsive" />
      </div>
      <h1 className="text-sm z-1 pt-2">{props.headerH1}</h1>
    </header>
  )
}