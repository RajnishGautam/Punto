// import React from 'react';
import './Ourservices.css';

const services = [
  { id: 1, image: '/images/service1.png', title: 'Web Development', slogan: 'We create Digital Magic' },
  { id: 2, image: '/images/service2.png', title: 'App Development', slogan: 'Mobile apps that scale' },
  { id: 3, image: '/images/service3.png', title: 'UI/UX Design', slogan: 'Designs that convert' },
  { id: 4, image: '/images/service4.png', title: 'SEO Optimization', slogan: 'Boost your visibility' },
  { id: 5, image: '/images/service5.png', title: 'Digital Marketing', slogan: 'Strategies that work' },
  { id: 6, image: '/images/service6.png', title: 'Content Creation', slogan: 'Content that engages' },
  { id: 7, image: '/images/service7.png', title: 'Branding', slogan: 'Build your brand identity' },
  { id: 8, image: '/images/service8.png', title: 'Consultancy', slogan: 'Expert business advice' },
];

const OurServices = () => {
  return (
    <section className="our-services-section">
      <div className="our-services-background-orbs">
        <div className="our-services-orb our-services-orb-1"></div>
        <div className="our-services-orb our-services-orb-2"></div>
        <div className="our-services-orb our-services-orb-3"></div>
      </div>

      <div className="our-services-heading-container">
        <div className="our-services-line"></div>
        <div className="our-services-dot"></div>
        <h2 className="our-services-section-heading">Our Services</h2>
        <div className="our-services-dot"></div>
        <div className="our-services-line"></div>
      </div>

      <div className="our-services-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="our-services-card fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="our-services-card-glow"></div>

            <img src={service.image} alt={service.title} className="our-services-image" />

            <div>
              <h3 className="our-services-title">{service.title}</h3>
              <p className="our-services-slogan">{service.slogan}</p>
              <button className="our-services-read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
