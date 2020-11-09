import React from 'react'
import './Button.scss'

const Button = ({text, color, bgColor}) => {
    return (
        <button style={{color: `${color}`, backgroundColor: `${bgColor}`}}>
            {text}
        </button>
    )
}

export default Button
