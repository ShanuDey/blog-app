import React, { useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import { LoginWithGoogleButton } from './LoginWithGoogleButton';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { setUser } = useContext(UserContext);
  let navigate = useNavigate();

  const loginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const displayName = result.user.displayName;
        setUser(displayName);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <Container
      style={{
        marginTop: '30vh',
      }}
    >
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Login </Card.Title>
          <Card.Text>Secure login with Google Account</Card.Text>
          <LoginWithGoogleButton onClickHandler={loginHandler} />
        </Card.Body>
      </Card>
    </Container>
  );
};
