import React from "react";
import "./header.css";
import CTA from "./CTA"
import ME from '../../assets/me.jpg'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hi there, I'm</h3>
        <h1>Shah Istiak Shanto</h1>
        <h3 className="text-light">Junior Software Engineer</h3>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
