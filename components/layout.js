import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="font-sans">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
        <script src={props.scriptUrl}></script>
      </Head>
      <Header headerUrl={props.headerUrl} headerH1={props.headerH1} />
      {props.children}
      <Footer />
    </div>
  )
}