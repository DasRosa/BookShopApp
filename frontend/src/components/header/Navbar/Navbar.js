import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FaBars, FaFacebook, FaTwitter, FaInstagramSquare, FaPinterest } from 'react-icons/fa';
import './Navbar.css'
import { axios } from '../../../axios'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [curUser, setCurUser] = useState()

    const getCurUser = async () => {
      const res = await axios.get('/api/v1/user')
      if (res && res.data) {
        console.log(res.data)
        setCurUser(res.data.username)
      }
      else (
          setCurUser('')
      )
    } 

    useEffect(() => {
        getCurUser()
    }) 

    const logOut = async () => {
        await axios.get('/api/v1/authentication/logout')
        setCurUser('')
    }

    const logInOrLogOut = () => {
        if (curUser) {
            return (
              <Link to='/'>
                <button onClick={logOut}>Logout</button>
              </Link>
            )
        }
        else {
            return (
              <Link to='/login'>
                <button>LogIn</button>
              </Link>
            )
        }
    }

    return (
      // <nav>
      //     <div className='nav-center'>
      //         <div className='header'>
      //             <h1>Book Shop</h1>
      //             <ul>
      //                 <Link to='/' className='link' style={{top:15, right:150}}>Home</Link>
      //                 <Link to='/about' className='link' style={{top:15, right:50}}>About</Link>
      //             </ul>
      //             <button className='nav-toggle' onClick={()=> setShowLinks(!showLinks)}>
      //                 <FaBars />
      //             </button>
      //         </div>
      //         <div className='bar'>
      //             <ul>
      //                 <Link to='/' className='link' style={{top:5, left:50}}>Home</Link>
      //                 <Link to='/products' className='link' style={{top:5, left:250}}>Products</Link>
      //                 <Link to='/about' className='link' style={{top:5, left:450}}>About</Link>
      //             </ul>
      //         </div>
      //         {showLinks && (
      //             <div className={`${showLinks?'links-container show-container': 'links-container'}`}>
      //                 <ul>
      //                     <Link to='/' className='links'>Home</Link>
      //                     <Link to='/products' className='links'>Products</Link>
      //                     <Link to='/about' className='links'>About</Link>
      //                 </ul>
      //             </div>
      //         )}

      //         <ul className='social-icons'>
      //             <li>
      //                 <a href="https://www.facebook.com/"><FaFacebook /></a>
      //                 <a href="https://twitter.com/"><FaTwitter /></a>
      //                 <a href="https://www.instagram.com/"><FaInstagramSquare /></a>
      //                 <a href="https://www.pinterest.com/"><FaPinterest /></a>
      //             </li>
      //         </ul>
      //     </div>
      // </nav>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <h2>Book Shop</h2>
            <button
              className='nav-toggle'
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={`${
              showLinks ? 'links-container show-container' : 'links-container'
            }`}
          >
            <ul className='links'>
              <li>
                <a href='/'>home</a>
              </li>
              <li>
                <a href='/about'>about</a>
              </li>
              <li>
                <a href='/products'>products</a>
              </li>
            </ul>
          </div>
          <div>{curUser || 'No Login'}</div>
          <div>{logInOrLogOut()}</div>
          <div>
            <Link to='/cart'>
              <button>Cart</button>
            </Link>
          </div>
          <ul className='social-icons'>
            <li>
              <a href='https://www.facebook.com/'>
                <FaFacebook />
              </a>
              <a href='https://twitter.com/'>
                <FaTwitter />
              </a>
              <a href='https://www.instagram.com/'>
                <FaInstagramSquare />
              </a>
              <a href='https://www.pinterest.com/'>
                <FaPinterest />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
