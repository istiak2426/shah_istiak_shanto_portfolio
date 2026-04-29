import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_lopsga8',
      'template_w43r2d2',
      form.current,
      '8x41zdVbVzczGcclL'
    )
    .then((result) => {
      console.log('SUCCESS:', result.text);
      setMessage({ text: '✅ Message sent successfully!', type: 'success' });
      form.current.reset();
    })
    .catch((error) => {
      console.log('FAILED:', error);
      setMessage({ text: '❌ Failed to send message.', type: 'error' });
    })
    .finally(() => {
      setIsSending(false);
    });
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
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>istiak2426</h5>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+8801748008483</h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Your Full Name' required />
          <input type="email" name="user_email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>

          {message.text && (
            <div className={`form-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <button type='submit' disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
