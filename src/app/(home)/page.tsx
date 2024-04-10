import { Suspense } from 'react'
import Loading from '../loading'

export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="grid md:grid-cols-2 gap-4 space-y-2 mt-80">
        <div className="col-span-1 sm:col-span-1 flex flex-col justify-center">
          <div className="flex flex-col items-end">
            <div className=" flex flex-col">
              <h1 className="text-3xl text-tuna-100 font-bold mb-4">
                Felipe Aranha
              </h1>
              <p className="text-lg text-tuna-100">FullStack Developer</p>
              <p className="text-sm mb-4">
                Adoro ajudar pessoas, desenvolvo sua solução 🚀
              </p>
              <p className="w-max shadow-lg rounded-lg">
                Press ctrl k to start -{'>'}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col-span-1 sm:col-span-1 min-w-0 bg-black">
          {/* Coluna vazia à direita
        </div> */}
      </div>
    </Suspense>
  )
}
