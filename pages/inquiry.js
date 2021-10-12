import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

export default function Inquiry() {

  return (
    <Layout
      title="お問い合わせ：K1ファクトリー 浜松市西区雄踏町でホームページ制作・チラシ・ポスターデータ制作ほか"
      description="中小規模のホームページ制作・管理、チラシ・ポスターデータ制作などを行います。ネット印刷を利用し製作価格を抑えます。"
    >
      <div className="text-center" style={{ height: '42vw' }}>
        <div className="fixed" style={{ width: '100vw', zIndex: '-1' }}>
          <Image src="/img/header-inq.jpg" width={1200} height={503} alt="ホームページ制作、デザインのお手伝い K1ファクトリー（ケーワンファクトリー）" layout="responsive" />
        </div>
        <h1 className="text-sm z-1 pt-8">お問い合わせ　K1ファクトリー</h1>
      </div>

      <div className="px-6 pt-20 text-center bg-white">
        <section>
          <iframe src="https://form.run/embed/@info-1626920606" frameBorder="no" style={{ backgroundColor: 'rgb(255, 255, 255)', width: '100%', height: '926px', display: 'block' }} title="お問い合わせフォーム" />

        </section>
        <section>
          <Link href="/" passHref><button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-10 mb-10 rounded text-sm md:text-base xl:text-lg">トップページに戻る</button></Link>
        </section>

      </div>
    </Layout>
  )
}