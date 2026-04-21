import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaYoutube, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const YouTube = () => {
  return (
    <section id="youtube" style={{ background: 'var(--bg-secondary)' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12} data-aos="flip-up">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="project-card p-5 position-relative overflow-hidden"
              style={{ background: 'linear-gradient(45deg, #12121E 0%, #3a0d0d 100%)' }}
            >
              <Row className="align-items-center">
                <Col md={3} className="text-center mb-4 mb-md-0">
                  <FaYoutube size={100} color="#FF0000" />
                </Col>
                <Col md={6}>
                  <h2 className="fw-bold mb-3">My YouTube Channel</h2>
                  <h4 className="text-info mb-3">@akhil_rathod03</h4>
                  <p className="text-secondary mb-4">
                    Sharing my journey in tech, coding tutorials, project walkthroughs, and developer tips. Join me as I explore the world of AI and Web Development!
                  </p>
                  <div className="d-flex align-items-center gap-2 text-muted">
                    <FaUsers /> <span>Growing Community</span>
                  </div>
                </Col>
                <Col md={3} className="text-center">
                  <a 
                    href="https://www.youtube.com/@akhil_rathod03" 
                    target="_blank" 
                    className="glow-btn"
                    style={{ background: '#FF0000', borderColor: '#FF0000', color: '#fff' }}
                  >
                    🎬 Visit Channel →
                  </a>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default YouTube;
