import '../styles/Home.css';

const Home = () => {
    return (
      <section id="home" className="home-section">
        <div className="home-content">
          <h1 className="title">
            <span className="greeting">¡Hola! soy</span>
            <span className="name">Javier Elizondo</span>
          </h1>
          <p className="subtitle">Desarrollador web especializado en landing pages y proyectos full-stack.</p>
          <div className="cta-buttons">
            <a href="#portfolio" className="btn btn-primary">Ver Proyectos</a>
            <a href="#contact" className="btn btn-secondary">Contactar</a>
          </div>
        </div>
        <div className="home-background">
          <div className="gradient-circle"></div>
          <div className="gradient-circle-2"></div>
        </div>
      </section>
    );
  };

export default Home;