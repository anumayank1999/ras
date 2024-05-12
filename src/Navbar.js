import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';


const Navbar = () => {

  const[isOpen,setIsOpen]=useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open)
  };

  return (
    <div className='nav'>
      <div className='brand'><Link to='/'>Anumayank</Link></div>
      <div className='toggle' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      <div className={`navbckgnd ${isOpen ? "is-open" : ""}`}>
        <div className='links'><Link to='/'>Home</Link> </div>
        <div className='links'><Link to='/form'>Form</Link> </div>
        <div className='links'><Link to='/about'>About Project</Link> </div>
        <div className='links'><Link to='/contact'>Contact Us</Link> </div>
        <div className='links'><Link to='/download'>Downloads</Link> </div>
        <div className='links'><Link to='/Upcoming'>More</Link> </div>
        <div className='links'><Link to='/404'>Others</Link> </div></div>
    </div>
  )
}

export default Navbar
