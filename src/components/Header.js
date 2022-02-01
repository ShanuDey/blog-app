import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
        <Container>
          <Navbar.Brand>Blog App</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
              {user !== '' && (
                <Link to='/create-post' className='nav-link'>
                  Create Post
                </Link>
              )}
              <Link to='/countdown' className='nav-link'>
                Countdown
              </Link>
              <Link to='/about' className='nav-link'>
                About
              </Link>
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
                <Link to='/login' className='nav-link'>
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
