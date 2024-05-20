import Link from 'next/link'

export function Footer() {
  return (
    <footer className="p-4 fixed bottom-0 w-full">
      <div className="w-auto px-8 flex justify-between items-center">
        <Link href="/contacts">
          <p>email</p>
        </Link>
        <p>discord</p>
        <p>github</p>
        <p>linkedIn</p>
        <p>instagram</p>
      </div>
    </footer>
  )
}
