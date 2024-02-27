import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'

import {IoLogoTwitter} from 'react-icons/io'
import { BsLinkedin} from 'react-icons/bs'
import { BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
	<footer>

   <a href='#top' className='footer__logo'>Shah Istiak Shanto</a>
    <ul className='permalinks'>
      <li><a href='#top'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>

    </ul>

    <div className='footer__socials'>
    <a href="https://www.facebook.com/istiak2426" target='_blank' rel="noopener noreferrer">
      <FaFacebookF/>
      </a>
      <a href="https://www.linkedin.com/in/istiak2426" target='_blank' rel="noopener noreferrer">
      <BsLinkedin />
      </a>
      <a href="https://github.com/istiak2426" target='_blank'  rel="noopener noreferrer">
      <BsGithub/>
      </a>
      <a href='https://twitter.com/Istiaksikder' target='_blank' rel="noopener noreferrer">
      <IoLogoTwitter />
      </a>

     
    </div>

    <div className='footer__copyright'>
      <small>&copy; Shah Istiak Shanto. All rights reserved. </small>

    </div>

  </footer> 
  )
}

export default Footer