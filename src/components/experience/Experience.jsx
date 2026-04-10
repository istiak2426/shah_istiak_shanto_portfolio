import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Technologies I work with</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        {/* FRONTEND */}
        <div className="experience__frontend">
          <h2>Frontend Development</h2>

          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>JavaScript (ES6+)</h4>
                <small className="text-light">Strong</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          </div>
        </div>

        {/* BACKEND */}
        <div className="experience__backend">
          <h2>Backend Development</h2>

          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>C# / .NET</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>ASP.NET Web Forms</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Strong</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;