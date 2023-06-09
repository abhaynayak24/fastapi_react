import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

const App = () => {
  return (
      <div>
      <Router>
      <NavBar className='flex fixed'/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Project/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;