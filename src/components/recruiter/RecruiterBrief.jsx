import React, { useState } from 'react';
import { FiCheck, FiCopy, FiDownload } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import './recruiterBrief.css';

const CV_PATH = '/assets/aistudio/Shah_Istiak_Shanto_8ec15529.pdf';
const EMAIL = 'istiak2426@gmail.com';
const PHONE = '+8801748008483';

const RecruiterBrief = () => {
  const { t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      setCopiedKey(null);
    }
  };

  return (
    <section id="hiring-summary" aria-label={t.hrBrief.heading}>
      <h5>{t.hrBrief.eyebrow}</h5>
      <h2>{t.hrBrief.heading}</h2>

      <div className="container">
        <div className="hr-brief__grid">
          {t.hrBrief.pillars.map((pillar) => (
            <article className="hr-brief__card" key={pillar.title}>
              <span className="hr-brief__index">{pillar.index}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>

        <div className="hr-brief__bar">
          <div className="hr-brief__meta">
            <div>
              <span className="hr-brief__label">{t.hrBrief.targetLabel}</span>
              <p>{t.hrBrief.targetRoles}</p>
            </div>
            <div>
              <span className="hr-brief__label">{t.hrBrief.availabilityLabel}</span>
              <p>{t.hrBrief.availability}</p>
            </div>
          </div>

          <div className="hr-brief__actions">
            <a
              href={CV_PATH}
              download="Shah_Istiak_Shanto.pdf"
              className="btn btn-primary"
            >
              <FiDownload aria-hidden="true" />
              <span>{t.hero.ctaCv}</span>
            </a>

            <button
              type="button"
              className="btn"
              onClick={() => handleCopy('email', EMAIL)}
            >
              {copiedKey === 'email' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              <span>{copiedKey === 'email' ? t.hrBrief.copied : t.hrBrief.copyEmail}</span>
            </button>

            <button
              type="button"
              className="btn"
              onClick={() => handleCopy('phone', PHONE)}
            >
              {copiedKey === 'phone' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              <span>{copiedKey === 'phone' ? t.hrBrief.copied : t.hrBrief.copyPhone}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterBrief;
