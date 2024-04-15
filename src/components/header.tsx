'use client'

import Image from 'next/image'
import Logo from '@/app/icon.png'
import { NavBar } from './NavBar'
import Link from 'next/link'
import { useState } from 'react'
import { Command } from 'lucide-react'
import { useKBar } from 'kbar'

export function Header() {
  const [resetNavBar, setResetNavBar] = useState(false)
  const { query } = useKBar()

  const handleResetNavBar = () => {
    setResetNavBar(true)
  }

  return (
    <div className="mb-14 w-full h-10 flex flex-row items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="logo" onClick={handleResetNavBar} />
      </Link>
      <NavBar resetNavBar={resetNavBar} setResetNavBar={setResetNavBar} />
      <div>
        <Command className="w-6 h-6" onClick={query.toggle} />
      </div>
    </div>
  )
}
