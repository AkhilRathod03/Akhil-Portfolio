import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaChevronDown } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import axios from 'axios';
import photo from '../assets/photo.jpeg';

const Hero = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const fetchVisitors = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/api/visitors/`);
        setVisitorCount(response.data.count);
      } catch (error) {
        console.error("Error fetching visitor count", error);
      }
    };
    fetchVisitors();
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#00D4FF" },
      links: { color: "#00D4FF", distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section id="home" className="hero-section">
      {init && <Particles id="tsparticles" options={particlesOptions} />}
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={12}>
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="d-flex align-items-center mb-3">
                <span className="badge rounded-pill border border-success text-success px-3 py-2">
                  <span className="pulsing-dot mr-2"></span> Available for opportunities
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-2 text-bright">
                Hi, I'm <br />
                <span className="gradient-text">Megavath Akhil Kumar</span>
              </h1>
              <div className="h4 mb-4 fw-bold" style={{ color: '#F5F5F5' }}>
                <TypeAnimation
                  sequence={[
                    'Python Developer 🐍', 2000,
                    'AI/ML Enthusiast 🤖', 2000,
                    'Full Stack Developer 💻', 2000,
                    'Problem Solver 🧩', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="text-secondary-bright mb-4 fw-medium" style={{ maxWidth: '550px', fontSize: '1.1rem' }}>
                Crafting intelligent, scalable, and beautiful software solutions from Hyderabad, India 🇮🇳
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-4">
                <a href="#projects" className="glow-btn">View My Work →</a>
                <a href="/Akhil_P.pdf" download className="glow-btn">Download Resume ↓</a>
              </div>

              <div className="social-icons d-flex gap-4 mb-4">
                {[
                  { icon: FaGithub, link: 'https://github.com/AkhilRathod03', color: '#fff' },
                  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/akhilmegavath', color: '#0077B5' },
                  { icon: FaYoutube, link: 'https://www.youtube.com/@akhil_rathod03', color: '#FF0000' },
                  { icon: MdEmail, link: 'mailto:akhil.megavath03@gmail.com', color: '#EA4335' }
                ].map((item, index) => (
                  <motion.a 
                    key={index} 
                    href={item.link} 
                    target="_blank"
                    whileHover={{ scale: 1.15, color: item.color }}
                    style={{ fontSize: '1.8rem', color: '#E0E0FF', transition: '0.3s' }}
                  >
                    <item.icon />
                  </motion.a>
                ))}
              </div>
              
              <div className="visitor-badge text-muted-bright">
                <span className="p-2 rounded" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(0,212,255,0.2)' }}>
                  👁 {visitorCount} people visited this portfolio
                </span>
              </div>
            </motion.div>
          </Col>
          <Col lg={5} md={12} className="mt-5 mt-lg-0">
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hero-photo-container"
            >
              <div className="hero-border-rotate"></div>
              <img src={photo} alt="Akhil Kumar" className="hero-photo" />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div className="scroll-indicator w-100 text-center position-absolute bottom-0 mb-4">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <FaChevronDown style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
