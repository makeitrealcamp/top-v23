import React, { SyntheticEvent, ButtonHTMLAttributes } from 'react'

type ButtonProps = {
  title: string
  children: React.ReactNode,
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'],
}

const Button = (props: ButtonProps) => {
  const { title, type } = props

  const handleClick = (e: SyntheticEvent) => {
    console.log('Click')
  }

  return(
    <button onClick={handleClick} type={type}>
      {title}
    </button>
  )
}

export default Button
