import React from 'react';
import './WorkSection.css';

const LogoDesignWork = () => {
  return (
    <section className="branding-section">
      <div className="section-content">
        <h2 className="section-heading">Logo Design</h2>
        <p className="section-subheading">Crafting memorable logos that define your brand identity</p>

        <div className="image-grid">
  {[...Array(10)].map((_, index) => (
    <img
      key={index}
      src={`https://picsum.photos/seed/branding${index}/600/400`}
      alt={`Work ${index + 1}`}
      className="work-image"
    />
  ))}
</div>


        <button className="cta-button">Explore More</button>
      </div>
    </section>
  );
};

export default LogoDesignWork;
