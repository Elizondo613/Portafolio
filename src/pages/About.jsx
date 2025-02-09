import '../styles/About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
    return (
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">{t('About.about')}</h2>
          <div className="about-content">
            <div className="about-text">
              <p>{t('About.description')}</p>
              <div className="skills">
                <h3>{t('About.technology')}</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">Vite</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">Tailwind CSS</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">PHP</span>
                  <span className="skill-tag">Firebase</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default About;