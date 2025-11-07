import React from 'react';

const Section: React.FC<{id: string, title: string, children: React.ReactNode}> = ({ id, title, children }) => {
    const sectionStyles: React.CSSProperties = {
        padding: '6rem 0',
        borderBottom: '1px solid var(--border-color)',
        width: '100%',
        boxSizing: 'border-box'
    };

    // Remove border from the last section for a cleaner look
    const finalSectionStyles = id === 'contact' ? { borderBottom: 'none' } : {};

    const h2Styles: React.CSSProperties = {
        fontSize: '2.5rem',
        fontWeight: 600,
        marginBottom: '3rem',
        textAlign: 'center',
        position: 'relative',
        display: 'inline-block',
        left: '50%',
        transform: 'translateX(-50%)'
    };
    
    return (
        <section id={id} style={{...sectionStyles, ...finalSectionStyles}}>
            <h2 style={h2Styles} className="section-title">{title}</h2>
            <div>{children}</div>
            <style>{`
                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 4px;
                    background-color: var(--primary-color);
                    border-radius: 2px;
                }
            `}</style>
        </section>
    );
}

export default Section;
