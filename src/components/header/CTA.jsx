import React from "react";
import SOC_CV from "../../assets/Shah_Istiak_Shanto.pdf";
import { useLanguage } from "../../context/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();

  return (
    <div className="cta">
      <a href="#portfolio" className="btn btn-primary">
        {t.hero.ctaProjects}
      </a>
      <a
        href={SOC_CV}
        download="Shah_Istiak_Shanto.pdf"
        className="btn"
      >
        {t.hero.ctaCv}
      </a>
      <a href="#contact" className="btn">
        {t.hero.ctaTalk}
      </a>
    </div>
  );
};

export default CTA;
