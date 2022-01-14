import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';
import { auth } from '../firebase';

export const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const logoutHandler = () => {
    signOut(auth)
      .then((result) => {
        setUser('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Blog App</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              {user !== '' && (
                <Nav.Link href='#create-post'>Create Post</Nav.Link>
              )}
              <Nav.Link href='#about'>About</Nav.Link>
            </Nav>
            <Nav className='justify-content-end'>
              {user !== '' ? (
                <NavDropdown
                  title={'Signed in as: ' + user}
                  id='basic-nav-dropdown'
                >
                  <NavDropdown.Item onClick={logoutHandler}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
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
