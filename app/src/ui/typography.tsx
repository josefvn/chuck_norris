import { ReactNode } from 'react'

type TypographyProps = {
  children: ReactNode
  variant?: 'text' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Typography = (props: TypographyProps) => {
  switch (props.variant) {
    case 'h1':
      return <h1 className="text-4xl font-bold text-slate-400">{props.children}</h1>
    case 'h2':
      return <h2 className="text-4xl font-bold text-slate-400">{props.children}</h2>
    case 'h3':
      return <h3 className="text-4xl font-bold text-slate-400">{props.children}</h3>
    case 'h4':
      return <h4 className="text-4xl font-bold text-slate-400">{props.children}</h4>
    case 'h5':
      return <h5 className="text-4xl font-bold text-slate-400">{props.children}</h5>
    case 'h6':
      return <h6 className="text-4xl font-bold text-slate-400">{props.children}</h6>
    case 'text':
    default:
      return <p className="text-slate-400">{props.children}</p>
  }
}

export { Typography }
