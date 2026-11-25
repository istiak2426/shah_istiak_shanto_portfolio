import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const CV_PATH = "/assets/aistudio/Shah_Istiak_Shanto_8ec15529.pdf";

const CTA = () => {
  const { t } = useLanguage();

  return (
    <div className="cta">
      <a href="#security-labs" className="btn btn-primary">
        {t.hero.ctaProjects}
      </a>
      <a
        href={CV_PATH}
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
