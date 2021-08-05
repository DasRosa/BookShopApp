import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='header'>
                <h1>Book Shop</h1>
                <ul>
                    <Link to='/' className='link' style={{top:15, right:150}}>Home</Link>
                    <Link to='/about' className='link' style={{top:15, right:50}}>About</Link>
                </ul>
            </div>
            {/* <div className='bar'>
                <p>Features/ Genres</p>
            </div> */}
        </div>
        
    )
}

export default Navbar
