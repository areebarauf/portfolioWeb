import React, { useState } from 'react';
import '../NavBar/navbar.css';
import logo from '../../assets/new_logo.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/contact.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false) ;
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className="desktopMenu">
            <Link activeClass= "active" to="intro" spy={true} smooth = {true} offset ={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass= "active" to="skills" spy={true} smooth = {true} offset ={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass= "active" to="works" spy={true} smooth = {true} offset ={-60} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass= "active" to="company" spy={true} smooth = {true} offset ={-70} duration={500} className="desktopMenuListItem">Experience</Link>
        </div>
        <button className="desktopMenuBtn" offset={-100} onClick={() =>
          {
            document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
            const contactSection = document.getElementById('contact');
            const yOffset = -90; // Adjust the offset as needed
            const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }>
            <img src={ContactImg} alt="" className="desktopMenuImg"/>Contact Me</button>

            <img src={menu} alt='Menu' className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex' :  'none'}}>
            <Link activeClass= "active" to="intro" spy={true} smooth = {true} offset ={-100} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Home</Link>
            <Link activeClass= "active" to="skills" spy={true} smooth = {true} offset ={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>About</Link>
            <Link activeClass= "active" to="works" spy={true} smooth = {true} offset ={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Portfolio</Link>
            <Link activeClass= "active" to="company" spy={true} smooth = {true} offset ={-70} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Experience</Link>
            <Link activeClass= "active" to="contact" spy={true} smooth = {true} offset ={-70} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar