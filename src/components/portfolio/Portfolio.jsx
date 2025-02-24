import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
 {
  id: 1,
  Image: IMG1,
  title: 'A Responsive Real Estate Website built using React, Tailwind-Css, Web3-forms and Framer-Motion',
  github: 'https://github.com/SeunExploits/Exploits-Real-Estate',
  demo: 'https://real-estate-seven-gold.vercel.app/'
 },

 {
  id: 2,
  Image: IMG2,
  title: 'Charts Template & infographics in figma',
  github: 'https://github.com',
  demo: 'https://github.com'
 },
 
 {
  id: 3,
  Image: IMG3,
  title: 'Blockchain architecture & services',
  github: 'https://github.com',
  demo: 'https://github.com'
 },
 
  {
  id: 4,
  Image: IMG4,
  title: 'Tech Awareness & innovations',
  github: 'https://github.com',
  demo: 'https://github.com'
 }, 
 
 {
  id: 5,
  Image: IMG5,
  title: 'Crypto Empowerment & Structures',
  github: 'https://github.com',
  demo: 'https://github.com'
 }, 
 
 {
  id: 6,
  Image: IMG6,
  title: 'Financial implementations & services',
  github: 'https://github.com',
  demo: 'https://github.com'
 },

]



const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio_container'>
   {
    data.map (({id, Image, title, github, demo})=> {
      return (
        <article key= {id} className='portfolio_item'>
    <div className='portfolio_item-image'>
    <img src={Image} alt={title} />
    </div>
    <h3> {title} </h3>
    <div className='portfolio_item-cta'>
    <a href={github} className='btn' target='_blank'> Github</a> 
    <a href= {demo} className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
    </article>
      )
    })
  }   
    </div>
    </section>
  )
}

export default Portfolio