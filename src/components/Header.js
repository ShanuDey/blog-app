import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const Header = () => {
  const isAuthenticated = false;
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Blog App</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#create-post'>Create Post</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
            </Nav>
            <Nav className='justify-content-end'>
              {isAuthenticated ? (
                <Navbar.Text>
                  Signed in as: <a href='#login'>Shanu</a>
                </Navbar.Text>
              ) : (
                <Navbar.Text>
                  <a href='#login'>Login</a>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
