import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-4" style={{ 
      background: 'rgba(10, 10, 15, 0.9)',
      borderTop: '1px solid rgba(0, 212, 255, 0.1)', 
      boxShadow: '0 -20px 50px rgba(0, 0, 0, 0.5)',
      position: 'relative',
      zIndex: 10
    }}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
              <div className="logo-box small" style={{ width: '35px', height: '35px', fontSize: '0.9rem' }}>AK</div>
              <h4 className="gradient-text fw-bold mb-0" style={{ letterSpacing: '1px', fontSize: '1.2rem' }}>AKHIL KUMAR</h4>
            </div>
            <p className="text-white-50 small mb-0" style={{ opacity: 0.6 }}>
              Crafting intelligent solutions with code.
            </p>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <div className="d-flex justify-content-center gap-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-decoration-none small footer-link"
                  style={{ color: 'rgba(255, 255, 255, 0.5)', transition: '0.3s' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </Col>
          
          <Col md={4} className="text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-4 mb-3">
              <motion.a 
                whileHover={{ y: -3, color: '#fff', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' }} 
                href="https://github.com/AkhilRathod03" target="_blank" 
                className="transition-all fs-5"
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, color: '#0077B5', filter: 'drop-shadow(0 0 8px rgba(0,119,181,0.5))' }} 
                href="https://www.linkedin.com/in/akhilmegavath" target="_blank" 
                className="transition-all fs-5"
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, color: '#FF0000', filter: 'drop-shadow(0 0 8px rgba(255,0,0,0.5))' }} 
                href="https://www.youtube.com/@akhil_rathod03" target="_blank" 
                className="transition-all fs-5"
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                <FaYoutube />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, color: '#FF0000', filter: 'drop-shadow(0 0 8px rgba(255,0,0,0.5))' }} 
                href="mailto:akhil.megavath03@gmail.com" 
                className="transition-all fs-5"
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
            <p className="text-white-50 small mb-0" style={{ fontSize: '0.85rem', opacity: 0.6 }}>
              © 2025 Akhil Kumar. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
      <style>
        {`
          .footer-link:hover {
            color: var(--accent-cyan) !important;
            text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
