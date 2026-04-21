import React, { useState, useEffect } from 'react';
import { Navbar as BootNavbar, Nav, Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <BootNavbar 
      expand="lg" 
      fixed="top" 
      variant="dark"
      expanded={expanded}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{ boxShadow: scrolled ? '0 0 20px rgba(0,212,255,0.1)' : 'none' }}
    >
      <Container>
        <BootNavbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <div className="logo-box">
            AK
          </div>
          <span className="fw-bold fs-4 gradient-text d-none d-sm-block" style={{ letterSpacing: '0.5px' }}>
            AKHIL KUMAR
          </span>
        </BootNavbar.Brand>
        <BootNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        <BootNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link) => (
              <Nav.Link 
                key={link.name} 
                href={link.href}
                onClick={() => setExpanded(false)}
              >
                {link.name}
              </Nav.Link>
            ))}
            <a 
              href="/Akhil_P.pdf" 
              target="_blank" 
              className="glow-btn ms-lg-3 mt-3 mt-lg-0 d-flex align-items-center gap-2"
            >
              <HiDownload /> Resume
            </a>
          </Nav>
        </BootNavbar.Collapse>
      </Container>
    </BootNavbar>
  );
};

export default Navbar;
