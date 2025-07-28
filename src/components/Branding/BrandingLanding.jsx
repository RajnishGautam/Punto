import React from 'react';
import './BrandingLanding.css';

const BrandingLanding = () => {
  return (
    <section className="branding-landing">
      <video
        className="landing-bg"
        autoPlay
        muted
        loop
        playsInline
        src="https://www.w3schools.com/howto/rain.mp4"
      />
      <div className="landing-content">
        <h1>Welcome to Our Branding Studio</h1>
        <p>Crafting unforgettable brand experiences through visuals.</p>
      </div>
    </section>
  );
};

export default BrandingLanding;
