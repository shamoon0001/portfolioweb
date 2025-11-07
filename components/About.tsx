import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4rem',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const textContainerStyles: React.CSSProperties = {
    flex: 1,
  };
  
  const imageContainerStyles: React.CSSProperties = {
    flex: '0 0 300px',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    border: '5px solid var(--primary-color)'
  };

  const imageStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  
  const pStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    marginBottom: '1rem',
    fontWeight: 300
  };

  return (
    <Section id="about" title="About Me">
      <div style={containerStyles} className="about-container">
        <div style={textContainerStyles}>
          <p style={pStyles}>
            I am a passionate AI Engineer and Creative Technologist with a knack for building intelligent, scalable, and user-centric applications. My expertise lies at the intersection of cutting-edge AI, robust cloud infrastructure, and intuitive user interface design.
          </p>
          <p style={pStyles}>
            With a background in full-stack development, I enjoy tackling complex challenges and turning innovative ideas into reality. I am driven by a curiosity to explore new technologies and a commitment to delivering high-quality, impactful solutions.
          </p>
          <p style={pStyles}>
            When I'm not coding, you can find me exploring the latest in generative AI, contributing to open-source projects, or looking for the next creative challenge.
          </p>
        </div>
        <div style={imageContainerStyles}>
          <img 
            src="https://github.com/shamoon0001.png"
            alt="Shamoon" 
            style={imageStyles} 
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-container {
            flex-direction: column-reverse;
            gap: 2rem;
          }
        }
      `}</style>
    </Section>
  );
};

export default About;
