import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer bg-dark text-light text-center py-3'>
      <Container>
        <p>&copy;  2024 Ente Gov </p>
        <a href="https://www.linkedin.com/in/monusimonm/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} style={{ color: 'white' }} />
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
