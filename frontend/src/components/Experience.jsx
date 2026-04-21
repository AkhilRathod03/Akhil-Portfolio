import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 'ibm',
      company: 'IBM Skills Build',
      role: 'AI & ML Intern',
      duration: 'Dec 2025 – Jan 2026',
      location: 'Remote',
      points: [
        'Developed Smart Fit AI — full-stack AI health recommendation web app using Python & Streamlit',
        'Designed ML recommendation algorithm for diet & workout plans',
        'Built real-time interactive dashboard for fitness tracking'
      ],
      tech: ['Python', 'Streamlit', 'ML', 'REST API'],
      color: 'var(--accent-cyan)'
    },
    {
      id: 'pinnacle',
      company: 'Pinnacle Labs',
      role: 'Python Development Intern',
      duration: 'Sep 2025 – Oct 2025',
      location: 'Remote',
      points: [
        'Built ecommerce platform, calendar reminder & quiz app',
        'Data handling with Pandas, NumPy',
        'Optimised DB queries → 30% faster'
      ],
      tech: ['Python', 'MySQL', 'Pandas', 'NumPy'],
      color: 'var(--accent-violet)'
    },
    {
      id: 'oasis',
      company: 'Oasis Info byte',
      role: 'Web Development & Designing Intern',
      duration: 'Jul 2025 – Aug 2025',
      location: 'Remote',
      points: [
        'Built 3 responsive web projects',
        'Mobile-first HTML/CSS/JS UIs',
        'Applied UI/UX design principles'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      color: 'var(--accent-pink)'
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
