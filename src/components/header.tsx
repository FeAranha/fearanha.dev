import Image from 'next/image'
import Logo from '@/app/icon.png'
import { NavBar } from './NavBar'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex flex-row items-baseline justify-between">
      <Link href="/">
        <Image src={Logo} alt="logo" />
      </Link>
      <NavBar />
      <Image src={Logo} alt="logo" />
    </div>
  )
}
