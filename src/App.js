import './App.css';
import {React, useEffect} from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MultiTodo from './components/MultiTodo';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS once
  }, []);

  return (
    <>
    
    <div className='p-0  m-0 '>
    <Router>
    <Navbar/>

    <Routes>
    <Route path='/'          element={<LoginPage/>} />
    <Route path='/signup'    element={<SignUp/>} />
    <Route path='/multitodo' element={<MultiTodo />} />
    
             
    </Routes>


    <Footer/>
    </Router>
    </div>
    </>
  
  );
}



export default App;
