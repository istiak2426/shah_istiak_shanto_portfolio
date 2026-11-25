import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiDownload, FiShield } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import './securityLabs.css';

const CV_PATH = '/assets/aistudio/Shah_Istiak_Shanto_8ec15529.pdf';

const SecurityLabs = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedId, setExpandedId] = useState('detection');

  const filteredLabs =
    activeFilter === 'all'
      ? t.securityLabs.labs
      : t.securityLabs.labs.filter((lab) => lab.domain === activeFilter);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="security-labs" aria-label={t.securityLabs.heading}>
      <h5>{t.securityLabs.eyebrow}</h5>
      <h2>{t.securityLabs.heading}</h2>

      <div className="container">
        <div className="sec-labs__toolbar">
          <p className="sec-labs__note">
            <FiShield aria-hidden="true" />
            <span>{t.securityLabs.note}</span>
          </p>

          <div
            className="sec-labs__filters"
            role="group"
            aria-label={t.securityLabs.filterLabel}
          >
            {t.securityLabs.filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`sec-labs__filter-btn ${
                  activeFilter === filter.key ? 'is-active' : ''
                }`}
                onClick={() => setActiveFilter(filter.key)}
                aria-pressed={activeFilter === filter.key}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="sec-labs__grid">
          {filteredLabs.map((lab) => {
            const isOpen = expandedId === lab.id;
            return (
              <article className="sec-labs__card" key={lab.id}>
                <div className="sec-labs__card-top">
                  <span className="sec-labs__index">{lab.index}</span>
                  <p className="sec-labs__meta">{lab.focus}</p>
                </div>

                <h3>{lab.title}</h3>
                <p className="sec-labs__desc">{lab.description}</p>

                {isOpen && (
                  <div className="sec-labs__details">
                    <div className="sec-labs__detail-row">
                      <span className="sec-labs__detail-label">
                        {t.securityLabs.objectiveLabel}
                      </span>
                      <p>{lab.objective}</p>
                    </div>
                    <div className="sec-labs__detail-row">
                      <span className="sec-labs__detail-label">
                        {t.securityLabs.workflowLabel}
                      </span>
                      <p>{lab.workflow}</p>
                    </div>
                    <div className="sec-labs__detail-row">
                      <span className="sec-labs__detail-label">
                        {t.securityLabs.toolsLabel}
                      </span>
                      <p>{lab.tools}</p>
                    </div>
                  </div>
                )}

                <div className="sec-labs__card-foot">
                  <button
                    type="button"
                    className="sec-labs__toggle"
                    onClick={() => toggleExpand(lab.id)}
                    aria-expanded={isOpen}
                  >
                    <span>
                      {isOpen
                        ? t.securityLabs.hideDetails
                        : t.securityLabs.viewDetails}
                    </span>
                    {isOpen ? (
                      <FiChevronUp aria-hidden="true" />
                    ) : (
                      <FiChevronDown aria-hidden="true" />
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="sec-labs__summary-bar">
          <div className="sec-labs__readiness">
            <span className="sec-labs__detail-label">
              {t.securityLabs.readinessLabel}
            </span>
            <p>{t.securityLabs.readinessText}</p>
          </div>
          <div className="sec-labs__actions">
            <a
              href={CV_PATH}
              download="Shah_Istiak_Shanto.pdf"
              className="btn"
            >
              <FiDownload aria-hidden="true" />
              <span>{t.hero.ctaCv}</span>
            </a>
            <a href="#contact" className="btn btn-primary">
              {t.securityLabs.ctaTalk}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityLabs;
