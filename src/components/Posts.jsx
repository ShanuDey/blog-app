import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Post } from './Post';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const postsData = [];
    querySnapshot.forEach((doc) => {
      postsData.push({ key: doc.id, data: doc.data() });
    });

    const sortedPosts = postsData.sort((a, b) => {
      const dateA = a.data.createdAt ? a.data.createdAt.toDate() : new Date(a.data.date);
      const dateB = b.data.createdAt ? b.data.createdAt.toDate() : new Date(b.data.date);
      return dateB - dateA;
    });

    setPosts(sortedPosts);
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
