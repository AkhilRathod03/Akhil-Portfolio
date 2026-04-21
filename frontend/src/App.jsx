import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      outline.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleHover = (e) => {
      if (e.target.closest('a, button, .project-card, .logo-box')) {
        outline.classList.add('cursor-hover');
      } else {
        outline.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div className="App">
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <SocialMedia />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
