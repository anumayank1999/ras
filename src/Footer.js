import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

const Footer = () => {
    
    const [val, setVal] = useState(0);
    
    const myEmail = 'anumayank1999@gmail.com';
    const handleClick = () => {
        const subject = encodeURIComponent('Subject of the email');
        const body = encodeURIComponent('Body of the email');
        window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
      };

    
    const toggle = () => {
        alert('No: +919968366989');
      };
    
    

  return (
    <div className='back'>
      <div className='visit'>Thankyou for Visiting this Page.
      <br/>Feel Free to connect on anumayank1999@gmail.com
      <br/>Looking Forward for your Feedback</div><br/>
      <div className='stylee'>
      <div className='font'><ExternalLink href="https://www.instagram.com/anumayank1999/?igsh=MWp6cTg0aG1lMTIxcA%3D%3D" ><FontAwesomeIcon icon={faInstagram} size={'2xl'}/></ExternalLink></div>
      <div className='font' onClick={handleClick}><FontAwesomeIcon icon={faMailBulk} size={'2xl'}/></div>
      <div className='font'><ExternalLink href="https://www.linkedin.com/in/anumayank-522511176/?originalSubdomain=in" ><FontAwesomeIcon icon={faLinkedinIn} size={'2xl'}/></ExternalLink></div>
      <div className='font'><ExternalLink href="https://github.com/anumayank1999" ><FontAwesomeIcon icon={faGithub} size={'2xl'}/></ExternalLink></div>
      <div className='font' onClick={toggle}><FontAwesomeIcon icon={faPhone} size={'2xl'}/></div>
    
      </div>

    </div>
  )
}

export default Footer
