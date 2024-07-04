// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BackBtn from './components/BackBtn';
import User from './components/User';
import UserDetails from './components/UserDeatails';

const App = () => {
  return (
    <Router>
      {/* <NavigationBar /> */}
      <BackBtn />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
