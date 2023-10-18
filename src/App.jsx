import React, { useContext } from 'react';
// import { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import Register from './pages/Register';
import PostItems from './components/PostItems';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Profile from './components/Profile'
import Login from './pages/Login';
import Home from './pages/Home';
import './style.scss'


function App() {
  const { currentUser } = useContext(AuthContext)
  const ProtectedRouter = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<ProtectedRouter>
            <Home />
          </ProtectedRouter>}>
          </Route>
          {/* <Route index element={<Home />} /> */}
          <Route path='home/*' element={<Home />} >
            <Route path='postsList' element={<PostItems />} />
            <Route path={`profile/${currentUser.displayName}`} element={<Profile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
