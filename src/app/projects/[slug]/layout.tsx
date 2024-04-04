import { Sidebar } from '@/components/SideBar'
import { ReactNode } from 'react'

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row min-h-screen">
      <aside className="w-[312px] mr-8 border-r border-tuna-300">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blueZodiac-900 via-blueZodiac-400 to-emerald-500 inline-block text-transparent bg-clip-text">
          Projetos
        </h1>
        <Sidebar />
      </aside>
      <main className="max-w-[100vw] max-h-[100vw]">{children}</main>
    </div>
  )
}
