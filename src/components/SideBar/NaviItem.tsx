import { ChevronRight } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-tuna-500"
    >
      <Icon className="h-5 w-5 text-tuna-50" />
      <span className="font-medium text-tuna-50">{title}</span>
      <ChevronRight className="ml-auto h-5 w-5 group-hover:text-tuna-300" />
    </a>
  )
}
