import Image from 'next/image'
import Logo from '@/app/icon.png'
import { NavBar } from './NavBar'

export function Header() {
  return (
    <div className="flex flex-row items-baseline justify-between">
      <Image src={Logo} alt="logo" />
      <NavBar />
      <Image src={Logo} alt="logo" />
    </div>
  )
}
