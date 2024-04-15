'use client'

import React from 'react'
import { Lightbulb, UserRoundSearch, Headset, Home } from 'lucide-react'
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
      icon: <UserRoundSearch className="w-6 h-6" />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['p'],
      keywords: 'go-projects',
      section: 'Navigation',
      perform: () => router.push('/projects/ignews-2-1'),
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      id: 'contacts',
      name: 'Contacts',
      shortcut: ['c', 'o'],
      keywords: 'go-contacts',
      section: 'Navigation',
      perform: () => router.push('/contacts'),
      icon: <Headset className="w-6 h-6" />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'go-home',
      section: 'Navigation',
      perform: () => router.push('/'),
      icon: <Home className="w-6 h-6" />,
    },
  ]

  return (
    <KBarProvider actions={actions} options={{ enableHistory: true }}>
      <KBarPortal>
        <KBarPositioner className="backdrop-saturate-50 backdrop-brightness-50">
          <KBarAnimator className="rounded-lg border border-tuna-100 max-w-3xl LspInfo w-3/6 bg-tuna-950 overflow-hidden shadow-tuna-950">
            <KBarSearch
              placeholder="Type a command or search…"
              className="py-4 px-5 text-xs w-full outline-none border-none bg-tuna-950 text-tuna-50"
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
