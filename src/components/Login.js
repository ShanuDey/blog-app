import React, { useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import { LoginWithGoogleButton } from './LoginWithGoogleButton';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { UserContext } from '../contexts/UserContext';

export const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const loginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const displayName = result.user.displayName;
        setUser(displayName);
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
