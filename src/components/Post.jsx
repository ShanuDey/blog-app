import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export const Post = ({ postData }) => {
  return (
    <ListGroup.Item>
      <Card>
        <Card.Body>
          <Card.Title>{postData.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            created by {postData.author} on {postData.date}
          </Card.Subtitle>
          <Card.Text>{postData.body}</Card.Text>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};
