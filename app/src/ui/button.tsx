import { ReactNode } from 'react'
import { Button as HuiButton, ButtonProps as HuiButtonProps } from '@headlessui/react'

type ButtonProps = HuiButtonProps & {
  children: ReactNode
}

const Button = (props: ButtonProps) => {
  return <HuiButton
    className="bg-teal-500 cursor-pointer text-white p-2 rounded shadow-xl"
    {...props}
  >{props.children}</HuiButton>
}

export { Button }
