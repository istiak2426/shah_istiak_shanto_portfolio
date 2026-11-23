import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="hero__socials" aria-label="Social profiles">
      <a
        href="https://www.linkedin.com/in/istiak2426"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin aria-hidden="true" />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/istiak2426"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub aria-hidden="true" />
        <span>GitHub</span>
      </a>
      <a
        href="https://www.facebook.com/istiak2426"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFacebook aria-hidden="true" />
        <span>Facebook</span>
      </a>
    </div>
  );
};

export default HeaderSocials;