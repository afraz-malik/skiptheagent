import React from 'react'
import ButtonCss from './button.module.scss'
const Button = ({children, login, viewmore,compare ,...otherButtonProps}) => (
   
    <button className={`${login? `${ButtonCss.login}`: null} ${ButtonCss.button} ${viewmore? `${ButtonCss.viewmore}`: null} ${compare? `${ButtonCss.compare}`: null}`}
        {...otherButtonProps}
    >
        {children}
    </button>
)

export default Button
