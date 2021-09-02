import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Callendar() {

  return (
    <Layout
      title="カレンダー：K1ファクトリー 浜松市西区雄踏町でホームページ制作・チラシ・ポスターデータ制作ほか"
      description="テストでGoogleカレンダーを表示"
    >
      <div className="text-center" style={{ height: '42vw' }}>
        <div className="fixed" style={{ width: '100vw', zIndex: '-1' }}>
          <Image src="/img/header-inq.jpg" width={1200} height={503} alt="ホームページ制作、デザインのお手伝い K1ファクトリー（ケーワンファクトリー）" layout="responsive" />
        </div>
        <h1 className="text-sm z-1 pt-8">Googleカレンダー表示</h1>
      </div>

      <div className="px-6 pt-20 text-center bg-white">
        <section>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&src=dTBoajdzdjZkbHVuOHV0c2c2czQ5dWVsdHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D81B60" className="w-full min-h-screen pt-20" />
        </section>
        <section>
          <Link href="/" passHref><button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-10 mb-10 rounded text-sm md:text-base xl:text-lg">トップページに戻る</button></Link>
        </section>

      </div>
    </Layout>
  )
}