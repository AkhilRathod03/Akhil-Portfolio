import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="pt-0">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Education</h2>
        
        <Row className="justify-content-center">
          <Col lg={8} md={10} data-aos="zoom-in">
            <div className="project-card p-5 d-flex flex-column flex-md-row align-items-center gap-4" style={{ borderRadius: '30px' }}>
              <div className="edu-icon" style={{ fontSize: '5rem', color: 'var(--accent-cyan)' }}>
                <FaGraduationCap />
              </div>
              <div className="edu-details text-center text-md-start">
                <h3 className="gradient-text mb-2">B.Tech — Computer Science Engineering</h3>
                <h5 className="text-info fw-bold mb-3">Malla Reddy Institute of Technology</h5>
                <p className="text-white mb-1" style={{ opacity: 0.8 }}>📍 Hyderabad, Telangana</p>
                <p className="text-white mb-4" style={{ opacity: 0.7 }}>🗓 2021 – 2025</p>
                <div className="accent-bar mb-3 mx-auto mx-md-0" style={{ width: '50px', height: '3px', background: 'var(--accent-cyan)' }}></div>
                <div className="specialization-box">
                  <p className="fw-bold text-info mb-2">Core Specialization:</p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                    {['Python', 'AI/ML', 'Full Stack', 'Data Structures', 'DBMS', 'Operating Systems', 'Computer Networks'].map(skill => (
                      <span key={skill} className="badge rounded-pill border border-info text-info px-3 py-2" style={{ background: 'rgba(0, 212, 255, 0.05)', fontSize: '0.85rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
