import React , { useRef }from 'react'
import './contact.css'
import bankAlflahlogo from '../../assets/Alfalah-logo.png';
import siemenslogo from '../../assets/Siemens-Logo.png';
import eonlogo from '../../assets/logo-e-on.png';
import linkedIn from '../../assets/linkedin-logo.png';
import Github from '../../assets/github.png';
import leetcode from '../../assets/leetcode.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_20e6eaj', 'template_uwkxxrk', form.current, {
        publicKey: 'j0QBw5I4771t6Amf-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email Sent');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div class="company">
            <h1 class="contactPageTitle">Companies I've Worked For</h1>
            <p class="companyDesc">I have had the oppurtunity to work for diverse group of firms as a sofware developer. 
                Some of the notable comapnied I have worked with includes,</p>
            <p/>
            <div class="companyImgs">
                <img src={bankAlflahlogo} alt="Bank Alfalah" class="companyImg"/>
                <img src={eonlogo} alt="E.ON Digital Technology" class="companyImg"/>
                <img src={siemenslogo} alt="Siemens" class="companyImg"/>
            </div>
        </div>
        <div class="contact" id='contact'>
          <h1 class="contactPageTitle">Contact Me</h1>
          <span class="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
          <form  class="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" class="name" placeholder='Your Name' name= "from_name"/>
            <input type="email" class="email" placeholder='Your Email' name= "from_email"/>
            <textarea name="message" rows="5" placeholder='Your Message' class= "msg" ></textarea>
            <button class="submitBtn" type='submit' value='Send'>Submit</button>
            <div class="links">
              <a href="https://www.linkedin.com/in/areeba-rauf-6917a6118/" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} alt="LinkedIn" class="link" />
              </a>
              <a href="https://leetcode.com/u/areebarauf/" target="_blank" rel="noopener noreferrer">
                <img src={leetcode} alt="LeetCode" class="link" />
              </a>
              <a href="https://github.com/areebarauf" target="_blank" rel="noopener noreferrer">
                  <img src={Github} alt="Github" class="link" />
              </a>

            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact