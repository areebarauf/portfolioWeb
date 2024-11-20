import React from 'react';
import './intro.css';
import bg from '../../assets/new-pic-green.png'
import { Link , animateScroll as scroll} from 'react-scroll';
import btnimg from '../../assets/hireme.png'


const Intro = () => {
  function downloadPdfAndScroll() {
    // Trigger the PDF download
    const pdfUrl = '/Areeba_Rauf_Resume.pdf'; // Replace with your actual file path
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Areeba-Rauf-CV.pdf'; // Optional: specify a download filename
    link.click();
  
    // Scroll to the Contact Me section
    scroll.scrollTo('contact', {
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
    });
  }
  return (
    <section id="intro">
        <div class="introContent">
            <span class="hello">Hello,</span>
            <span class="introText">I'm <span class="introName">Areeba</span><br/>Software/Data Engineer</span>
            <p class="introPara">I'm a skilled Software Engineer in creating softwares, APIs and experience  with implementing <br/>DataLake with AWS S3.</p>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
        <button
          className="btn"
          activeClass="active"
          onClick={downloadPdfAndScroll}
        >
          <img src={btnimg} alt="Hire Me" className="btnImg" />
          Hire Me
        </button>
      </Link>
        </div>
        <img src={bg} alt="Profile" class="bg"/>
    </section>
  )
}

export default Intro 