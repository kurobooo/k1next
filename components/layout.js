import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import { motion } from 'framer-motion'

export default function Layout(props) {
  return (
    <div className="font-sans min-h-screen grid" style={{ gridTemplateRows: 'auto 1fr auto' }}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {props.children}
      </motion.div>
      <Footer />
    </div>
  )
}