import Layout from '../../components/layout'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import Date from '../../components/date'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
import Script from 'next/script'

export default function BlogId({ blog, highlightedBody }) {
  return (
    <Layout title={blog.title}>
      <div>
        <figure>
          <Image src={blog.eyecatch.url} alt={blog.title} width={1600} height={600} />
        </figure>
      </div>
      <article className="w-full sm:w-4/5 mx-auto p-10 text-sm xl:text-base">
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
          {/* <div dangerouslySetInnerHTML={{
              __html: blog.content
            }} /> */}
          <div dangerouslySetInnerHTML={{
            __html: highlightedBody
          }} />
        </div>
      </article>
      <section className="w-full sm:w-4/5 mx-auto p-10 text-sm xl:text-base"
        dangerouslySetInnerHTML={{
          __html: `
              <!-- begin wwww.htmlcommentbox.com -->
              <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">HTML </a> is loading comments...</div>
              <link rel="stylesheet" type="text/css" href="https://www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
             <!-- end www.htmlcommentbox.com -->
        `,
        }}
      />
      <Script type="text/javascript" id="hcb"
        dangerouslySetInnerHTML={{
          __html: `
              /*<!--*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="https://www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&opts=16798&num=10&ts=1630115715575");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); /*-->*/ 
        `,
        }}
      />

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