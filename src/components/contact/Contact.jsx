import React from 'react'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';

import emailjs from 'emailjs-com';


import './contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lopsga8', 'template_w43r2d2', form.current, '8x41zdVbVzczGcclL')

    e.target.reset();
 
  };


  return (
	<section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>istiak2426@gmail.com</h5>
          <a href='mailto:istiak2426@gmail.com' target="__blank">Send an e-mail</a>
        </article>

        <article className='contact__option'>
      <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>istiak2426</h5>
          <a href='https://m.me/istiak2426' target="__blank">Send a message</a>
        </article>

        <article className='contact__option'>
         <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+8801748008483</h5>
          <a href="https://api.whatsapp.com/send?phone=8801748008483" target="__blank">Send a message</a>
        </article>
      </div>

      {/* END of contact option */}

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact