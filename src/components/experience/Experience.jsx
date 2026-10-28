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
                <small className="text-light">Intermediate</small>
              </div>
            </article>


<article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Intermediate</small>
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
                <h4>Supabase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        {/* DATA, TOOLS & SECURITY */}
        <div className="experience__data">
          <h2>Data, Tools &amp; Security</h2>

          <div className="experience__content experience__content--wide">

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Automation & ETL</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>MariaDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>SQL ETL & Reporting</h4>
                <small className="text-light">Strong</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Version control</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Fundamentals</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Windows / Ubuntu</h4>
                <small className="text-light">Daily use</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Active Directory & Windows Server</h4>
                <small className="text-light">Fundamentals</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>TCP/IP, DNS & Ports</h4>
                <small className="text-light">Fundamentals</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>SIEM & Log Analysis</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;