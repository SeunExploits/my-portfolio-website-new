import React from 'react'
import './footer.css'
import {GrFacebookOption} from 'react-icons/gr'
import {SiInstagram} from 'react-icons/si'
import {TbBrandTwitter} from 'react-icons/tb'


const Footer = () => {
  return (
    <footer className='footer'>
      <a href='#'className='footer_logo'>OLUWASEUN</a>
      <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>experience</a></li>
      <li><a href='#services'>services</a></li>
      <li><a href='#portfolio'>portfolio</a></li>
      <li><a href='#testimonials'>testimonials</a></li>
      <li><a href='#contact'>contact</a></li>
   

      </ul>
      <div className='footer_socials'>
        <a href='https://facebook.com'><GrFacebookOption/></a>
        <a href='https://instagram.com'><SiInstagram/></a>
        <a href='https://twitter.com'><TbBrandTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; OLUWASEUN portfolio. all rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer