import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    { name: 'Project 1', description: 'Description of project 1', link: '#' },
    { name: 'Project 2', description: 'Description of project 2', link: '#' },
  ];

  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

