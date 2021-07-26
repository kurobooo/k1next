import Layout from '../components/layout'
import Link from 'next/link'
import Script from 'next/script'

export default function Inquiry() {

  return (
    <Layout
      title="お問い合わせ：K1ファクトリー 浜松市西区雄踏町でホームページ制作・チラシ・ポスターデータ制作ほか"
      description="中小規模のホームページ制作・管理、チラシ・ポスターデータ制作などを行います。ネット印刷を利用し製作価格を抑えます。"
      headerUrl="/img/header-inq.jpg"
      headerH1="お問い合わせ　K1ファクトリー">
      <div className="mx-auto px-6 py-6 text-center bg-white">
        <section>
          <Script src="https://sdk.form.run/js/v2/embed.js"></Script>
          <div className="formrun-embed" data-formrun-form="@info-1626920606" data-formrun-redirect="true">
          </div>
        </section>
        <section>
          <Link href="/" passHref><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 my-10 rounded">トップページに戻る</button></Link>
        </section>

      </div>
    </Layout>
  )
}