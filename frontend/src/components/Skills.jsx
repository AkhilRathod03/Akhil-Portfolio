import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, ProgressBar } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const skillsData = {
    languages: [
      { name: 'Python', icon: '🐍', level: 90, color: '#3776AB' },
      { name: 'JavaScript', icon: '📜', level: 75, color: '#F7DF1E' },
      { name: 'HTML5', icon: '🌐', level: 85, color: '#E34F26' },
      { name: 'CSS3', icon: '🎨', level: 85, color: '#1572B6' },
      { name: 'React.js', icon: '⚛️', level: 75, color: '#61DAFB' },
      { name: 'Django', icon: '🎸', level: 70, color: '#092E20' },
      { name: 'Flask', icon: '🌶️', level: 70, color: '#FFFFFF' },
      { name: 'Bootstrap', icon: '🅱️', level: 80, color: '#7952B3' },
      { name: 'Streamlit', icon: '🔴', level: 80, color: '#FF4B4B' },
      { name: 'NumPy', icon: '🔢', level: 80, color: '#013243' },
      { name: 'Pandas', icon: '🐼', level: 80, color: '#150458' },
      { name: 'Scikit-learn', icon: '🤖', level: 70, color: '#F7931E' },
    ],
    tools: [
      { name: 'MySQL', icon: '🐬', level: 75, color: '#4479A1' },
      { name: 'Oracle SQL', icon: '🔴', level: 70, color: '#F80000' },
      { name: 'SQLite3', icon: '💾', level: 75, color: '#003B57' },
      { name: 'Git', icon: '🌿', level: 85, color: '#F05032' },
      { name: 'GitHub', icon: '🐙', level: 85, color: '#181717' },
      { name: 'Power BI', icon: '📊', level: 65, color: '#F2C811' },
      { name: 'VS Code', icon: '💙', level: 90, color: '#007ACC' },
      { name: 'Jupyter', icon: '📓', level: 85, color: '#F37626' },
      { name: 'REST APIs', icon: '🔌', level: 80, color: '#00D4FF' },
    ],
    concepts: [
      'Machine Learning', 'Deep Learning', 'Computer Vision',
      'OOP & Design Patterns', 'Data Structures & Algorithms',
      'REST API Development', 'SDLC', 'Agile Methodology',
      'Debugging & Troubleshooting', 'Version Control'
    ]
  };

  return (
    <section id="skills" className="bg-secondary-custom pt-0" style={{ background: 'var(--bg-secondary)' }}>
      <style>
        {`
          .glow-btn {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 212, 255, 0.3);
            color: #fff !important;
            transition: all 0.3s ease;
            border-radius: 50px !important;
          }
          .glow-btn:hover, .glow-btn.active {
            background: linear-gradient(90deg, #00D4FF, #7B2FFF) !important;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
            border-color: transparent;
            transform: translateY(-2px);
          }
          .skill-pill {
            background: rgba(20, 20, 35, 0.8);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 15px !important;
            padding: 10px 18px !important;
            transition: all 0.3s ease;
            margin-bottom: 10px;
          }
          .skill-pill:hover {
            border-color: #00D4FF;
            box-shadow: 0 5px 15px rgba(0, 212, 255, 0.1);
          }
          .concept-tag {
            background: rgba(0, 212, 255, 0.05);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 50px !important;
            padding: 10px 20px !important;
            color: #00D4FF !important;
            font-weight: 500;
            transition: all 0.3s ease;
            display: inline-block;
            margin-bottom: 15px;
          }
          .concept-tag:hover {
            background: rgba(0, 212, 255, 0.15) !important;
            border-color: #00D4FF;
            transform: scale(1.05);
          }
        `}
      </style>
      <Container>
        <h2 className="section-title" data-aos="fade-up">Skills & Technologies</h2>
        <p className="section-subtitle" data-aos="fade-up">Technologies I work with</p>

        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav className="justify-content-center mb-5 gap-3" variant="pills" data-aos="fade-up">
            <Nav.Item>
              <Nav.Link eventKey="languages" className="glow-btn">Languages & Frameworks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tools" className="glow-btn">Tools & Databases</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="concepts" className="glow-btn">Concepts</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'languages' && (
                  <Row className="g-4">
                    {skillsData.languages.map((skill, idx) => (
                      <Col key={idx} lg={3} md={6}>
                        <div className="skill-pill">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-white fw-medium">{skill.icon} {skill.name}</span>
                            <span style={{ color: '#00D4FF', fontSize: '0.8rem' }}>{skill.level}%</span>
                          </div>
                          <ProgressBar now={skill.level} style={{ height: '4px', background: 'rgba(255,255,255,0.05)' }} />
                        </div>
                      </Col>
                    ))}
                  </Row>
                )}

                {activeTab === 'tools' && (
                  <Row className="g-4">
                    {skillsData.tools.map((skill, idx) => (
                      <Col key={idx} lg={3} md={6}>
                        <div className="skill-pill">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-white fw-medium">{skill.icon} {skill.name}</span>
                            <span style={{ color: '#7B2FFF', fontSize: '0.8rem' }}>{skill.level}%</span>
                          </div>
                          <ProgressBar now={skill.level} style={{ height: '4px', background: 'rgba(255,255,255,0.05)' }} />
                        </div>
                      </Col>
                    ))}
                  </Row>
                )}

                {activeTab === 'concepts' && (
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {skillsData.concepts.map((concept, idx) => (
                      <motion.span 
                        key={idx}
                        className="concept-tag"
                        style={{ cursor: 'default' }}
                      >
                        {concept}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Skills;
