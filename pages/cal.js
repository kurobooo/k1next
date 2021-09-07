import Layout from '../components/layout'
import Link from 'next/link'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'

export default function Callendar() {

  return (
    <Layout
      title="カレンダー：K1ファクトリー 浜松市西区雄踏町でホームページ制作・チラシ・ポスターデータ制作ほか"
      description="テストでGoogleカレンダーを表示"
    >

      <div className="text-center">
        <h1 className="text-sm z-1 pt-8">カレンダー表示</h1>
      </div>

      <div className="px-6 pt-20 text-center bg-white">
        <section>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialEvents={[{ title: "initial event", start: new Date() }]}
          />
        </section>
        <section>
          <Link href="/" passHref><button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-10 mb-10 rounded text-sm md:text-base xl:text-lg">トップページに戻る</button></Link>
        </section>

      </div>
    </Layout >

  )
}