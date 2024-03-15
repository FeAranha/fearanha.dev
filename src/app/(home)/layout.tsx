import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <div className="grid content-center mx-auto p-8 gap-5">{children}</div>
}
