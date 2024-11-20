import React, { useRef } from 'react';
import './contact.css';
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

    // Form validation
    const name = form.current['from_name'].value.trim();
    const email = form.current['from_email'].value.trim();
    const message = form.current['message'].value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

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
        }
      );
  };

  return (
    <section id="contactPage">
      <div className="company">
        <h1 className="contactPageTitle">Companies I've Worked For</h1>
        <p className="companyDesc">
          I have had the opportunity to work for a diverse group of firms as a software developer. 
          Some of the notable companies I have worked with include:
        </p>
        <div className="companyImgs">
          <img src={bankAlflahlogo} alt="Bank Alfalah" className="companyImg" />
          <img src={eonlogo} alt="E.ON Digital Technology" className="companyImg" />
          <img src={siemenslogo} alt="Siemens" className="companyImg" />
        </div>
      </div>
      <div className="contact" id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea name="message" rows="5" placeholder="Your Message" className="msg"></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/areeba-rauf-6917a6118/" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} alt="LinkedIn" className="link" />
            </a>
            <a href="https://leetcode.com/u/areebarauf/" target="_blank" rel="noopener noreferrer">
              <img src={leetcode} alt="LeetCode" className="link" />
            </a>
            <a href="https://github.com/areebarauf" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="Github" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
