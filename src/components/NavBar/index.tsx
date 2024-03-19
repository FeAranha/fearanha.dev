'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useState } from 'react'
import { TabItem } from './Tabitem'

export function NavBar() {
  const [currentTab, setCurrentTab] = useState('')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List>
            <TabItem
              value="about"
              title="sobre"
              isSelected={currentTab === 'about'}
            />
            <TabItem
              value="projects"
              title="projetos"
              isSelected={currentTab === 'projects'}
            />
            <TabItem
              value="contacts"
              title="CONTATOS"
              isSelected={currentTab === 'contacts'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-200 dark:border-zinc-700" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
