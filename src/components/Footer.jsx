import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <div>
      <Navbar bg='light' variant='light' expand='lg' fixed='bottom'>
        <Container style={{ justifyContent: 'center' }}>
          <Navbar.Brand>Blog App &copy;2022</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
