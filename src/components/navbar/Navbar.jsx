import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './navbar.css';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="topbar" aria-label="Primary navigation">
      <div className="container topbar__inner">
        <a href="#top" className="topbar__brand">
          {t.brand}
        </a>

        <div className="topbar__links">
          <a href="#security-labs">{t.nav.labs}</a>
          <a href="#experience">{t.nav.stack}</a>
          <a href="#portfolio">{t.nav.projects}</a>
          <a href="#career">{t.nav.experience}</a>
          <a href="#about">{t.nav.about}</a>
        </div>

        <a href="#contact" className="btn btn-primary topbar__cta">
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
