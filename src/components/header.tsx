'use client'

import Image from 'next/image'
import Logo from '@/app/icon.png'
import { NavBar } from './NavBar'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [resetNavBar, setResetNavBar] = useState(false)

  const handleResetNavBar = () => {
    setResetNavBar(true)
  }

  return (
    <div className="w-full h-10 flex flex-row items-baseline justify-between">
      <Link href="/">
        <Image src={Logo} alt="logo" onClick={handleResetNavBar} />
      </Link>
      <NavBar resetNavBar={resetNavBar} setResetNavBar={setResetNavBar} />
      <Image src={Logo} alt="logo" />
    </div>
  )
}
