import React from 'react';
import './Ourservices.css';

const services = [
  { id: 1, image: '/images/service1.png', title: 'Web Development', slogan: 'Crafting stunning websites' },
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
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="heading-container">
      <div className="line"></div>
      <div className="dot"></div>
      <h2 className="section-heading">Our Services</h2>
      <div className="dot"></div>
      <div className="line"></div>
      </div>

      <div className="services-grid">
  {services.map((service, index) => (
    <div
      key={service.id}
      className="service-card fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-glow"></div>  {/* <-- Added for glass glow effect */}

      <img src={service.image} alt={service.title} className="service-image" />
      
      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-slogan">{service.slogan}</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default OurServices;
