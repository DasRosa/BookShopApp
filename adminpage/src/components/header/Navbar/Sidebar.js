import React from 'react'
import { FaTimes, FaHome, FaBook, FaFacebook, FaTwitter, FaInstagramSquare, FaPinterest } from 'react-icons/fa'
import { useGlobalContext } from '../../../context'

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'}`}>
            <div className='sidebar-header'>
                <h2>Bookshop</h2>
                <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
            </div>
            <ul className='links'>
                <li>
                    <a href='/'><FaHome/>Home</a>
                </li>
                <li>
                    <a href='/products'><FaBook/>Products</a>
                </li>
            </ul>
            <ul className='social-icons'>
                <li>
                    <a href="https://www.facebook.com/"><FaFacebook /></a>
                    <a href="https://twitter.com/"><FaTwitter /></a>
                    <a href="https://www.instagram.com/"><FaInstagramSquare /></a>
                    <a href="https://www.pinterest.com/"><FaPinterest /></a>
                </li>
            </ul>

        </aside>
    )
}

export default Sidebar