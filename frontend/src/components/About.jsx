import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const target = parseInt(value);
  const suffix = value.toString().replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const stats = [
    { label: 'Internships', value: '3+' },
    { label: 'Projects', value: '5+' },
    { label: 'Certifications', value: '5+' },
    { label: 'Hrs Coded', value: '1000+' },
  ];

  return (
    <section id="about" className="pt-0">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} data-aos="fade-right">
            <h2 className="section-title text-start mb-4">About Me</h2>
            <div className="accent-bar mb-4" style={{ width: '80px', height: '4px', background: 'var(--gradient-text)' }}></div>
            <p className="text-white mb-4" style={{ fontSize: '1.05rem', opacity: 0.9 }}>
              From the bustling city of Hyderabad, I'm a Computer Science graduate who discovered a passion for software development that goes beyond writing code — it's about crafting solutions that actually matter. Whether it's building AI-powered health tools or detecting security vulnerabilities, I love turning complex problems into elegant, working software.
            </p>
            <p className="text-white mb-4" style={{ fontSize: '1.05rem', opacity: 0.9 }}>
              My journey has taken me through three transformative internships — at IBM Skills Build where I built Smart Fit AI, at Pinnacle Labs mastering Python backends and database optimisation, and at Oasis Info byte sharpening frontend development. Each experience added a new layer to my understanding of how great software is built — collaboratively, thoughtfully, and always with the user in mind.
            </p>
            <p className="text-white mb-5" style={{ fontSize: '1.05rem', opacity: 0.9 }}>
              Beyond the screen, I'm someone who's constantly learning — whether that's diving into a new ML paper, experimenting with a new framework, or contributing to GitHub. I'm currently seeking an opportunity where I can contribute meaningfully, grow alongside talented engineers, and build things that make a real difference.
            </p>

            <Row className="g-3">
              {stats.map((stat, idx) => (
                <Col key={idx} xs={6} md={3}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="skill-card text-center py-2 px-1"
                    style={{ 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '15px',
                      minHeight: '80px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <h4 className="gradient-text fw-bold mb-0">
                      <StatCounter value={stat.value} />
                    </h4>
                    <div className="text-white" style={{ opacity: 0.8, fontSize: '0.75rem', lineHeight: '1.1' }}>{stat.label}</div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
          
          <Col lg={6} md={12} className="mt-5 mt-lg-0" data-aos="fade-left">
            <div className="terminal-window" style={{ 
              boxShadow: '0 0 50px rgba(0, 212, 255, 0.15)', 
              border: '1px solid rgba(0, 212, 255, 0.3)',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#0D0D15'
            }}>
              <div className="terminal-header" style={{ 
                background: '#1A1A25', 
                padding: '12px 20px', 
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="d-flex gap-2">
                  <div className="dot red" style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}></div>
                  <div className="dot yellow" style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
                  <div className="dot green" style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }}></div>
                </div>
                <span className="ms-3 text-white-50" style={{ fontSize: '0.85rem', fontFamily: "'Fira Code', monospace" }}>developer_profile.py — Akhil-OS</span>
              </div>
              <div className="terminal-body" style={{ 
                padding: '25px', 
                fontFamily: "'Fira Code', monospace", 
                fontSize: '0.9rem',
                lineHeight: '1.6',
                background: 'linear-gradient(180deg, #0D0D15 0%, #050508 100%)',
                color: '#EEFFFF'
              }}>
                <div className="mb-3">
                  <span style={{ color: '#C792EA' }}>class</span> <span style={{ color: '#82AAFF' }}>SoftwareEngineer</span><span style={{ color: '#EEFFFF' }}>:</span>
                </div>
                <div className="ms-3 mb-2">
                  <span style={{ color: '#C792EA' }}>def</span> <span style={{ color: '#82AAFF' }}>__init__</span><span style={{ color: '#EEFFFF' }}>(</span><span style={{ color: '#F78C6C' }}>self</span><span style={{ color: '#EEFFFF' }}>):</span>
                </div>
                <div className="ms-5 mb-1">
                  <span style={{ color: '#F78C6C' }}>self</span><span style={{ color: '#EEFFFF' }}>.</span><span style={{ color: '#EF5350' }}>name</span> <span style={{ color: '#89DDFF' }}>=</span> <span style={{ color: '#C3E88D' }}>"Megavath Akhil Kumar"</span>
                </div>
                <div className="ms-5 mb-3">
                  <span style={{ color: '#F78C6C' }}>self</span><span style={{ color: '#EEFFFF' }}>.</span><span style={{ color: '#EF5350' }}>role</span> <span style={{ color: '#89DDFF' }}>=</span> <span style={{ color: '#C3E88D' }}>"Full Stack Developer"</span>
                </div>

                <div className="ms-3 mb-2" style={{ color: '#676E95', fontStyle: 'italic' }}># Expertise Matrix</div>
                <div className="ms-3 mb-3">
                  {[
                    { name: 'Python', level: 90, color: 'linear-gradient(90deg, #3776AB, #00D4FF)' },
                    { name: 'React', level: 85, color: 'linear-gradient(90deg, #61DAFB, #7B2FFF)' },
                    { name: 'Django', level: 80, color: 'linear-gradient(90deg, #092E20, #00D4FF)' },
                    { name: 'ML/AI', level: 75, color: 'linear-gradient(90deg, #FF2D78, #FFBD2E)' }
                  ].map((skill, i) => (
                    <div key={i} className="mb-2" style={{ width: '70%' }}>
                      <div className="d-flex justify-content-between mb-1" style={{ fontSize: '0.75rem' }}>
                        <span style={{ color: '#EEFFFF', fontWeight: '500' }}>{skill.name}</span>
                        <span style={{ color: '#89DDFF' }}>{skill.level}%</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                          style={{ 
                            height: '100%', 
                            background: skill.color, 
                            boxShadow: `0 0 15px ${skill.color.split(',')[1].replace(')', '').trim()}66` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ms-3 mb-1">
                  <span style={{ color: '#C792EA' }}>def</span> <span style={{ color: '#82AAFF' }}>get_status</span><span style={{ color: '#EEFFFF' }}>(</span><span style={{ color: '#F78C6C' }}>self</span><span style={{ color: '#EEFFFF' }}>):</span>
                </div>
                <div className="ms-5">
                  <span style={{ color: '#C792EA' }}>return</span> <span style={{ color: '#89DDFF' }}>{'{'}</span>
                </div>
                <div className="ms-5 ps-3">
                  <span style={{ color: '#C3E88D' }}>"Location"</span><span style={{ color: '#EEFFFF' }}>:</span> <span style={{ color: '#C3E88D' }}>"Hyderabad"</span><span style={{ color: '#EEFFFF' }}>,</span>
                </div>
                <div className="ms-5 ps-3">
                  <span style={{ color: '#C3E88D' }}>"Availability"</span><span style={{ color: '#EEFFFF' }}>:</span> <span style={{ color: '#F78C6C' }}>True</span><span style={{ color: '#EEFFFF' }}>,</span>
                </div>
                <div className="ms-5 ps-3">
                  <span style={{ color: '#C3E88D' }}>"Coffee_Level"</span><span style={{ color: '#EEFFFF' }}>:</span> <span style={{ color: '#F78C6C' }}>"Critical"</span>
                </div>
                <div className="ms-5"><span style={{ color: '#89DDFF' }}>{'}'}</span></div>
                
                <div className="cursor-blink mt-3" style={{ width: '2px', height: '1.2rem', background: '#00D4FF', display: 'inline-block', boxShadow: '0 0 10px #00D4FF', verticalAlign: 'middle' }}></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
