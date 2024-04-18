import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface InputProps {
  className: string
}

type InputPrefixProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-tuna-400 placeholder-zinc-500 outline-none"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'sm:w-[380px] flex w-full my-5 items-center gap-2 rounded-lg border border-tuna-300 px-3 py-2 shadow-sm',
        'focus-within:border-tuna-300 focus-within:ring-2 focus-within:ring-tuna-100',
        props.className,
      )}
      {...props}
    />
  )
}
