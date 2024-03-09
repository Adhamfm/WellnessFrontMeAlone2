import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';
import Signup from './pages/signup';
import FormTest from './pages/formTest';
import SignupCustomerForm from './pages/signupcustomer';
import Products from './pages/products';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/login" element={<Login/>} exact/>
        <Route path="/profile" element={<Profile/>} exact/>
        <Route path="/signup" element={<Signup/>} exact/>
        <Route path="/test" element={<FormTest/>} exact/>
        <Route path="/signupcus" element={<SignupCustomerForm/>} exact/>
        <Route path="/products" element={<Products/>} exact/>
        <Route path="*" element={<div><h1>404 PAGE NOT FOUND</h1></div>} exact/>
      </Routes>
    </div>
  );
}

export default App
