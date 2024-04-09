import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'
import Link from 'next/link'

export interface NavItemProps {
  title: string
  icon: ElementType
}

function createSlug(title: string): string {
  return title.toLowerCase().replaceAll(' ', '-')
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  const slug = createSlug(title)

  return (
    <Link
      href={`/projects/${slug}`}
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-tuna-500"
    >
      <Icon className="h-5 w-5 text-tuna-50" />
      <span className="font-medium text-tuna-50">{title}</span>
      <ChevronDown className="ml-auto h-5 w-5 group-hover:text-tuna-300" />
    </Link>
  )
}
