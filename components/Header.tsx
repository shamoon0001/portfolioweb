import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '1.5rem 2rem',
    zIndex: 1000,
    transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    boxSizing: 'border-box'
  };

  const navStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
  };

  const logoStyles: React.CSSProperties = {
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const ulStyles: React.CSSProperties = {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
  };

  const linkStyles: React.CSSProperties = {
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontWeight: 400,
    position: 'relative',
    paddingBottom: '0.25rem',
    transition: 'color 0.3s ease',
  };
  
  return (
    <header style={headerStyles}>
      <nav style={navStyles}>
        <a href="#home" style={logoStyles} onClick={(e) => handleNavClick(e, '#home')}>SHAMOON</a>
        <ul style={ulStyles}>
          <li><a href="#home" style={linkStyles} className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#about" style={linkStyles} className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#skills" style={linkStyles} className="nav-link" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
          <li><a href="#flagship" style={linkStyles} className="nav-link" onClick={(e) => handleNavClick(e, '#flagship')}>Flagship</a></li>
          <li><a href="#projects" style={linkStyles} className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
          <li><a href="#contact" style={linkStyles} className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
      </nav>
      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width 0.3s ease-in-out;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-link {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;