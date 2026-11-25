import React from "react";
import "./career.css";
import { BsBriefcaseFill, BsFillBookFill, BsLightningChargeFill } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";

const CV_PATH = "/assets/aistudio/Shah_Istiak_Shanto_8ec15529.pdf";

const Career = () => {
  const { t } = useLanguage();

  return (
    <section id="career">
      <h5>{t.career.eyebrow}</h5>
      <h2>{t.career.heading}</h2>

      <div className="container career__container">
        <div className="career__timeline">
          <h3 className="career__heading">
            <BsBriefcaseFill aria-hidden="true" /> {t.career.workHeading}
          </h3>

          {t.career.jobs.map((job) => (
            <article className="career__job" key={job.title}>
              <div className="career__job-head">
                <h4>{job.title}</h4>
                <span className="text-light">
                  {job.company} | {job.period}
                </span>
              </div>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="career__side">
          <div className="career__box">
            <h3 className="career__heading">
              <BsFillBookFill aria-hidden="true" /> {t.career.educationHeading}
            </h3>
            {t.career.educationList.map((edu) => (
              <article className="career__edu" key={edu.title}>
                <h4>{edu.title}</h4>
                <p className="text-light">{edu.school}</p>
                <small>{edu.period}</small>
              </article>
            ))}
          </div>

          <div className="career__box">
            <h3 className="career__heading">
              <BsLightningChargeFill aria-hidden="true" /> {t.career.quickHeading}
            </h3>
            <p className="text-light">{t.career.quickNote}</p>
            <div className="career__actions">
              <a href={CV_PATH} download="Shah_Istiak_Shanto.pdf" className="btn btn-primary">
                {t.career.downloadCv}
              </a>
              <a href="#contact" className="btn">
                {t.career.scheduleContact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
