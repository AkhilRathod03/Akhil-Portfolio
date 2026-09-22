import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 'euroasiann',
      company: 'Euroasiann Marine Spares',
      role: 'Software Developer Intern',
      duration: 'June 2026 – Present',
      location: 'Hyderabad (On-site)',
      points: [
        'Building features & React UI enhancements on a live, multi-portal maritime procurement ERP platform',
        'Executing functional, regression, and UAT testing across Vendor, Customer, Admin, and Port Agent portals',
        'Identified and documented 26+ functional and workflow issues during Vendor Portal testing cycles',
        'Validated WebSocket-based live chat, real-time notifications, and AI-assisted Vendor Onboarding modules',
        'Hands-on exposure to Git PR workflows, merge conflict resolution, Docker, and deployment troubleshooting'
      ],
      tech: ['React.js', 'WebSockets', 'REST API', 'Git', 'Docker', 'UAT/Regression Testing'],
      color: 'var(--accent-cyan)'
    },
    {
      id: 'synycs',
      company: 'Synycs',
      role: 'Software Developer Intern',
      duration: 'Software Internship',
      location: 'Remote',
      points: [
        'Designed & built Centralized Curriculum Management System (CCMS), a full-stack multi-tenant platform with RBAC',
        'Integrated Gemini API for prompt-driven automated curriculum generation, reducing manual content entry',
        'Implemented JWT auth, FullCalendar conflict detection, and Recharts analytics dashboards deployed on Vercel, Render, Supabase'
      ],
      tech: ['React.js', 'Django REST', 'Gemini API', 'PostgreSQL', 'JWT', 'Vercel'],
      color: 'var(--accent-pink)'
    },
    {
      id: 'ibm',
      company: 'IBM Skills Build',
      role: 'AI & ML Intern',
      duration: 'Dec 2025 – Jan 2026',
      location: 'Remote',
      points: [
        'Developed SmartFit AI — full-stack AI health recommendation web app using Python & Streamlit',
        'Designed ML recommendation algorithm for diet & workout plans using BMR calculations',
        'Built real-time interactive dashboard for fitness tracking across 2,000+ food records'
      ],
      tech: ['Python', 'Streamlit', 'ML', 'Pandas', 'REST API'],
      color: 'var(--accent-violet)'
    },
    {
      id: 'pinnacle',
      company: 'Pinnacle Labs',
      role: 'Python Development Intern',
      duration: 'Sep 2025 – Oct 2025',
      location: 'Remote',
      points: [
        'Built backend modules for e-commerce platform, calendar reminder & quiz app',
        'Applied REST API standards and data processing with Pandas and NumPy',
        'Optimized DB queries resulting in 30% performance improvement'
      ],
      tech: ['Python', 'MySQL', 'Pandas', 'NumPy', 'REST API'],
      color: '#00D4FF'
    },
    {
      id: 'oasis',
      company: 'Oasis Info byte',
      role: 'Web Development & Designing Intern',
      duration: 'Jul 2025 – Aug 2025',
      location: 'Remote',
      points: [
        'Built 3 responsive web applications with interactive user interfaces',
        'Developed mobile-first HTML/CSS/JS UIs with clean architecture',
        'Applied modern UI/UX design principles and accessibility standards'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      color: '#7B2FFF'
    }
  ];

  const [activeExp, setActiveExp] = useState(experiences[0]);

  return (
    <section id="experience" className="pt-0">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Professional Journey</h2>
        <p className="section-subtitle" data-aos="fade-up">Where I've honed my skills</p>

        <div className="experience-dashboard" data-aos="fade-up">
          <Row className="align-items-center">
            <Col lg={4} md={5} className="mb-4 mb-md-0">
              <div className="exp-sidebar">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExp(exp)}
                    className={`exp-tab-btn ${activeExp.id === exp.id ? 'active' : ''}`}
                    style={{ '--btn-accent': exp.color }}
                  >
                    <span className="tab-indicator" style={{ background: exp.color }}></span>
                    <div className="d-flex flex-column align-items-start text-start w-100">
                      <div className="fw-bold">{exp.company}</div>
                      <div className={`fw-medium mt-1 ${activeExp.id === exp.id ? 'text-dark' : 'text-muted-bright'}`} style={{ fontSize: '0.85rem' }}>
                        {exp.duration}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Col>
            
            <Col lg={8} md={7}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="exp-detail-card p-4 p-md-5"
                >
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <h3 className="text-info fw-bold mb-1">{activeExp.role}</h3>
                      <h5 className="text-bright">@ {activeExp.company}</h5>
                    </div>
                    <div className="text-end">
                      <p className="text-muted-bright small mb-0">📍 {activeExp.location}</p>
                    </div>
                  </div>

                  <ul className="experience-list mb-4 ps-0">
                    {activeExp.points.map((p, i) => (
                      <li key={i} className="text-secondary-bright mb-3 d-flex align-items-start">
                        <span className="me-2 text-info">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex flex-wrap gap-2 mt-auto">
                    {activeExp.tech.map((t, i) => (
                      <span key={i} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
