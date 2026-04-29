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

  // Initialize EmailJS with your public key (optional but recommended)
  // emailjs.init('8x41zdVbVzczGcclL'); // Uncomment if needed

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage({ text: '', type: '' });

    try {
      const result = await emailjs.sendForm(
        'service_lopsga8',    // Service ID
        'template_w43r2d2',   // Template ID
        form.current,
        '8x41zdVbVzczGcclL'   // Public Key (User ID)
      );
      
      if (result.status === 200) {
        setMessage({ text: '✅ Message sent successfully!', type: 'success' });
        form.current.reset(); // Reset only on success
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setMessage({ 
        text: '❌ Failed to send message. Please try again or use direct contact options.', 
        type: 'error' 
      });
    } finally {
      setIsSending(false);
    }
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
            <a href='mailto:istiak2426@gmail.com' target="_blank" rel="noopener noreferrer">Send an e-mail</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>istiak2426</h5>
            <a href='https://m.me/istiak2426' target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+8801748008483</h5>
            <a href="https://api.whatsapp.com/send?phone=8801748008483" target="_blank" rel="noopener noreferrer">Send a message</a>
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
          
          <button 
            type='submit' 
            className='btn btn-primary'
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
