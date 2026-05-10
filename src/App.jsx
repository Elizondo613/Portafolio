import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Portafolio from './pages/Portafolio';
import Contact from './pages/Contact';
import Games from './pages/Games';
import Templates from './pages/Templates';
// import PersonalProjects from './pages/PersonalProjects';

const App = () => {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portafolio />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/templates" element={<Templates />} />
          {/* <Route path="/projects" element={<PersonalProjects />} /> */}
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default App;