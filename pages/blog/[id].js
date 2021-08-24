import Layout from '../../components/layout'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import Date from '../../components/date'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/bright.css'


export default function BlogId({ blog, highlightedBody }) {
  return (
    <Layout title={blog.title}>
      <div>
        <figure>
          <Image src={blog.eyecatch.url} alt={blog.title} width={1600} height={600} />
        </figure>
      </div>
      <article className="w-full sm:w-4/5 mx-auto p-10 text-sm md:text-base xl:text-lg">
        <div>
          <h1 className="font-bold text-xl sm:text-2xl xl:text-4xl pb-5 break-all">{blog.title}</h1>
          <aside className="flex pb-5">
            <time dateTime="XXXX-XX-XX" className="flex-auto flex"><FontAwesomeIcon className="w-4 h-6 flex-0" icon={faClock} /><Date dateString={blog.publishedAt} /></time>
            <div className="flex-0 flex">
              <FontAwesomeIcon className="w-4 h-6 flex-0" icon={faFolderOpen} />
              <ul>
                {blog.category.map((cat) => (
                  <li className={cat.categorySlug} key={cat.id}>{cat.category}</li>
                ))}
              </ul>
            </div>
          </aside>
          <div dangerouslySetInnerHTML={{
            __html: `${highlightedBody}`,
          }} />
        </div>
      </article>

    </Layout >
  );
}

// パスを指定
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch('https://k1nextblog.microcms.io/api/v1/blog?limit=100', key)
    .then(res => res.json())
    .catch(() => null)
  const paths = data.contents.map(content => `/blog/${content.id}`)

  return {
    paths, fallback: false,
  }
}

// 記事データを取得
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch(
    'https://k1nextblog.microcms.io/api/v1/blog/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null)

  const $ = cheerio.load(data.content)

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  return {
    props: {
      blog: data,
      highlightedBody: $.html()
    }
  }
}