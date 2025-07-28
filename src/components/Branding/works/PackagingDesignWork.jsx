import React from 'react';
import './WorkSection.css';

const PackagingDesignWork = () => {
  return (
    <section className="branding-section">
      <div className="section-content">
        <h2 className="section-heading">Packaging Design</h2>
        <p className="section-subheading">Visually striking packaging that stands out</p>

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

export default PackagingDesignWork;
