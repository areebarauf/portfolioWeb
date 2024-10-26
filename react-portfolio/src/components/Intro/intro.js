import React from 'react';
import './intro.css';
import bg from '../../assets/areeba-image.png'
import { Link } from 'react-scroll';
import btnimg from '../../assets/hireme.png'


const Intro = () => {
  return (
    <section id="intro">
        <div class="introContent">
            <span class="hello">Hello,</span>
            <span class="introText">I'm <span class="introName">Areeba</span><br/>Software/Data Engineer</span>
            <p class="introPara">I'm a skilled Software Engineer in creating softwares, APIs and experience  with implementing <br/>DataLake with AWS S3.</p>
            <Link><button class="btn"><img src={btnimg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" class="bg"/>
    </section>
  )
}

export default Intro 