import React from "react";
import ME from "../../assets/about_me_3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import './about.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
        <img src={ME} alt="About " />
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>5+ Years Hands-on</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Current Role</h5>
            <small>Prothom Alo</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Education</h5>
            <small>B.Sc. CSE, BUBT</small>
          </article>
        </div>

        <p>Software professional with 5+ years of hands-on experience in .NET and JavaScript development, ERP systems, and digital publishing platforms. I currently work as an Enterprise Application Executive at Prothom Alo, building SQL-based reporting and ETL workflows, automating data tasks with Python, and supporting business-critical applications. Team player with an eye for detail.</p>

        <p>I am also building hands-on skills in security log analysis, SIEM workflows, incident triage and threat intelligence, with the goal of moving into a SOC Analyst role.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  );
};

export default About;
