import React from 'react'
import '../Styles/MenuOptions.css'

const MenuOptions = ({onClick, children}) => {
  return (
    <div className='options-rectangle' onClick={onClick}>{children}</div>
  )
}

export default MenuOptions