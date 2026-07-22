import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:8000'}/api/contact/`, formData);
      setStatus({ type: 'success', msg: 'Message sent! I\'ll reply soon 😊' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'danger', msg: 'Something went wrong. Try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <style>
        {`
          .contact-form-card {
            background: rgba(20, 20, 35, 0.6) !important;
            backdrop-filter: blur(10px);
            border-radius: 30px !important;
            border: 1px solid rgba(0, 212, 255, 0.1) !important;
          }
          .custom-input {
            background: rgba(255, 255, 255, 0.05) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 15px !important;
            color: #fff !important;
            padding: 15px 20px !important;
            transition: all 0.3s ease;
          }
          .custom-input:focus {
            background: rgba(255, 255, 255, 0.08) !important;
            border-color: var(--accent-cyan) !important;
            box-shadow: 0 0 15px rgba(0, 212, 255, 0.2) !important;
            outline: none;
          }
          .custom-input::placeholder {
            color: rgba(255, 255, 255, 0.3) !important;
          }
          .form-label {
            margin-left: 10px;
            font-weight: 500;
            color: var(--accent-cyan) !important;
            font-size: 0.9rem;
          }
        `}
      </style>
      <Container>
        <Row>
          <Col lg={5} md={12} className="mb-5 mb-lg-0" data-aos="fade-right">
            <h2 className="section-title text-start mb-4">Let's Build Something Amazing</h2>
            <p className="text-white mb-5" style={{ opacity: 0.8 }}>
              Have an opportunity or just want to say hello? I'd love to hear from you.
            </p>

            <div className="contact-info d-flex flex-column gap-4 mb-5">
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box p-3 rounded-circle bg-dark border border-secondary text-info" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaEnvelope /></div>
                <div>
                  <small className="text-white-50 d-block">Email Me</small>
                  <a href="mailto:akhil.megavath03@gmail.com" className="text-white text-decoration-none fw-medium">akhil.megavath03@gmail.com</a>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box p-3 rounded-circle bg-dark border border-secondary text-info" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaPhoneAlt /></div>
                <div>
                  <small className="text-white-50 d-block">Call Me</small>
                  <a href="tel:+918125329873" className="text-white text-decoration-none fw-medium">+91 8125329873</a>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box p-3 rounded-circle bg-dark border border-secondary text-info" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaMapMarkerAlt /></div>
                <div>
                  <small className="text-white-50 d-block">Location</small>
                  <span className="text-white fw-medium">Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>

            <h5 className="text-white mb-4">Follow Me</h5>
            <div className="d-flex gap-4">
              <motion.a 
                whileHover={{ y: -5, color: '#fff', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }} 
                href="https://github.com/AkhilRathod03" target="_blank" 
                className="fs-2 transition-all"
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: '#0077B5', filter: 'drop-shadow(0 0 10px rgba(0,119,181,0.5))' }} 
                href="https://www.linkedin.com/in/akhilmegavath" target="_blank" 
                className="fs-2 transition-all"
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: '#FF0000', filter: 'drop-shadow(0 0 10px rgba(255,0,0,0.5))' }} 
                href="https://www.youtube.com/@akhil_rathod03" target="_blank" 
                className="fs-2 transition-all"
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </Col>

          <Col lg={7} md={12} data-aos="fade-left">
            <div className="contact-form-card p-4 p-md-5">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control 
                        type="text" name="name" required 
                        placeholder="Your Name"
                        value={formData.name} onChange={handleChange}
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        type="email" name="email" required 
                        placeholder="your@email.com"
                        value={formData.email} onChange={handleChange}
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control 
                    type="text" name="subject" required 
                    placeholder="Project Inquiry"
                    value={formData.subject} onChange={handleChange}
                    className="custom-input"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" rows={4} name="message" required 
                    placeholder="Tell me about your project..."
                    value={formData.message} onChange={handleChange}
                    className="custom-input"
                  />
                </Form.Group>

                {status.msg && <div className={`alert alert-${status.type} mb-4`} style={{ borderRadius: '15px' }}>{status.msg}</div>}

                <Button type="submit" className="glow-btn w-100 py-3" style={{ borderRadius: '50px', fontWeight: 'bold' }} disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : 'Send Message 🚀'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
