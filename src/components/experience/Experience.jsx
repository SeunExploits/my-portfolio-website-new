import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>My Stacks</h5>
    <h2>My Experience</h2>

    <div className='container experience_container'>
      <div className='experience_frontend'>

                {/* FRONTEND */}       
      <h3>Frontend Development</h3> 
      <div className='experience_content'>
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon' />
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon' />
        <div>
        <h4>CSS</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon' />
        <div>
        <h4>React</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon'/>
        <div>
        <h4>Tailwindcss</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon'/>
        <div>
        <h4>Javascript</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon'/>
        <div>
        <h4>Bootstrap</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
      </div>
            {/* END OF FRONTEND */}

      </div>
      <div className='experience_backend'>

            {/* BACKEND */}
      <h3>Backend Development</h3> 
      <div className='experience_content'>
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon' />
        <div>
        <h4>Node js</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon'/>
        <div>
        <h4>Solidity</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon'/>
        <div>
        <h4>Express </h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon'/>
        <div>
        <h4>Next js</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon'/>
        <div>
        <h4>Mango DB</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        
        <article className='experience_details'>
        <BsFillPatchCheckFill className='experience_details-icon'/>
        <div>
        <h4>My SQL</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
      </div>


        
      </div>
    </div>
    </section>
  )
}

export default Experience