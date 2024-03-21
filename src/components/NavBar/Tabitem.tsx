// Client  Boundaries | not async

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import Link from 'next/link'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Link href={`/${value}`}>
      <Tabs.Trigger
        value={value}
        className=":px-1 relative text-sm font-medium text-tuna-300 outline-none hover:text-tuna-100 data-[state=active]:text-tuna-100 dark:text-tuna-100 dark:hover:text-tuna-100 dark:data-[state=active]:text-tuna-100 p-2"
      >
        <span className="text-tuna-300 whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
          {title.toUpperCase()}
        </span>

        {isSelected && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-px left-0 right-0 h-0.5 bg-tuna-100 dark:bg-tuna-100"
          />
        )}
      </Tabs.Trigger>
    </Link>
  )
}
