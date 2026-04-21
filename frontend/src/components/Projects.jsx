import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const featuredProjects = [
    {
      title: 'Smart Fit AI',
      subtitle: 'Personalized Workout & Diet Planner',
      desc: 'An intelligent full-stack AI app that delivers personalized health recs. Users input fitness goals → ML backend generates custom diet & workout plans.',
      tech: ['Python', 'Streamlit', 'ML', 'Pandas', 'REST API'],
      category: 'AI/ML',
      link: 'https://github.com/AkhilRathod03/SmartFit-AI-Planner',
      demo: 'https://smartfit-ai-planner.streamlit.app/',
      featured: true
    },
    {
      title: 'Big Basket Clone',
      subtitle: 'E-Commerce Frontend Architecture',
      desc: 'A high-performance e-commerce platform clone built with React and Redux. Features complex state management for cart operations, dynamic product filtering, and a fully responsive shopping experience.',
      tech: ['React.js', 'Redux', 'Bootstrap', 'REST API', 'Vercel'],
      category: 'Web',
      link: 'https://github.com/AkhilRathod03/Bigbasket_React_Project.git',
      demo: 'https://bigbasket-react-project.vercel.app',
      featured: true
    }
  ];

  const collegeProjects = [
    {
      title: 'Web Vulnerability Detection',
      desc: 'Cybersecurity tool detecting CSRF vulnerabilities. ML model analyses web traffic patterns.',
      tech: ['Python', 'Flask', 'ML', 'HTML', 'CSS'],
      category: 'Cybersecurity',
      link: 'https://github.com/AkhilRathod03'
    },
    {
      title: 'Suspicious Activity Detection',
      desc: 'Real-time deep learning surveillance system detecting abnormal human activity with 85% accuracy.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      category: 'Deep Learning',
      link: 'https://github.com/AkhilRathod03'
    }
  ];

  const utilityProjects = [
    {
      title: 'Temperature Converter',
      desc: 'Clean responsive utility web app converting Celsius, Fahrenheit, Kelvin instantly.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Web',
      link: 'https://github.com/AkhilRathod03/OIBSIP_domain_taskno-1'
    },
    {
      title: 'E-Commerce Backend',
      desc: 'Full-featured Python backend system with MySQL optimization (30% gain).',
      tech: ['Python', 'MySQL', 'Pandas', 'REST APIs'],
      category: 'Backend',
      link: 'https://github.com/AkhilRathod03/Pinnacle_Python1'
    },
    {
      title: 'Quiz Application',
      desc: 'Interactive quiz platform with scoring system and dynamic question loading.',
      tech: ['Python', 'MySQL', 'Pandas'],
      category: 'Backend',
      link: 'https://github.com/AkhilRathod03'
    }
  ];

  const ProjectCard = ({ project, idx, isHalfWidth }) => (
    <Col lg={isHalfWidth ? 6 : 4} md={6} className="mb-4">
      <motion.div
        layout
        className="h-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2000} className="h-100">
          <div className={`cinematic-card h-100 ${project.featured ? 'featured-spotlight' : ''}`}>
            <div className="card-content-wrapper h-100 d-flex flex-column px-4 pt-4 px-md-5 pt-md-5" style={{ paddingBottom: 'calc(1.5rem + 20px)' }}>
              <h3 className="project-headline gradient-text">{project.title}</h3>
              {project.subtitle && <h5 className="fw-bold mb-4" style={{ color: '#E0E0E0', opacity: 0.9 }}>{project.subtitle}</h5>}
              <p className="project-description mb-4">{project.desc}</p>
              
              <div className="d-flex flex-wrap gap-2 mb-5">
                {project.tech.map(t => (
                  <span key={t} className="tech-tag-crystal">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="project-actions d-flex gap-2 gap-md-3 flex-nowrap mt-auto">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="action-link cyan" style={{ whiteSpace: 'nowrap', fontSize: '0.9rem' }}>
                  <FaGithub /> View Source
                </a>
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-link pink" style={{ whiteSpace: 'nowrap', fontSize: '0.9rem' }}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : (
                  <span className="action-link pink" style={{ cursor: 'not-allowed', opacity: 0.6, whiteSpace: 'nowrap', fontSize: '0.9rem' }}>
                    <FaExternalLinkAlt /> Demo soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </Col>
  );

  return (
    <section id="projects" className="pt-0" style={{ paddingBottom: '10px' }}>
      <Container>
        <h2 className="section-title" data-aos="fade-up">Portfolio Showcase</h2>
        <p className="section-subtitle" data-aos="fade-up">A gallery of my technical innovations</p>

        {/* Featured Masterpieces */}
        <div className="mb-5 mt-5">
          <h4 className="gradient-text fw-bold mb-4 fs-3" data-aos="fade-right">💎 FEATURED MASTERPIECES</h4>
          <Row className="g-5">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} isHalfWidth={true} />
            ))}
          </Row>
        </div>

        {/* Academic Innovations */}
        <div className="mb-5 mt-5">
          <h4 className="gradient-text fw-bold mb-4 fs-3" data-aos="fade-right">🎓 ACADEMIC INNOVATIONS (COLLEGE)</h4>
          <Row className="g-5">
            {collegeProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} isHalfWidth={true} />
            ))}
          </Row>
        </div>

        {/* Technical Utilities */}
        <div className="mb-5 mt-5">
          <h4 className="gradient-text fw-bold mb-4 fs-3" data-aos="fade-right">🛠️ TECHNICAL UTILITIES & BACKENDS</h4>
          <Row className="g-5">
            {utilityProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} isHalfWidth={false} />
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
