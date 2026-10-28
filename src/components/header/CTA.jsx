import React from "react";
import SOC_CV from "../../assets/Shah_Istiak_Shanto_SOC_Analyst_CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={SOC_CV}
        download="Shah_Istiak_Shanto_SOC_Analyst_CV.pdf"
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;