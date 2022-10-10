import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './component/login-page';
import MainPage from './component/main-page';
import Register from './component/register-page';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/'>
        <Route index element={<MainPage/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Route>
    </Routes>
  </Router>
);