import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Post } from './Post';

export const Posts = () => {
  return (
    <Container>
      <ListGroup variant='flush'>
        {[1, 2, 3, 5, 6, 7, 8, 9, 10, 11].map((postData) => (
          <Post postData={postData} />
        ))}
      </ListGroup>
    </Container>
  );
};
