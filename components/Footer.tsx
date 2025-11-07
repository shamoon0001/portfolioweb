import React from 'react';

const Footer: React.FC = () => {
  const footerStyles: React.CSSProperties = {
    width: '100%',
    padding: '2rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#94a3b8',
    backgroundColor: '#0f172a',
    marginTop: '4rem',
    boxSizing: 'border-box'
  };

  return (
    <footer style={footerStyles}>
      <p>&copy; {new Date().getFullYear()} SHAMOON. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;