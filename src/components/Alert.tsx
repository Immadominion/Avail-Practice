import { ReactNode } from 'react'

interface Props {
    children: ReactNode
    onClicked: () => void

}
const Alert = ({children, onClicked}: Props) => {
  return (
    <div className='alert alert-dismissible fade show' role='alert'>
        {children}
        <button type='button' className='btn-close' data-bs-dismissible='alert' aria-label='Close' onClick={onClicked}></button>
    </div>
  )
}

export default Alert