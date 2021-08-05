import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <img src="https://media.istockphoto.com/vectors/telescope-searching-404-banner-vector-id655281432?b=1&k=6&m=655281432&s=170667a&w=0&h=ykOvnJPfTLlo0XzpXEkomD9R5vYsTIMiAPgemkikFKo=" alt=""/>
            <ul>
                <Link to='/' className='btn'>Go to Home</Link>
            </ul>
        </div>
    )
}

export default Error
