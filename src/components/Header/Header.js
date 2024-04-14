// Header.js
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="header" bg="light" variant="light">
      <Container>
        
        <Navbar.Brand href="#home" style={{  'fontFamily': "Pacifico", 'fontSize':'xx-large', 'color':'orange'}}>Ente Gov</Navbar.Brand>

        
        <div className="mx-auto">
          <span className="text-dark" style={{  'fontFamily': "Pacifico"}}>Data Driven Democracy</span>
        </div>
        
      </Container>
    </Navbar>
  );
};

export default Header;
