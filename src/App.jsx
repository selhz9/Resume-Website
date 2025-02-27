import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/About'; // Import About component
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

import Header from './components/Header'; 
import Footer from './components/Footer'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
