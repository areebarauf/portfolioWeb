import React from 'react';
import '../NavBar/navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/contact.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">Experience</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={ContactImg} alt="" className="desktopMenuImg"/>Contact Me</button>
    </nav>
  )
}

export default Navbar