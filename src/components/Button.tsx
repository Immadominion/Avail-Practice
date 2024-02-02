import React from 'react'

interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger';
    onLoginClick: () => void;
}

const Button = ({children, color = 'primary', onLoginClick}: Props) => {
  return (
    <button className={'btn btn-'+ color} onClick={onLoginClick}>{children}</button>
  )
}

export default Button