import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section id="resume">
      <h2>My Resume</h2>
      <div className="education">
        <h3>Education</h3>
        <p>[Your Degree], [Your University], [Year]</p>
      </div>
      <div className="experience">
        <h3>Experience</h3>
        <p>[Your Position], [Your Company], [Year]</p>
      </div>
    </section>
  );
}

export default Resume;

