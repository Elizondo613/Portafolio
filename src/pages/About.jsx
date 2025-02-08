import '../styles/About.css';

const About = () => {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">Sobre mí</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Soy un desarrollador web apasionado por crear experiencias digitales impactantes. 
                Me especializo en React, HTML, Tailwind CSS y JavaScript, construyendo desde landing pages 
                hasta aplicaciones web complejas full-stack (MERN).
              </p>
              <div className="skills">
                <h3>Tecnologías</h3>
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