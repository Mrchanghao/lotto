import React from 'react'


const Button = ({clicked, children}) => {
    return (
        <div className='button'>
            <button onClick={() => clicked}>{children}</button>
        </div>
    )
}

export default Button;