import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { UserContext } from './contexts/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Posts } from './components/Posts';
import { CreatePost } from './components/CreatePost';
import { Container } from 'react-bootstrap';
import About from './components/About';

function App() {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Header />
        <Container
          style={{
            marginTop: '3em',
            marginBottom: '5em',
          }}
        >
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Posts />} />
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
