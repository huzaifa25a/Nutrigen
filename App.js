import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import SignUpPage from './components/SignUpForm';
import LoginPage from './components/LoginForm';
import PlannerForm from './components/PlannerForm';
import Recipe from './components/Recipe';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/planner" element={<PlannerForm />} />
        <Route path="/recipes" element={<Recipe />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
