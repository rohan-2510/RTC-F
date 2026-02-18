import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section id="home"><Home /></section>
          <section id="schedule" className="py-16 bg-light"><Schedule /></section>
          <section id="gallery"><Gallery /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
