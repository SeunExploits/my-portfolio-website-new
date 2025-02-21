import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
    <h5>What i offer</h5>
    <h2>Services</h2>

    <div className='container services_container'>
      <article className='services'>
        <div className='service_head'>
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>

        {/*END OF UI/UX */}

        <article className='services'>
        <div className='service_head'>
          <h3>WEB DEVELOPMENT</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
         
        </ul>
      </article>
        {/*END OF WEB DEVELOPMENT */}

        <article className='services'>
        <div className='service_head'>
          <h3>BLOCKCHAIN SERVICES</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
          </li>
        </ul>
      </article>
       {/*END OF BLOCKCHAIN SERVICES */}
    </div>
    </section>
  )
}

export default Services