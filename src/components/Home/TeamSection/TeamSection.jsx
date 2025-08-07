import React from 'react';
import './TeamSection.css';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Vin Diesel',
    role: 'Senior App Developer',
    img: '/team/Diego.jpg',
    instagram: 'https://instagram.com/vindiesel',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/vindiesel',
  },
  {
    name: 'David Corner',
    role: 'Front End Developer',
    img: '/team/Diego.jpg',
    instagram: 'https://instagram.com/davidcorner',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/davidcorner',
  },
  {
    name: 'Tom Cruise',
    role: 'Full Stack Developer',
    img: '/team/Diego.jpg',
    instagram: 'https://instagram.com/tomcruise',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/tomcruise',
  },
  {
    name: 'Emma Watson',
    role: 'UI/UX Designer',
    img: '/team/Diego.jpg',
    instagram: 'https://instagram.com/emmawatson',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/emmawatson',
  },
  {
    name: 'Chris Evans',
    role: 'React Developer',
    img: '/team/Diego.jpg',
    instagram: 'https://instagram.com/chrisevans',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/chrisevans',
  },
  {
    name: 'Scarlett Johansson',
    role: 'Backend Engineer',
    img: '/team/Diego.jpg',
    instagram: 'https://instagram.com/scarlettjohansson',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/scarlettjohansson',
  },
  {
    name: 'Robert Downey',
    role: 'DevOps Engineer',
    img: '/team/Diego.jpg',
    instagram: 'https://instagram.com/robertdowney',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/robertdowney',
  },
  {
    name: 'Gal Gadot',
    role: 'QA Engineer',
    img: '/team/Diego.jpg',
    instagram: 'https://instagram.com/galgadot',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/galgadot',
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
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href={member.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
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
