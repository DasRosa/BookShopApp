import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useGlobalContext } from '../../../context';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import EditProduct from '../../body/EditProduct/EditProduct';

const Navbar = () => {
    const { openSidebar } = useGlobalContext();
    return (
        <main>
            <div className='bar'>
                <button onClick={openSidebar} className='sidebar-toggle'>
                    <FaBars />
                </button>
            </div>
            <Sidebar />
        </main>
        
    )
}

export default Navbar
