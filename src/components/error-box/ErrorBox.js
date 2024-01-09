import './errorBox.css';
import React from 'react'

export const ErrorBox = ({ error }) => {
    return (
        <div className='error-box'>
            <p>{error}</p>
        </div>
    )
}
