import React from 'react'
import './header.css'
import CTA from '../CTA'
import ME from '../../assets/me.png'
import HeaderSocials from '../HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5>Howdy! i'm</h5>
      <h1>A React developer</h1>
      <h5 className='text-light'>Let connect</h5>
      <CTA />
      <HeaderSocials />

      <div className='me'>
        <img src={ME} alt='' />
      </div>


      <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header