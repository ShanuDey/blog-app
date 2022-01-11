import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg' fixed='bottom'>
        <Container style={{ justifyContent: 'center' }}>
          <Navbar.Brand>Blog App &copy;2022</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
