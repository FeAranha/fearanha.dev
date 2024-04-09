import { Sidebar } from '@/components/SideBar'
import { ReactNode } from 'react'

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid flex-col lg:flex lg:flex-row lg:min-h-screen">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blueZodiac-900 via-blueZodiac-400 to-emerald-500 inline-block text-transparent bg-clip-text mb-5">
        Projetos
      </h1>
      <Sidebar />
      <main className="max-w-[100vw] max-h-[100vw]">{children}</main>
    </div>
  )
}
