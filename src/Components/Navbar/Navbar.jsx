import React, { useState } from 'react'
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';
import './Navbar.css'

const Navbar = () => {
  const [active , setActive] = useState('navBar')
  // function toggleNavbar to show NavBar
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  // function toggleNavbar to close NavBar
  const closeNav = () => {
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className="logoDiv">
          <a href='#' className='logo flex'>
            <h1><SiYourtraveldottv className='icon'/>Travel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className='btn'>
              <a href='#'>Book Now</a>
            </button>
          </ul>

          <div className="closeNavbar" onClick={closeNav}>
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div className="toggleNavbar" onClick={showNav}>
          <PiDotsNineBold className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar