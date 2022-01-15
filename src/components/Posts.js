import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Post } from './Post';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, ' => ', doc.data(), posts);
      setPosts((currPosts) => {
        // console.log(currPosts);
        return [
          ...currPosts,
          {
            key: doc.id,
            data: doc.data(),
          },
        ];
      });
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <ListGroup variant='flush'>
        {posts.map((post) => (
          <Post key={post.key} postData={post.data} />
        ))}
      </ListGroup>
    </Container>
  );
};
