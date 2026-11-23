import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.webp";
import HeaderSocials from "./HeaderSocials";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero__toolbar">
          <p className="hero__kicker">
            <span>{t.hero.role}</span>
            <span aria-hidden="true">·</span>
            <span>{t.hero.location}</span>
          </p>

          <div className="lang-toggle" role="group" aria-label="Language switcher">
            <button
              type="button"
              className={`lang-toggle__btn ${lang === "en" ? "is-active" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-toggle__btn ${lang === "bn" ? "is-active" : ""}`}
              onClick={() => setLang("bn")}
              aria-pressed={lang === "bn"}
            >
              বাংলা
            </button>
          </div>
        </div>

        <div className="hero__split">
          <div className="hero__copy">
            <h1>{t.hero.name}</h1>

            <p className="hero__lead">{t.hero.lead}</p>

            <CTA />
            <HeaderSocials />
          </div>

          <div className="hero__media">
            <img
              src={ME}
              alt={t.hero.imageAlt}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="hero__metrics" aria-label="Career highlights">
          {t.hero.metrics.map((item) => (
            <div className="hero__metric" key={item.label}>
              <strong className="hero__metric-value">{item.value}</strong>
              <span className="hero__metric-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;