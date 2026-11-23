import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { useLanguage } from '../../context/LanguageContext'
import { formatBengaliYear } from '../../i18n/translations'

const Footer = () => {
  const { lang, setLang, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const rawYears = currentYear > 2026 ? `2026–${currentYear}` : '2026';
  const copyrightYears = lang === 'bn' ? formatBengaliYear(rawYears) : rawYears;

  return (
    <footer>
      <a href='#top' className='footer__logo'>{t.brand}</a>

      <ul className='permalinks'>
        <li><a href='#top'>{t.footer.home}</a></li>
        <li><a href='#portfolio'>{t.footer.projects}</a></li>
        <li><a href='#career'>{t.footer.experience}</a></li>
        <li><a href='#experience'>{t.footer.stack}</a></li>
        <li><a href='#testimonials'>{t.footer.testimonials}</a></li>
        <li><a href='#about'>{t.footer.about}</a></li>
        <li><a href='#contact'>{t.footer.contact}</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/istiak2426" target='_blank' rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/istiak2426" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
          <BsLinkedin />
        </a>
        <a href="https://github.com/istiak2426" target='_blank' rel="noopener noreferrer" aria-label="GitHub">
          <BsGithub />
        </a>
        <a href='https://twitter.com/Istiaksikder' target='_blank' rel="noopener noreferrer" aria-label="Twitter">
          <IoLogoTwitter />
        </a>
      </div>

      <div className='footer__lang'>
        <div className='lang-toggle lang-toggle--footer' role='group' aria-label='Language switcher'>
          <button
            type='button'
            className={`lang-toggle__btn ${lang === 'en' ? 'is-active' : ''}`}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
          <button
            type='button'
            className={`lang-toggle__btn ${lang === 'bn' ? 'is-active' : ''}`}
            onClick={() => setLang('bn')}
            aria-pressed={lang === 'bn'}
          >
            বাংলা
          </button>
        </div>
      </div>

      <div className='footer__copyright'>
        <small>&copy; {copyrightYears} {t.footer.rights}</small>
      </div>
    </footer>
  )
}

export default Footer