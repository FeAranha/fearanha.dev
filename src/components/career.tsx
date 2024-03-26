import items from '@/data/career.js'

export function Carrer() {
  return (
    <div className="">
      <h2>Experiências</h2>
      {items.map((data, index) => {
        return (
          <div
            key={index}
            className="grid grid-flow-row auto-rows-[minmax(0,_3fr)] mb-5"
          >
            <h3>{data.jobTitle}</h3>

            <p>{data.description}</p>
          </div>
        )
      })}
    </div>
  )
}
