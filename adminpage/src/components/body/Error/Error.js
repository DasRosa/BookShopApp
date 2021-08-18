import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='error'>
            <ul>
                <Link to='/' className='btn-primary' style={{marginTop:40}}>Go to Home</Link>
            </ul>
            <img src="https://i.im.ge/2021/08/18/PsoSz.png" alt=""/>
        </div>
    )
}

export default Error
