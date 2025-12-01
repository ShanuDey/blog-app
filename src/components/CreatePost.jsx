import React, { useContext, useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export const CreatePost = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleCreatePost = (event) => {
    event.preventDefault();
    if (user === '') {
      alert('No valid user found, Please login again');
    } else if (title === '' || body === '') {
      alert('Enter a valid Title and Body');
    } else {
      addDoc(collection(db, 'posts'), {
        title: title,
        author: user,
        date: new Date().toLocaleDateString('en-US'),
        createdAt: serverTimestamp(),
        body: body,
      })
        .then((result) => {
          alert('Post created successfully');
        })
        .catch((error) => {
          console.log('Failed to create the post', error.message);
        });
    }
  };

  return (
    <Container>
      <Card>
        <Form onSubmit={handleCreatePost}>
          <Card.Body>
            <h3>Create Post</h3>
            <Card.Title>
              <Form.Control
                type='text'
                placeholder='Title'
                onChange={(event) => setTitle(event.target.value)}
              />
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              created by {user || 'Me'} on{' '}
              {new Date().toLocaleDateString('en-US')}
            </Card.Subtitle>
            <Card.Text>
              <Form.Control
                as='textarea'
                rows='10'
                placeholder='Body'
                onChange={(event) => setBody(event.target.value)}
              />
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
