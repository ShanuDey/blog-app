import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { UserContext } from './contexts/UserContext';

function App() {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Login />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
