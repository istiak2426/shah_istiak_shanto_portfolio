import React from "react";
import "./career.css";
import { BsBriefcaseFill, BsFillBookFill, BsShieldCheck } from "react-icons/bs";

const jobs = [
  {
    title: "Enterprise Application Executive",
    company: "Prothom Alo",
    period: "Mar 2024 – Present",
    points: [
      "Provide technical support and troubleshooting for enterprise and business-critical applications used by internal teams.",
      "Manage application access and user permissions, including access-related investigation and issue resolution.",
      "Build and maintain SQL-based reports and data-processing workflows to support operational and business reporting.",
      "Automate recurring data transformation tasks with Python and optimize SQL queries for reporting performance.",
      "Validate data, investigate production issues, and coordinate with infrastructure and business teams to restore reliable service.",
      "Document issues and communicate technical findings to relevant stakeholders.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "bdnews24.com",
    period: "Jun 2022 – Feb 2024",
    points: [
      "Developed and maintained features for a high-traffic digital news platform and its editorial tools.",
      "Investigated production issues, analysed application and database behaviour, and supported timely resolution.",
      "Optimized database queries and integrated REST APIs for editorial workflows.",
      "Collaborated with cross-functional teams to deliver reliable application changes.",
    ],
  },
  {
    title: "IT Intern",
    company: "Walton Digi-Tech Industries Ltd.",
    period: "Jan 2022 – Jun 2022",
    points: [
      "Supported deployment and troubleshooting of enterprise software on more than 400,000 tablets for the Jonoshumari 2022 project.",
      "Helped resolve installation and performance issues and supported stable operation across deployed devices.",
    ],
  },
];

const education = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    school: "Bangladesh University of Business & Technology (BUBT)",
    meta: "2015 – 2019 | CGPA: 2.95/4.00",
  },
  {
    title: "Higher Secondary Certificate",
    school: "Bangladesh Navy College, Dhaka",
    meta: "2012 – 2014 | GPA: 4.80/5.00",
  },
  {
    title: "Secondary School Certificate",
    school: "Monipur School & College, Dhaka",
    meta: "2002 – 2011 | GPA: 4.69/5.00",
  },
];

const Career = () => {
  return (
    <section id="career">
      <h5>Where I have worked</h5>
      <h2>Career &amp; Education</h2>

      <div className="container career__container">
        <div className="career__timeline">
          <h3 className="career__heading">
            <BsBriefcaseFill /> Professional Experience
          </h3>

          {jobs.map((job) => (
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
              <BsFillBookFill /> Education
            </h3>
            {education.map((e) => (
              <article className="career__edu" key={e.title}>
                <h4>{e.title}</h4>
                <p className="text-light">{e.school}</p>
                <small>{e.meta}</small>
              </article>
            ))}
          </div>

          <div className="career__box">
            <h3 className="career__heading">
              <BsShieldCheck /> Cybersecurity Development
            </h3>
            <p className="text-light">
              Currently developing practical skills through self-study and hands-on labs in SIEM/log analysis,
              Windows security events, incident triage, threat intelligence, and vulnerability management. No
              cybersecurity certification claimed at this time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
