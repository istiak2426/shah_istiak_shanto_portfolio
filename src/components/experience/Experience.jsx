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
        {t.experience.groups.map((group) => (
          <article className="experience__card" key={group.title}>
            <div className="experience__card-head">
              <BsPatchCheckFill className="experience_details_icon" aria-hidden="true" />
              <h3>
                <span className="experience__card-index">{group.index}</span> {group.title}
              </h3>
            </div>
            <p className="experience__card-items">{group.items}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;