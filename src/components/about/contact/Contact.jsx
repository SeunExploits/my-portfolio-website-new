import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1l669jk', 'template_4m9xck2', form.current, 'sHQq1h0Djmh9FxeH5')

    e.target.reset();
   
  };
  return (
    <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact Me</h2>
    
    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
        <MdOutlineMail className='contact_option-icons' />
        <h4>Email</h4>
        <h5>Seun7674@gmail.com</h5>
        <a href='mailto:seun7674@gmail.com' target='_blank'>Send a message</a>
        </article>
        <article className='contact_option'>
        <RiMessengerLine className='contact_option-icons' />
        <h4>Messenger</h4>
        <h5>Oluwaseun Ajayi</h5>
        <a href='https://m.me/profile.php?id=100080669033565' target='_blank'>Send a message</a>
        </article>
        <article className='contact_option'>
        <RiWhatsappLine className='contact_option-icons' />
        <h4>WhatsApp</h4>
        <h5>+2348164602907</h5>
        <a href='https://api.whatsapp.com/send?phone=+2348164602907' target='_blank'>Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
      <input type='text' name='name' placeholder='Your full Name' required />
      <input type='email' name='email' placeholder='Your Email' required />
      <textarea name='message' id='' cols={30} rows='7' placeholder='Your message' required ></textarea>
      <button type='submit'className='btn btn-primary'>Send Message</button>


      </form>
    </div>
    </section>
  )
}

export default Contact