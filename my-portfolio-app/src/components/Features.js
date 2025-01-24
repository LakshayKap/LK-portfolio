import React from 'react';
import './Features.css';

function Features() {
  return (
    <section id="features">
      <h2>What I Do</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Data Analysis</h3>
          <p>Perform exploratory data analysis to extract meaningful insights.</p>
        </div>
        <div className="feature-item">
          <h3>Machine Learning</h3>
          <p>Develop predictive models to solve complex problems.</p>
        </div>
        <div className="feature-item">
          <h3>Data Visualization</h3>
          <p>Create interactive visualizations to communicate data findings.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

