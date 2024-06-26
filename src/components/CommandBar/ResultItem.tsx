import React from 'react'
import { ActionImpl } from 'kbar'

// Forward Ref
const ResultItem = React.forwardRef(function ResultItem(
  { action, active }: { action: ActionImpl; active: boolean },
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={
        active
          ? `px-3 py-2 leading-none rounded text-violet-50 flex items-center justify-between bg-tuna-900`
          : `px-3 py-2 leading-none rounded text-violet-50 flex items-center justify-between hover:bg-tuna-900`
      }
    >
      <header className="flex items-center">
        {action.icon}
        <div className="rounded flex flex-col items-start justify-center relative select-none outline-none hover:bg-tuna-900">
          <h1 className="text-lg text-violet-50 ml-5"> {action.name} </h1>
          <p className="text-md text-violet-900 py-1"> {action.subtitle} </p>
        </div>
      </header>
      <div className="text-[15px] leading-none text-violet-50 rounded flex justify-between items-center relative select-none outline-none hover:bg-violet-400">
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: 'grid', gridAutoFlow: 'column', gap: '4px' }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: '4px 6px',
                  background: 'rgba(0 0 0 / .1)',
                  borderRadius: '4px',
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
})

export default ResultItem
