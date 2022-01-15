import React, { useContext } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';

export const CreatePost = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <Container>
      <Card
        style={{
          marginTop: '3em',
        }}
      >
        <Form>
          <Card.Body>
            <h3>Create Post</h3>
            <Card.Title>
              <Form.Control type='text' placeholder='Title' />
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              created by {user} on {new Date().toLocaleDateString('en-US')}
            </Card.Subtitle>
            <Card.Text>
              <Form.Control as='textarea' rows='10' placeholder='Body' />
            </Card.Text>
            <Button variant='outline-success' type='submit'>
              Submit
            </Button>
          </Card.Body>
        </Form>
      </Card>
    </Container>
  );
};
