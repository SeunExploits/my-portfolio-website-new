import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedAdd} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {
  const {activeNav, setActiveNav} = useState('#')
  return (
    <nav>
    <a href='#' onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href='#about' onClick={() => setActiveNav('#about')}  className= {activeNav === '#' ? 'active' : ''}><AiOutlineUser/></a>
    <a href='#experience' onClick={() => setActiveNav('#experience')}  className= {activeNav === '#' ? 'active' : ''}><BiBookBookmark/></a>
    <a href='#services' onClick={() => setActiveNav('#services')}  className= {activeNav === '#' ? 'active' : ''}><RiServiceLine/></a>
    <a href='#contact' onClick={() => setActiveNav('#contact')}  className= {activeNav === '#' ? 'active' : ''}><BiMessageRoundedAdd/></a>
    </nav>
  )
}

export default Nav