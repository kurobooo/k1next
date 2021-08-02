import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog({ blog }) {
  return (
    <Layout title="ブログ">
      <section className="pt-8">
        <h1 className="font-bold text-xl sm:text-2xl xl:text-4xl pt-20 pb-5 text-center">最近の投稿</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5">

          {blog.map((blog) => (
            <article className="col-span-1 mx-5 pb-5 cursor-pointer hover:opacity-75" key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <figure>
                  <a><Image src={blog.eyecatch.url} alt={blog.title} width={1600} height={600} /></a>
                </figure>
              </Link>
              <Link href={`/blog/${blog.id}`}>
                <h3><a>{blog.title}</a></h3>
              </Link>
            </article>
          ))}

        </div>

      </section>
    </Layout>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://k1nextblog.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null)
  return {
    props: {
      blog: data.contents,
    },
  };
};