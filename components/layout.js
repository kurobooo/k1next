import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="font-sans min-h-screen grid" style={{ gridTemplateRows: 'auto 1fr auto' }}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" integrity="sha384-v8BU367qNbs/aIZIxuivaU55N5GPF89WBerHoGA4QTcbUjYiLQtKdrfXnqAcXyTv" crossOrigin="anonymous" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}