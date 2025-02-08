import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portafolio from './pages/Portafolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Home />
        <About />
        <Portafolio />
        <Contact />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default App;