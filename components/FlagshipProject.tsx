import React from 'react';
import Section from './Section';

const FlagshipProject: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    gap: '3rem',
    alignItems: 'center',
    backgroundColor: 'var(--card-bg-color)',
    padding: '3rem',
    borderRadius: '15px',
    border: '1px solid var(--primary-color)',
    boxShadow: '0 0 25px rgba(56, 189, 248, 0.2)',
  };

  const imageContainerStyles: React.CSSProperties = {
    flex: '1 1 40%',
    maxWidth: '500px',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const imageStyles: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '10px',
  };

  const textContainerStyles: React.CSSProperties = {
    flex: '1 1 60%',
  };

  const h3Styles: React.CSSProperties = {
    fontSize: '2rem',
    color: 'var(--text-color)',
    margin: '0 0 1rem 0',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  };

  const badgeStyles: React.CSSProperties = {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--background-color)',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    padding: '0.3rem 0.8rem',
    borderRadius: '50px',
    textTransform: 'uppercase',
  };

  const pStyles: React.CSSProperties = {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
    fontWeight: 300,
  };
  
  const h4Styles: React.CSSProperties = {
    color: 'var(--primary-color)', 
    marginTop: '2rem', 
    marginBottom: '1rem', 
    fontSize: '1.2rem',
    borderLeft: '3px solid var(--primary-color)',
    paddingLeft: '10px',
  };
  
  const featureListStyles: React.CSSProperties = {
      listStyle: 'none',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.75rem',
  };
  
  const featureItemStyles: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontWeight: 300,
  };

  return (
    <Section id="flagship" title="Flagship Project">
      <div style={containerStyles} className="flagship-container">
        <div style={imageContainerStyles}>
          <img src="https://placehold.co/600x400/1e293b/38bdf8/png?text=Jewellery+Billing+Software" alt="Project Screenshot" style={imageStyles} />
        </div>
        <div style={textContainerStyles}>
          <h3 style={h3Styles}>
            <span>Jewellery Billing And Accounting Software</span>
            <span style={badgeStyles}>Production Ready</span>
          </h3>
          <p style={pStyles}>
            Presenting my flagship, production-ready application: a comprehensive billing and accounting software tailored for the jewellery business. This has been my most ambitious and awaited project, meticulously engineered to deliver a robust and scalable solution. Currently in its final stages before launch, it represents the culmination of my skills in full-stack development, cloud architecture, and user-centric design.
          </p>
          <h4 style={h4Styles}>Key Features</h4>
          <ul style={featureListStyles} className="feature-list-grid">
            <li style={featureItemStyles}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--primary-color)" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>
                Inventory Management
            </li>
            <li style={featureItemStyles}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--primary-color)" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>
                Billing & Invoicing
            </li>
            <li style={featureItemStyles}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--primary-color)" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>
                Double Calculation
            </li>
            <li style={featureItemStyles}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--primary-color)" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>
                Reporting & Analytics
            </li>
          </ul>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .flagship-container {
            flex-direction: column;
            padding: 1.5rem;
          }
        }
        @media (max-width: 500px) {
            .feature-list-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
    </Section>
  );
};

export default FlagshipProject;