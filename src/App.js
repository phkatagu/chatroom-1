import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './component/login-page';
import MainPage from './component/main-page';
import Register from './component/register-page';
import Forgotpassword from './component/forgotpassword';


function App() {
  return (
    <Router>
    <Routes>
        <Route path= '/' element={<Login/>} />
        <Route path='main-page' element={<MainPage/>} />
        <Route path='register' element={<Register/>} />
        <Route path='forgotpassword' element={<Forgotpassword/>} />
    </Routes>
  </Router>
  );
}

export default App;
