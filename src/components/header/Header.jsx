import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.webp";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__content">
          <h3>Hi there, I'm</h3>
          <h1>
            Shah Istiak <strong>Shanto</strong>
          </h1>
          <h3 className="header__role">Software Engineer</h3>
          <p className="header__tagline text-light">
            .NET &amp; JavaScript · ERP &amp; Digital Publishing · SQL &amp; Data
            Automation
          </p>

          <CTA />
        </div>

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Shah Istiak Shanto" loading="lazy" />
        </div>

        <a href="#about" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;