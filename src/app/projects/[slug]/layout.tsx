import { Sidebar } from '@/components/SideBar'
import { ReactNode } from 'react'

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:flex lg:flex-col">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blueZodiac-900 via-blueZodiac-400 to-emerald-500 inline-block text-transparent bg-clip-text mb-4">
        Projetos
      </h1>
      <div className="lg:-mt-14 lg:flex lg:flex-row justify-center items-center">
        <div className="grid lg:flex lg:flex-row lg:min-h-screen">
          <Sidebar />
          <main className="max-w-[100vw] max-h-[100vw]">{children}</main>
        </div>
      </div>
    </div>
  )
}
