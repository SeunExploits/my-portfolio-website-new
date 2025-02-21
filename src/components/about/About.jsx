import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolder5Fill} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
<h5>Welcome to </h5>
    <h2>My Profile</h2>

    <div className='container about_container'>
      <div className='about_me'>
        <div className='about_me-image'>
        <img src={ME} alt='About Image' />
      </div>
      </div>
    

    <div className='about_content'>
    <div className='about_cards'>
      <article className='about_card'>
      <FaAward className='about_icon' />
      <h5>Experience</h5>
      <small>3+ Years working</small>
      </article>

      <article className='about_card'>
      <FiUsers className='about_icon' />
      <h5>Clients</h5>
      <small>100+ Worldwide</small>
      </article>

      <article className='about_card'>
      <RiFolder5Fill className='about_icon' />
      <h5>Projects</h5>
      <small>80+ Completed Projects</small>
      </article>
      </div>
      <p>
      Ajayi Oluwaseun is a passionate and optimistic young man with creativity skills and high level of Excellence mindset.
      </p>

      <a href='#contact' className='btn btn-primary'> Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About