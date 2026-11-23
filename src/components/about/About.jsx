import React from "react";
import ME from "../../assets/about_me_3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useLanguage } from "../../context/LanguageContext";
import './about.css'

const icons = [FaAward, FiUsers, VscFolderLibrary];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about">
      <h5>{t.about.eyebrow}</h5>
      <h2>{t.about.heading}</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt={t.about.imageAlt} referrerPolicy="no-referrer" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            {t.about.cards.map((card, index) => {
              const Icon = icons[index] || FaAward;
              return (
                <article className="about__card" key={card.title}>
                  <Icon className="about__icon" aria-hidden="true" />
                  <h5>{card.title}</h5>
                  <small>{card.value}</small>
                </article>
              );
            })}
          </div>

          <p>{t.about.summary}</p>

          <a href="#contact" className="btn btn-primary">{t.about.cta}</a>
        </div>
      </div>
    </section>
  );
};

export default About;
