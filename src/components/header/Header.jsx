import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <div className="header__content">
          <h3>Hi there, I'm</h3>
          <h1>Shah Istiak Shanto</h1>
          <h3 className="text-light">Full Stack Developer</h3>

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