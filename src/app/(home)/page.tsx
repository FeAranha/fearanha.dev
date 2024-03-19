import { Suspense } from 'react'
import Loading from '../loading'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col justify-center min-h-screen space-y-2">
        <h1 className="text-3xl text-tuna-100 font-bold mb-4">Felipe Aranha</h1>
        <p className="text-lg text-tuna-100">FullStack Developer</p>
        <p className="text-sm">Adoro ajudar pessoas, desenvolvo sua solução</p>
        <p className="w-max shadow-lg rounded-lg shadow-opacity-50 shadow-offset-x-2 shadow-offset-y-2">
          Press ctrl k to start -{'>'}
        </p>
      </div>
    </Suspense>
  )
}
