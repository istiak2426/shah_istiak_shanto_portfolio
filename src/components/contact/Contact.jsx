import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { FiCheck, FiCopy } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import { useLanguage } from '../../context/LanguageContext';
import './contact.css';

// EmailJS keys are public by design; override them with REACT_APP_* variables if you rotate them.
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_lopsga8';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_w43r2d2';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '8x41zdVbVzczGcclL';

const EMAIL = 'istiak2426@gmail.com';
const PHONE = '+8801748008483';

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [copiedField, setCopiedField] = useState(null);

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 5000);
  };

  const handleCopy = async (field, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage({ text: '', type: '' });

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      showMessage(t.contact.successMsg, 'success');
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      showMessage(t.contact.errorMsg, 'error');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id='contact'>
      <h5>{t.contact.eyebrow}</h5>
      <h2>{t.contact.heading}</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' aria-hidden="true" />
            <h4>{t.contact.emailLabel}</h4>
            <h5>{EMAIL}</h5>
            <div className="contact__option-actions">
              <a href={`mailto:${EMAIL}`} target='_blank' rel='noreferrer'>{t.contact.sendAction}</a>
              <button
                type="button"
                className="contact__copy-btn"
                onClick={() => handleCopy('email', EMAIL)}
              >
                {copiedField === 'email' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                <span>{copiedField === 'email' ? t.contact.copiedAction : t.contact.copyAction}</span>
              </button>
            </div>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' aria-hidden="true" />
            <h4>{t.contact.messengerLabel}</h4>
            <h5>istiak2426</h5>
            <div className="contact__option-actions">
              <a href="https://m.me/istiak2426" target='_blank' rel='noreferrer'>{t.contact.sendAction}</a>
            </div>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' aria-hidden="true" />
            <h4>{t.contact.whatsappLabel}</h4>
            <h5>{PHONE}</h5>
            <div className="contact__option-actions">
              <a href="https://wa.me/8801748008483" target='_blank' rel='noreferrer'>{t.contact.sendAction}</a>
              <button
                type="button"
                className="contact__copy-btn"
                onClick={() => handleCopy('phone', PHONE)}
              >
                {copiedField === 'phone' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                <span>{copiedField === 'phone' ? t.contact.copiedAction : t.contact.copyAction}</span>
              </button>
            </div>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder={t.contact.namePlaceholder}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder={t.contact.emailPlaceholder}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t.contact.messagePlaceholder}
            required
          ></textarea>

          {message.text && (
            <div className={`form-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <button type='submit' className='btn btn-primary' disabled={isSending}>
            {isSending ? t.contact.submitBusy : t.contact.submitIdle}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
