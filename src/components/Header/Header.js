// Header.js
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <Navbar className="header" bg="light" variant="light">
      <Container>

        <Navbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Navbar.Brand style={{ fontFamily: 'Pacifico', fontSize: 'xx-large', color: 'orange' }}>Ente Gov</Navbar.Brand>
          </Link>
        </Navbar>

        <div className="mx-auto">
          <span className="text-dark" style={{ 'fontFamily': "Pacifico" }}>Data Driven Democracy</span>
        </div>

      </Container>
    </Navbar>
  );
};

export default Header;
