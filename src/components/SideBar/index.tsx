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
    <Collapsible.Root className="fixed data-[state=open]:bottom-0">
      <div className="flex items-center justify-between ">
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <nav className="space-y-0.5 mt-5 bg-black">
          {items.map((yearData, yearIndex) => {
            return yearData.projects.map((project, projectIndex) => {
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
