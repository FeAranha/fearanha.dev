import items from '@/data/career.js'
import { parseISO, format, intervalToDuration } from 'date-fns'

export function Carrer() {
  const getDuration = (startDate: string, endDate: string) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mes`

    return durationStr
  }

  return (
    <div className="mt-8 max-w-[760px]">
      <h2 className="font-bold text-xl mb-10 text-tuna-100">Experiências</h2>

      {items.map((data, index) => {
        return (
          <div key={index} className="grid grid-flow-row mb-5 ">
            <h3 className="mb-2 font-bold text-tuna-50">{data.jobTitle}</h3>

            <p className="text-justify">
              <a
                href={data.companyUrl}
                target="_blank"
                className="border-b border-solid text-tuna-200"
              >
                {data.company}
              </a>
              <span className="text-tuna-200"> • </span>
              {data.description}
            </p>
            <p>
              <span>{format(parseISO(data.startDate), 'LLL yyyy')}</span>
              <span> - </span>
              <span>
                {data.endDate
                  ? format(parseISO(data.endDate), 'LLL yyyy')
                  : 'Present'}
              </span>
              <span> • </span>
              <span>{getDuration(data.startDate, data.endDate)}</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}
