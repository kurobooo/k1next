import Layout from '../components/layout'
import Link from 'next/link'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'

export default function Callendar({ events, holidaysData }) {

  const allevents = events.map((event) => (
    { title: `${event.title}`, start: `${event.eDateStart}`, end: `${event.eDateEnd}`, url: `/event/${event.id}` }
  ))

  const holidays = Object.keys(holidaysData)
  let holidaysDates = []
  for (let i = 0; i < holidays.length; i++) {
    let holiday = {
      title: holidaysData[holidays[i]],
      start: holidays[i],
      className: "holiday",
      holiday: holidays[i],
      display: 'background',
      color: 'pink',
    }
    holidaysDates.push(holiday)
  }

  const wholeEvents = allevents.concat(holidaysDates)

  return (
    <Layout
      title="カレンダー：K1ファクトリー 浜松市西区雄踏町でホームページ制作・チラシ・ポスターデータ制作ほか"
      description="fullcalendarをお試し中です。"
    >

      <div className="text-center">
        <h1 className="text-sm z-1 pt-8">カレンダー表示</h1>
      </div>

      <div className="px-6 pt-20 text-center bg-white">
        <section>
          <FullCalendar
            plugins={[dayGridPlugin]}
            locale="ja"//日本語に
            firstDay="1"//月曜から
            businessHours={false}//土日の背景色変更
            // events={holidaysDates}
            // events={[{ title: `${holidaysData[holidays[0]]}`, start: `${holidays[0]}` }]}
            events={wholeEvents}
            dayCellContent={(e) =>
              (e.dayNumberText = e.dayNumberText.replace("日", ""))//「日」表示を削除
            }
            displayEventTime={true}
            displayEventEnd={true}
            eventTimeFormat={{ day: 'numeric', hour: 'numeric', minute: '2-digit' }}//開始日時-終了日時
          />
        </section>
        <section>
          <Link href="/" passHref><button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-10 mb-10 rounded text-sm md:text-base xl:text-lg">トップページに戻る</button></Link>
        </section>

      </div>
    </Layout >
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.EVENTS_API_KEY },
  }
  const data = await fetch('https://k1events.microcms.io/api/v1/events?limit=100', key)
    .then(res => res.json())
    .catch(() => null)

  const hdata = await fetch('https://holidays-jp.github.io/api/v1/date.json')
    .then(res2 => res2.json())
    .catch(() => null)

  return {
    props: {
      events: data.contents,
      holidaysData: hdata
    },
  };
};
