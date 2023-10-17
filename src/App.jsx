import React, { useContext } from 'react';
// import { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import Register from './pages/Register';
import PostList from './components/PostList';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Profile from './components/Profile'
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';
// import PostList from './components/PostList';

function App() {
  const { currentUser } = useContext(AuthContext)
  // console.log(currentUser);
  // const ProtectedRouter = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children
  // }
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route index element={<Home />} />
          <Route path='home/*' element={<Home />} >
            <Route path='postsList' element={<PostList />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
