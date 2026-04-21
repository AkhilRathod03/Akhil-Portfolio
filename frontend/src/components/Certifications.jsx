import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { SiIbm, SiOracle, SiQualcomm, SiAccenture, SiFreecodecamp, SiCisco } from 'react-icons/si';

const Certifications = () => {
  const certs = [
    {
      name: 'AI Fundamentals',
      org: 'IBM',
      icon: <SiIbm size={35} color="#052FAD" />,
      desc: 'Mastered foundational AI concepts, including machine learning workflows, neural networks, and NLP basics.',
      year: '2025',
      color: 'rgba(5, 47, 173, 0.2)'
    },
    {
      name: 'OCI AI Foundations',
      org: 'Oracle',
      icon: <SiOracle size={35} color="#F80000" />,
      desc: 'Expertise in Oracle Cloud Infrastructure AI services and practical implementation of ML models on cloud.',
      year: '2025',
      color: 'rgba(248, 0, 0, 0.2)'
    },
    {
      name: 'Data Science Fundamentals',
      org: 'Cisco Networking Academy',
      icon: <SiCisco size={35} color="#049FD9" />,
      desc: 'Comprehensive exploration of data science principles, data collection, processing, and interpretation using statistical models.',
      year: '2025',
      color: 'rgba(4, 159, 217, 0.2)'
    },
    {
      name: 'AI Upskilling',
      org: 'Qualcomm',
      icon: <SiQualcomm size={35} color="#3253DC" />,
      desc: 'Specialized in Edge AI and on-device machine learning techniques using Qualcomm technology stacks.',
      year: '2025',
      color: 'rgba(50, 83, 220, 0.2)'
    },
    {
      name: 'Software Engineering',
      org: 'Accenture',
      icon: <SiAccenture size={35} color="#A100FF" />,
      desc: 'Focused on agile methodologies, high-quality code standards, and modern SDLC best practices.',
      year: '2025',
      color: 'rgba(161, 0, 255, 0.2)'
    },
    {
      name: 'Responsive Web Design',
      org: 'freeCodeCamp',
      icon: <SiFreecodecamp size={35} color="#fff" />,
      desc: 'Advanced mastery of HTML5, CSS3, Flexbox, and Grid for building highly accessible web interfaces.',
      year: '2025',
      color: 'rgba(0, 100, 0, 0.2)'
    }
  ];

  return (
    <section id="certifications" className="pt-0" style={{ paddingBottom: '80px' }}>
      <style>
        {`
          .cert-grid {
            padding: 0;
          }
          .cert-item {
            perspective: 1000px;
            height: 220px;
          }
          .cert-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
            cursor: pointer;
          }
          .cert-item:hover .cert-inner {
            transform: rotateY(180deg);
          }
          .cert-side {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(20, 20, 35, 0.6);
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          }
          .cert-back {
            transform: rotateY(180deg);
            background: linear-gradient(135deg, rgba(30, 30, 50, 0.9) 0%, rgba(10, 10, 20, 1) 100%);
          }
          .cert-glow {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border-radius: 20px;
            z-index: -1;
            opacity: 0;
            transition: 0.5s;
            filter: blur(15px);
          }
          .cert-item:hover .cert-glow {
            opacity: 0.6;
          }
        `}
      </style>
      <Container className="pt-0">
        <h2 className="section-title mt-0" style={{ marginTop: '-40px !important' }} data-aos="fade-up">Professional Certifications</h2>
        <p className="section-subtitle" data-aos="fade-up">Validated expertise across industry leaders</p>

        <Row className="g-4 justify-content-center cert-grid">
          {certs.map((cert, idx) => (
            <Col key={idx} lg={4} md={6} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="cert-item">
                <div className="cert-glow" style={{ background: cert.color }}></div>
                <div className="cert-inner">
                  <div className="cert-side cert-front">
                    <div className="mb-3 p-3 rounded-circle" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      {cert.icon}
                    </div>
                    <h5 className="text-white fw-bold mb-1" style={{ fontSize: '1.1rem' }}>{cert.name}</h5>
                    <div className="text-info fw-medium small mb-2">{cert.org}</div>
                    <div className="badge rounded-pill border border-info text-white px-3 py-2" style={{ fontSize: '0.7rem', background: 'rgba(0, 212, 255, 0.1)' }}>
                      Issued: {cert.year}
                    </div>
                  </div>
                  <div className="cert-side cert-back">
                    <h6 className="text-info fw-bold mb-3">Verification Details</h6>
                    <p className="text-white-50 small px-2" style={{ lineHeight: '1.5' }}>
                      {cert.desc}
                    </p>
                    <div className="mt-2 text-white small fw-bold">
                      <span className="pulse-icon me-2"></span>
                      CREDENTIAL VERIFIED
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;
