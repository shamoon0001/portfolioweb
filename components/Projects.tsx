import React, { useState, useEffect } from 'react';
import Section from './Section';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

// User's prioritized list of projects (excluding the flagship)
const prioritizedRepos = [
  'Savage-AI-Chatbot',
  'AI-Home-Interior-Designer-App',
  'VisiDoor-Smart-Door-Bell-',
  'Number-Puzzle-Game',
];


const Projects: React.FC<{ username: string }> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects from GitHub.');
        }
        let data: Repo[] = await response.json();
        
        // Exclude the flagship project which is now in its own section
        data = data.filter(repo => repo.name !== 'Jewellery-Business-Billing-and-Accounting-Software');

        // Separate prioritized repos from others
        const priority = data.filter(repo => prioritizedRepos.includes(repo.name));
        const others = data.filter(repo => !prioritizedRepos.includes(repo.name));

        // Sort prioritized repos according to the user's list
        priority.sort((a, b) => prioritizedRepos.indexOf(a.name) - prioritizedRepos.indexOf(b.name));

        // Combine and set the final list
        setRepos([...priority, ...others]);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
  };

  if (loading) return <Section id="projects" title="Other Notable Projects"><p style={{textAlign: 'center'}}>Loading projects...</p></Section>;
  if (error) return <Section id="projects" title="Other Notable Projects"><p style={{textAlign: 'center', color: '#f87171'}}>Error: {error}</p></Section>;

  return (
    <Section id="projects" title="Other Notable Projects">
      <div style={gridStyles}>
        {repos.slice(0, 6).map(repo => ( // Show top 6 projects
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </Section>
  );
};

const ProjectCard: React.FC<{ repo: Repo }> = ({ repo }) => {
    const cardStyles: React.CSSProperties = {
        backgroundColor: 'var(--card-bg-color)',
        borderRadius: '10px',
        padding: '1.5rem',
        border: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textDecoration: 'none',
        color: 'inherit',
    };

    const h3Styles: React.CSSProperties = {
        fontSize: '1.2rem',
        color: 'var(--primary-color)',
        margin: '0 0 0.5rem 0',
        textTransform: 'capitalize',
    };
    
    const pStyles: React.CSSProperties = {
        fontSize: '0.9rem',
        flexGrow: 1,
        marginBottom: '1rem',
        fontWeight: 300,
        lineHeight: 1.6
    };
    
    const footerStyles: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.8rem',
    };
    
    const langStyles: React.CSSProperties = {
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        color: 'var(--primary-color)',
        padding: '0.25rem 0.5rem',
        borderRadius: '5px'
    };

    return (
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" 
           style={cardStyles}
           onMouseOver={(e) => {
               e.currentTarget.style.transform = 'translateY(-5px)';
               e.currentTarget.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.2)`;
           }}
           onMouseOut={(e) => {
               e.currentTarget.style.transform = 'translateY(0)';
               e.currentTarget.style.boxShadow = 'none';
           }}
           >
            <div>
                <h3 style={h3Styles}>
                    {repo.name.replace(/-/g, ' ')}
                </h3>
                <p style={pStyles}>{repo.description || 'No description provided.'}</p>
            </div>
            <div style={footerStyles}>
                {repo.language && <span style={langStyles}>{repo.language}</span>}
                <span>⭐ {repo.stargazers_count}</span>
            </div>
        </a>
    );
}

export default Projects;