import React from 'react';
import Section from './Section';

const skills = [
  { title: 'Prompt Engineering', description: 'Crafting precise prompts for LLMs and generative models.' },
  { title: 'Cloud Architecture', description: 'Designing scalable and resilient cloud infrastructure (AWS, GCP).' },
  { title: 'Creative Technology', description: 'Building interactive UIs and engaging user experiences.' },
  { title: 'Full-Stack Development', description: 'Developing end-to-end applications with modern frameworks.' },
  { title: 'CI/CD & DevOps', description: 'Automating build, test, and deployment pipelines.' },
  { title: 'AI Model Integration', description: 'Integrating and fine-tuning AI models into applications.' },
];

const Skills: React.FC = () => {
  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  };

  return (
    <Section id="skills" title="My Skills">
      <div style={gridStyles}>
        {skills.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} description={skill.description} />
        ))}
      </div>
    </Section>
  );
};

const SkillCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="skill-card-container">
      <div className="skill-card">
        <div className="skill-card-front">
          <h3 style={{fontSize: '1.25rem', margin: 0, color: 'var(--primary-color)'}}>{title}</h3>
        </div>
        <div className="skill-card-back">
          <p style={{margin: 0, fontWeight: 300}}>{description}</p>
        </div>
      </div>
      <style>{`
        .skill-card-container {
          perspective: 1000px;
        }
        .skill-card {
          background-color: var(--card-bg-color);
          border-radius: 10px;
          border: 1px solid var(--border-color);
          transition: transform 0.7s;
          transform-style: preserve-d;
          position: relative;
          cursor: pointer;
          min-height: 150px;
        }
        .skill-card-container:hover .skill-card {
          transform: rotateY(180deg);
        }
        .skill-card-front, .skill-card-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          padding: 1.5rem;
          border-radius: 10px;
          text-align: center;
        }
        .skill-card-front {
          z-index: 2;
        }
        .skill-card-back {
          background-color: #29364a;
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Skills;
