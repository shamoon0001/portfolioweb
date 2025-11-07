import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FlagshipProject from './components/FlagshipProject';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Your GitHub username
  const githubUsername = 'shamoon0001'; 

  const appStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };
  
  const mainStyles: React.CSSProperties = {
    maxWidth: '1200px',
    width: '100%',
    padding: '0 20px',
    boxSizing: 'border-box'
  };

  return (
    <div style={appStyles}>
      <Header />
      <main style={mainStyles}>
        <Hero />
        <About />
        <Skills />
        <FlagshipProject />
        <Projects username={githubUsername} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;