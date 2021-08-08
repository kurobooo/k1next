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
          <Script src="https://sdk.form.run/js/v2/formrun.js"></Script>
          {/* class, action, methodを変更しないでください */}
          <form className="formrun w-10/12 mx-auto md:max-w-md" action="https://form.run/api/v1/r/xuhrumhdkror6fvpj54ulnse" method="post">
            {/* ↓自由に要素を追加・編集することができます */}
            <div className="mb-8 form-group">
              <label className="block">お名前 [必須]</label>
              <input name="お名前" data-formrun-required type="text" className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="山田太郎" />
            </div>
            <div className="mb-8 form-group">
              <label className="block">メールアドレス [必須]</label>
              <input name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="Eメール" />
              <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
            </div>
            <div className="mb-8 form-group">
              <label className="block">お問い合わせ [必須]</label>
              <textarea name="お問い合わせ" data-formrun-required defaultValue={""} className="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="お問い合わせ内容" />
              <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div>
            </div>
            <div className="mb-8 form-group">
              <label className="mr-4">個人情報利用同意 [必須]</label>
              <input type="checkbox" name="個人情報利用同意" data-formrun-required />
              <div data-formrun-show-if-error="個人情報利用同意">同意してください</div>
            </div>
            {/* ボット投稿をブロックするためのタグ */}
            <div className="_formrun_gotcha">
              <style media="screen" dangerouslySetInnerHTML={{ __html: "._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}" }} />
              <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
              <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
            </div>
            <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中..." className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-10 mb-10 rounded text-sm md:text-base xl:text-lg">送信</button>
          </form>
        </section>
        <section>
          <Link href="/" passHref><button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-10 mb-10 rounded text-sm md:text-base xl:text-lg">トップページに戻る</button></Link>
        </section>

      </div>
    </Layout>
  )
}