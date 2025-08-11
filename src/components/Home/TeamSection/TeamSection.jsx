import React from 'react';
import './TeamSection.css';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Atul',
    role: 'Founder & CEO',
    img: '/team/Diego.jpg',
    linkedin: 'https://www.linkedin.com/in/atul-kumar7838649867?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Varun',
    role: 'Marketing Head',
    img: '/team/Diego.jpg',
    linkedin: 'https://linkedin.com/in/davidcorner',
  },
  {
    name: 'Diego',
    role: 'Branding Head',
    img: '/team/Diego.jpg',
    linkedin: 'https://linkedin.com/in/tomcruise',
  },
  {
    name: 'Liam',
    role: 'CGI & Design Head',
    img: '/team/Liam.jpg',
    linkedin: 'https://linkedin.com/in/emmawatson',
  },
  {
    name: 'Chris Evans',
    role: 'React Developer',
    img: '/team/Sergio.jpg',
    linkedin: 'https://linkedin.com/in/chrisevans',
  },
  {
    name: 'Rajnish',
    role: 'Full Stack Developer',
    img: '/team/Rajnish.jpg',
    linkedin: 'https://www.linkedin.com/in/rajnish0903',
  },
  {
    name: 'Rajnish',
    role: 'Full Stack Developer',
    img: '/team/Rajnish.jpg',
    linkedin: 'https://www.linkedin.com/in/rajnish0903',
  },
  {
    name: 'Rajnish',
    role: 'Full Stack Developer',
    img: '/team/Rajnish.jpg',
    linkedin: 'https://www.linkedin.com/in/rajnish0903',
  },
];

const TeamCard = ({ member }) => (
  <div className="ourteam-card">
    <div className="ourteam-img">
      <img src={member.img} alt={member.name} />
    </div>
    <div className="ourteam-caption">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <div className="ourteam-social-links">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section className="ourteam-main">
      <div className="our-services-heading-container">
        <div className="our-services-line"></div>
        <div className="our-services-dot"></div>
        <h2 className="our-services-section-heading">Our Team</h2>
        <div className="our-services-dot"></div>
        <div className="our-services-line"></div>
      </div>

      <div className="desktop-grid">
        {teamMembers.map((member, idx) => (
          <TeamCard member={member} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
