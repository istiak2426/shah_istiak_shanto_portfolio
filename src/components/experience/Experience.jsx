import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience">
      <h5>{t.experience.eyebrow}</h5>
      <h2>{t.experience.heading}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h2>{t.experience.frontendTitle}</h2>
          <div className="experience__content">
            {t.experience.frontendStack.map((tech) => (
              <article className="experience__details" key={tech}>
                <BsPatchCheckFill className="experience_details_icon" aria-hidden="true" />
                <div>
                  <h4>{tech}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h2>{t.experience.backendTitle}</h2>
          <div className="experience__content">
            {t.experience.backendStack.map((tech) => (
              <article className="experience__details" key={tech}>
                <BsPatchCheckFill className="experience_details_icon" aria-hidden="true" />
                <div>
                  <h4>{tech}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;