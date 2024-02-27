import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Front End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Determining the structure and design of web pages.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Developing features to enhance the user experience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Striking a balance between functional and aesthetic design.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Optimizing web pages for maximum speed and scalability.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Utilizing a variety of markup languages to write web pages.
              </p>
            </li>
          </ul>
        </article>
        {/* End of ui/ux */}

  
        <article className="service">
          <div className="service__head">
            <h3>Backend End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Participate in the entire application lifecycle, focusing on coding and debugging.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Create sustainable and functional web applications with clean codes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Learn about new technologies and stay up to date with current best practices.
              </p>
            </li>
   
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              In-depth understanding of the entire web development process (design, development and deployment)
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Client Support</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Identify client's needs and help client use specific features.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Analyzing and reporting product malfunctions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Responding to client queries in a timely and accurate way, via phone, email or chat.
              </p>
            </li>
      
          
   
          </ul>
        </article>


      </div>
    </section>
  );
};

export default Services;
