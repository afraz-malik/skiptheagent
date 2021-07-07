import React from 'react'
import ButtonCss from './button.module.scss'
const Button = ({
  children,
  login,
  viewmore,
  compare,
  edit,
  ...otherButtonProps
}) => (
  <button
    className={`
        ${login ? `${ButtonCss.login}` : null} 
        ${ButtonCss.button} 
        ${viewmore ? `${ButtonCss.viewmore}` : null}
        ${compare ? `${ButtonCss.compare}` : null}
        ${edit ? `${ButtonCss.edit}` : null}
    `}
    {...otherButtonProps}
  >
    {children}
  </button>
)

export default Button
