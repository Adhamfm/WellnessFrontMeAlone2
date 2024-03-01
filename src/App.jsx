import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';
import Signup from './pages/signup';
import FormTest from './pages/formTest';
import SignupCustomerForm from './pages/signupcustomer';

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
      </Routes>
    </div>
  );
}

export default App
