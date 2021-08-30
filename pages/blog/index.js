import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 10 },
}

export default function Blog({ blog }) {
  return (
    <Layout
      title="K1ファクトリー ブログ 一覧"
      description="静的サイトジェネレータとしてNext.jsによるJamStackなサイト。日本製ヘッドレスCMS「microCMS」を使ったブログです。制作手順など備忘録として掲載しています。"
    >
      <section className="pt-8">
        <h1 className="font-bold text-xl sm:text-2xl xl:text-4xl pt-20 pb-5 text-center">最近の投稿</h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5">

          {blog.map((blog) => (
            <motion.article variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="col-span-1 mx-5 pb-5 cursor-pointer" key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <figure>
                  <a><Image src={blog.eyecatch.url} alt={blog.title} width={1600} height={600} /></a>
                </figure>
              </Link>
              <Link href={`/blog/${blog.id}`}>
                <h3><a>{blog.title}</a></h3>
              </Link>
            </motion.article>
          ))}

        </motion.div>

      </section>
    </Layout>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://k1nextblog.microcms.io/api/v1/blog?limit=100', key)
    .then(res => res.json())
    .catch(() => null)
  return {
    props: {
      blog: data.contents,
    },
  };
};