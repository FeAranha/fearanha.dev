'use client'

import { SquareUserRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  useMatches,
} from 'kbar'
import React from 'react'

// interface CommandBarProps {
//   props: [children: React.ReactNode]
// }

export default function CommandBar({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const { results } = useMatches()

  const actions = [
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <SquareUserRound className="w-6 h-6" />,
    },
  ]

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator>
              <KBarSearch placeholder="Type a command or search…" />
              <KBarResults
                items={results}
                onRender={({ item, active }) =>
                  typeof item === 'string' ? (
                    <div className="px-2 py-4 text-xs uppercase tracking-wide">
                      {item}
                    </div>
                  ) : (
                    <div>{active}</div>
                  )
                }
              />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    </>
  )
}
