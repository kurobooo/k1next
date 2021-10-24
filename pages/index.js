import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from "react";
import Lightbox from "lightbox-react";
import "lightbox-react/style.css";

const images = [
  "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg"
]
const title = ["atelier anniversaire", "gran gusto", "浜松ジオラマグランプリ チラシイメージ", "YZF R15パーツほか", "RC甲子園レースページイメージ", "風萩工房＆あとりえ桃花窯", "Hamamatsu Music Messe 2014チラシイメージ", "第７回春の風コンサートチラシイメージ", "V-Works", "音楽イベントステージスタッフ養成講座チラシ", "マサウクレレ：ステッカー（マカフェリ）", "風萩工房トップページイメージ", "MASA UKULELEライブチラシ", "MASA UKULELE", "二胡七夕ライブチラシ", "詩人 千児みこ 名刺", "倉岡ギター教室", "JAZZ DIALOGUEライブチラシ", "美交工業サイト「雇用促進」ページ", "音楽と全人教育研究所 店村 眞知子", "夏野健一税理士事務所", "浜松ジオラマファクトリー", "GTNET", "GTNET購入準備アンケート", "Hamamatsu Music Messe 2014出展者カタログ", "YSP甲子園 サイト", "RC甲子園レースページ", "アーティスティックエージェンシー", "DRFTパソコン用壁紙", "西日本ハウス", "土屋社会保険労務士事務所", "デジタルハリウッド課題：「CDジャケット」", "大阪府営公園 住吉・住之江公園「まちの公園新聞」", "東栄グループ 旧サイト", "絵画オークションサイト eギャラリー・オークション"]


export default function Home() {
  const [photoIndex, setIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);

  return (
    <Layout
      title="K1ファクトリー 浜松市西区雄踏町でホームページ制作・チラシ・ポスターデータ制作ほか"
      description="中小規模のホームページ制作・管理、チラシ・ポスターデータ制作などを行います。ネット印刷を利用し製作価格を抑えます。"
    >
      <div className="text-center" style={{ height: '42vw' }}>
        <div className="fixed mt-6" style={{ width: '100vw', zIndex: '-1' }}>
          <Image src="/img/header-index.jpg" width={1200} height={503} alt="ホームページ制作、デザインのお手伝い K1ファクトリー（ケーワンファクトリー）" layout="responsive" />
        </div>
        <h1 className="text-sm z-1 pt-8">浜松市西区雄踏町でホームページ制作・チラシ・ポスターデータ制作ほか　K1ファクトリー</h1>
      </div>

      <div className="mx-auto px-6 pt-10 text-center bg-white">
        <section>
          <h1><Image src="/img/ca_logo.svg" width={632} height={259} alt="ホームページ制作、デザインのお手伝い K1ファクトリー（ケーワンファクトリー）" className="mx-auto" /></h1>
          <p className="py-5 text-sm md:text-base xl:text-lg">中小規模のホームページ制作・管理<br />チラシ・ポスターデータ制作<br />ネット印刷を利用し製作価格を抑えます</p>
          <p className="py-5 text-sm md:text-base xl:text-lg">お気軽にご相談ください</p>
          <Link href="/inquiry"><button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-10 mb-10 rounded text-sm md:text-base xl:text-lg">お問い合わせ</button></Link>
        </section>
        <section>
          <h1 className="font-bold text-xl sm:text-2xl xl:text-4xl pt-20 pb-5">これまでの制作ギャラリー</h1>
          <ul className="flex flex-wrap justify-center">
            {images.map((image, index) => (
              <li className="w-1/2 sm:w-1/4 xl:w-1/6" key={index} style={{ display: 'inherit' }}>
                <Image
                  src={`/img/${image}`}
                  alt={image}
                  width={600}
                  height={600}
                  onClick={() => {
                    setisOpen(true), setIndex(index);
                  }}
                  className="hover:opacity-80"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </section>
        {
          isOpen && (
            <Lightbox
              mainSrc={`/img/${images[photoIndex]}`}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setisOpen(false)}
              onMovePrevRequest={() =>
                setIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() => setIndex((photoIndex + 1) % images.length)}
              imageTitle={title[photoIndex]}
              imageCaption={title[photoIndex]}
            />
          )
        }

        <section>
          <h1 className="font-bold text-xl sm:text-2xl xl:text-4xl pt-20 pb-5">制作・運営サイトリンク</h1>
          <ul>
            <li className="py-2"><a href="http://www.bikoh.biz/" target="_blank" rel="noopener noreferrer" className="hover:underline">美交工業</a>
            </li>
            <li className="py-2"><a href="https://www.toshi-kouen.jp/" target="_blank" rel="noopener noreferrer" className="hover:underline">いこいこ！おおさかの公園</a></li>
            <li className="py-2"><a href="http://tsuchiya-sr.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">土屋社会保険労務士事務所</a></li>
            <li className="py-2"><a href="https://higashiosaka-parks.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">花園中央公園 |
                  東大阪市特定公園</a></li>
            <li className="py-2"><a href="http://www.masaukulele.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">マサウクレレ</a>／<a href="http://www.kuraoka-guitar.com" target="_blank" rel="noopener noreferrer" className="hover:underline">倉岡ギター教室</a></li>
            <li className="py-2"><a href="http://www.natsuno-kaikei.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">夏野健一税理士事務所</a></li>
            <li className="py-2"><a href="http://osuka-japan.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Welcome to
                  Osuka</a></li>
            <li className="py-2"><a href="http://axis-mente.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">コンクリート調査・診断のアクシス</a></li>
            <li className="py-2"><a href="http://buffetfive.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">画廊ビュッフェファイヴ</a></li>
            <li className="py-2"><a href="https://saori-piano.net" target="_blank" rel="noopener noreferrer" className="hover:underline">なかむらさおり ぴあの教室</a></li>
            <li className="py-2"><a href="https://komu.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:underline">二胡教室　胡夢</a></li>
          </ul>
          <p>ほか</p>
          <Link href="/inquiry"><button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-10 my-10 rounded text-sm md:text-base xl:text-lg">お問い合わせ</button></Link>
        </section>
        <section>
          <h1 className="font-bold text-xl sm:text-2xl xl:text-4xl pt-20 pb-5">制作パートナー</h1>
          <ul>
            <li className="py-2"><a href="http://www.miraigaso.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">未来画素</a></li>
          </ul>
        </section>
      </div>
    </Layout>

  )
}
