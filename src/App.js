import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Main id="main" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
