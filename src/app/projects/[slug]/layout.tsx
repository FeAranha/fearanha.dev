import { Sidebar } from '@/components/SideBar'
import { ReactNode } from 'react'

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:flex">
      <h1 className="mb-5 text-3xl font-bold bg-gradient-to-r from-blueZodiac-900 via-blueZodiac-400 to-emerald-500 inline-block text-transparent bg-clip-text">
        Projetos
      </h1>
      <div className="lg:flex lg:flex-row justify-center items-center">
        <div className="lg:ml-20 grid flex-col lg:flex lg:flex-row lg:min-h-screen">
          <Sidebar />
          <main className="max-w-[100vw] max-h-[100vw]">{children}</main>
        </div>
      </div>
    </div>
  )
}
