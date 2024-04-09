'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '@/components/Button'
import {
  LucideIcon,
  Menu,
  PawPrint,
  ShoppingBag,
  BookHeart,
} from 'lucide-react'
import { NavItem } from './NaviItem'
import items from '@/data/projects.js'

interface IconMap {
  [key: string]: LucideIcon
}

const iconMap: IconMap = {
  PawPrint,
  ShoppingBag,
  BookHeart,
}

export function Sidebar() {
  return (
    <Collapsible.Root className="w-max flex flex-col bg-tuna-900 lg:bg-transparent p-2 fixed lg:left-0 right-0 top-0 lg:top-36 data-[state=open]:bottom-0">
      <div className="flex flex-row-reverse items-center justify-between">
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost" className="right-0">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="w-max  flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <nav className="space-y-5 mt-5">
          {items.map((yearData, yearIndex) => {
            return yearData.projects
              .slice()
              .reverse()
              .map((project, projectIndex) => {
                const IconComponent = iconMap[project.icon]

                return (
                  <NavItem
                    key={`${yearIndex}-${projectIndex}`}
                    title={project.title}
                    icon={IconComponent}
                  />
                )
              })
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
