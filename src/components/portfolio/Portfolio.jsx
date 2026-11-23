import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMaximize2, FiX } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import './portfolio.css';

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeProjectId, setActiveProjectId] = useState(null);

  const activeProject =
    activeProjectId !== null
      ? t.portfolio.items.find((item) => item.id === activeProjectId) || null
      : null;

  useEffect(() => {
    if (activeProjectId === null) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProjectId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectId]);

  return (
    <section id="portfolio">
      <h5>{t.portfolio.eyebrow}</h5>
      <h2>{t.portfolio.heading}</h2>

      <div className="container portfolio__container">
        {t.portfolio.items.map((project) => (
          <article key={project.id} className="portfolio__item">
            <button
              type="button"
              className="portfolio__item-image"
              onClick={() => setActiveProjectId(project.id)}
              aria-label={`${t.portfolio.preview}: ${project.title}`}
            >
              <img
                src={project.images}
                alt={project.title}
                referrerPolicy="no-referrer"
              />
              <span className="portfolio__item-zoom" aria-hidden="true">
                <FiMaximize2 />
                <span>{t.portfolio.preview}</span>
              </span>
            </button>

            <p className="portfolio__item-meta">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="portfolio__item-summary">{project.summary}</p>

            <div className="portfolio__item-cta">
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.portfolio.liveDemo} <FiArrowUpRight aria-hidden="true" />
              </a>
              {project.github && (
                <a
                  href={project.github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.portfolio.github}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {activeProject && (
        <div
          className="portfolio__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          onClick={() => setActiveProjectId(null)}
        >
          <div
            className="portfolio__lightbox-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="portfolio__lightbox-head">
              <div>
                <p className="portfolio__item-meta">{activeProject.category}</p>
                <h3>{activeProject.title}</h3>
              </div>
              <button
                type="button"
                className="portfolio__lightbox-close"
                onClick={() => setActiveProjectId(null)}
                aria-label={t.portfolio.closePreview}
              >
                <FiX />
              </button>
            </div>

            <div className="portfolio__lightbox-media">
              <img
                src={activeProject.images}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="portfolio__lightbox-foot">
              <p className="portfolio__item-summary">{activeProject.summary}</p>
              <div className="portfolio__item-cta">
                <a
                  href={activeProject.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.portfolio.liveDemo} <FiArrowUpRight aria-hidden="true" />
                </a>
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.portfolio.github}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
