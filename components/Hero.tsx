import React from 'react';

const Hero: React.FC = () => {
  const heroStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    padding: '0 2rem',
    boxSizing: 'border-box',
    textAlign: 'left',
  };

  const h1Styles: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: 700,
    margin: '0 0 1rem 0',
    lineHeight: 1.1,
    animation: 'fadeInUp 0.8s ease-out forwards'
  };
  
  const h1SpanStyles: React.CSSProperties = {
      color: 'var(--primary-color)',
  };

  const pStyles: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    maxWidth: '600px',
    marginBottom: '2rem',
    fontWeight: 300,
    animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
    opacity: 0,
  };
  
  const buttonStyles: React.CSSProperties = {
      display: 'inline-block',
      backgroundColor: 'var(--primary-color)',
      color: 'var(--background-color)',
      padding: '0.8rem 2rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
      opacity: 0,
  };

  return (
    <section id="home" style={heroStyles}>
      <h1 style={h1Styles}>
        Hi, I'm SHAMOON <br/>
        <span style={h1SpanStyles}>AI Engineer & Creative Technologist.</span>
      </h1>
      <p style={pStyles}>
        I build intelligent applications and craft unique digital experiences by bridging the gap between AI, cloud infrastructure, and creative design.
      </p>
      <a href="#projects" style={buttonStyles}
         onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 15px rgba(56, 189, 248, 0.3)';
         }}
         onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
         }}
      >
        View My Work
      </a>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;