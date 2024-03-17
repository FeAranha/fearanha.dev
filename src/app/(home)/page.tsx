import { Suspense } from 'react'
import Loading from '../loading'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <Suspense fallback={<Loading />}>
      <h1>Home</h1>
    </Suspense>
  )
}
