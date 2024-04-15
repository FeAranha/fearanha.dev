import ResultItem from './ResultItem'
import { KBarResults, useMatches } from 'kbar'

export function RenderResults() {
  const { results } = useMatches()

  console.log(results)

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        return typeof item === 'string' ? (
          <div className="py-3 px-5">
            <h2 className="text-center uppercase"> {item} </h2>
          </div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }}
    />
  )
}
