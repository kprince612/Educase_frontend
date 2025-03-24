import './App.css';
import Home from './Mycomponents/Home';
import Signup from './Mycomponents/Signup';
import Login from './Mycomponents/Login';
import Account from './Mycomponents/Account';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const PrivateRoute = ({ element }) => {
  //   return isAuthenticated ? element : <Navigate to="/login" />
  // }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/account' element={<Account />} />
      </Routes>
      </>
  );
}

export default App;
