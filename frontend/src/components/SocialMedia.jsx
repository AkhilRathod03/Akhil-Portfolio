import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaYoutube, FaLinkedin, FaUsers, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  return (
    <section id="social" className="py-0" style={{ marginBottom: '10px' }}>
      <Container>
        <div className="d-flex align-items-center mb-5" data-aos="fade-right">
            <h2 className="section-title mb-0" style={{ textAlign: 'left' }}>Social Media</h2>
            <div className="ms-4 flex-grow-1" style={{ height: '1px', background: 'linear-gradient(90deg, var(--accent-cyan), transparent)' }}></div>
        </div>
        
        <Row className="g-4">
          {/* YouTube Card */}
          <Col lg={6} md={12} data-aos="fade-up">
            <motion.div 
              whileHover={{ y: -5 }}
              className="project-card h-100 p-4 p-md-5 position-relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.05) 0%, rgba(18, 18, 30, 0.9) 100%)',
                borderRadius: '30px'
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                <div className="social-icon-wrapper text-center">
                  <FaYoutube size={80} color="#FF0000" />
                </div>
                <div className="flex-grow-1 text-center text-md-start">
                  <h3 className="text-white fw-bold mb-1">YouTube</h3>
                  <h5 className="text-info mb-3">@akhil_rathod03</h5>
                  <p className="text-white-50 small mb-4" style={{ lineHeight: '1.5' }}>
                    Sharing my journey in tech, coding tutorials, and project walkthroughs.
                  </p>
                  <a 
                    href="https://www.youtube.com/@akhil_rathod03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glow-btn d-inline-flex align-items-center gap-2 social-btn-yt"
                    style={{ background: '#FF0000', borderColor: '#FF0000', color: '#fff', borderRadius: '50px' }}
                  >
                    Subscribe <FaArrowRight size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* LinkedIn Card */}
          <Col lg={6} md={12} data-aos="fade-up" data-aos-delay="100">
            <motion.div 
              whileHover={{ y: -5 }}
              className="project-card h-100 p-4 p-md-5 position-relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, rgba(0, 119, 181, 0.05) 0%, rgba(18, 18, 30, 0.9) 100%)',
                borderRadius: '30px'
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                <div className="social-icon-wrapper text-center">
                  <FaLinkedin size={80} color="#0077B5" />
                </div>
                <div className="flex-grow-1 text-center text-md-start">
                  <h3 className="text-white fw-bold mb-1">LinkedIn</h3>
                  <h5 className="text-info mb-3">Akhil Kumar</h5>
                  <p className="text-white-50 small mb-4" style={{ lineHeight: '1.5' }}>
                    Let's connect! I share updates about my latest projects, internships, and tech insights.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/akhilkumar-p" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glow-btn d-inline-flex align-items-center gap-2 social-btn-li"
                    style={{ background: '#0077B5', borderColor: '#0077B5', color: '#fff', borderRadius: '50px' }}
                  >
                    Connect <FaArrowRight size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <style>
        {`
          .social-btn-yt:hover {
            background: #cc0000 !important;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.4) !important;
            transform: scale(1.05);
          }
          .social-btn-li:hover {
            background: #005582 !important;
            box-shadow: 0 0 20px rgba(0, 119, 181, 0.4) !important;
            transform: scale(1.05);
          }
        `}
      </style>
    </section>
  );
};

export default SocialMedia;
