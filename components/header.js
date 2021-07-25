export default function Header(props) {
  return (
    <header className="bg-no-repeat bg-top bg-contain bg-fixed mx-auto pt-2 text-center" style={{ backgroundImage: `url(${props.headerUrl})`, height: '42vw' }}>
      <h1 className="text-sm">{props.headerH1}</h1>
    </header>
  )
}