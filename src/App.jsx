import React, { useContext } from 'react';
// import { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  const { currentUser } = useContext(AuthContext)
  // console.log(currentUser);
  const ProtectedRouter = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children
  }
  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProtectedRouter >
              <Home />
            </ProtectedRouter >} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
