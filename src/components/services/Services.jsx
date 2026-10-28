import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Can Do</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* Frontend */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop responsive and user-friendly web interfaces using React and modern JavaScript.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert UI/UX designs into clean, reusable, and maintainable components.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure cross-browser compatibility and mobile responsiveness.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimize frontend performance for speed and better user experience.</p>
            </li>

          </ul>
        </article>

        {/* Backend (.NET Focus) */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development (.NET & Databases)</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service__list-icon" />
              <p>Build and maintain backend systems using C# and ASP.NET (Web Forms).</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and manage relational databases using SQL Server and MySQL.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Create efficient database queries, stored procedures, and data models.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop backend logic for enterprise systems like HRIS and IT Help Desk.</p>
            </li>

          </ul>
        </article>

        {/* Full Stack Support (MERN + Integration) */}
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Development</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop full-stack applications using MERN stack (React, Node.js, MongoDB).</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrate frontend with backend APIs for seamless data flow.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Handle authentication, authorization, and basic security practices.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploy and maintain web applications with real-world functionality.</p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;