import Link from 'next/link'
import Image from 'next/image'

export default function Header(props) {
  return (
    <header className="flex fixed z-50 bg-black shadow-md w-full">
      <div className="flex-1 pt-1 pl-1">
        <Link href="/">
          <a><Image src="/img/logo.svg" width={30} height={22} alt="K1ファクトリー" /></a>
        </Link>
      </div>
      <nav className="flex-0">
        <ul className="flex text-center text-white text-sm leading-loose">
          <li className="flex-0 px-2"><Link href="/"><a className="hover:underline">トップ</a></Link></li>
          <li className="flex-0 px-2"><Link href="/blog"><a className="hover:underline">ブログ</a></Link></li>
          <li className="flex-0 px-2"><Link href="/inquiry"><a className="hover:underline">お問い合わせ</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}