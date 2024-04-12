'use client'

import React from 'react'
import { SquareUserRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
} from 'kbar'
import { RenderResults } from './RenderResults'

interface KBarLayoutProviderProps {
  children: React.ReactNode
}

const KBarLayoutProvider: React.FC<KBarLayoutProviderProps> = ({
  children,
}) => {
  const router = useRouter()

  const actions = [
    {
      id: 'about',
      name: 'About',
      shortcut: ['a'],
      keywords: 'go-about',
      section: 'Navigation',
      perform: () => router.push('/about'),
      icon: <SquareUserRound className="w-6 h-6" />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['p'],
      keywords: 'go-projects',
      section: 'Navigation',
      perform: () => router.push('/projects/ignews-2-1'),
      icon: <SquareUserRound className="w-6 h-6" />,
    },
    {
      id: 'contacts',
      name: 'Contacts',
      shortcut: ['a'],
      keywords: 'go-contacts',
      section: 'Navigation',
      perform: () => router.push('/contacts'),
      icon: <SquareUserRound className="w-6 h-6" />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['a'],
      keywords: 'go-home',
      section: 'Navigation',
      perform: () => router.push('/'),
      icon: <SquareUserRound className="w-6 h-6" />,
    },
  ]

  return (
    <KBarProvider actions={actions} options={{ enableHistory: true }}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator className="max-w-3xlLspInfo w-3/6 bg-white border-r-8 overflow-hidden shadow-white">
            <KBarSearch
              placeholder="Type a command or search…"
              className="py-4 px-5 text-xs w-full outline-none border-none bg-white text-black "
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}

export default KBarLayoutProvider
