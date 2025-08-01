import React from 'react';
import './TeamSection.css';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Vin Diesel',
    role: 'Senior App Developer',
    img: 'https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg',
    instagram: 'https://instagram.com/vindiesel',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/vindiesel',
  },
  {
    name: 'David Corner',
    role: 'Front End Developer',
    img: 'https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg',
    instagram: 'https://instagram.com/davidcorner',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/davidcorner',
  },
  {
    name: 'Tom Cruise',
    role: 'Full Stack Developer',
    img: 'https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg',
    instagram: 'https://instagram.com/tomcruise',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/tomcruise',
  },
  {
    name: 'Emma Watson',
    role: 'UI/UX Designer',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    instagram: 'https://instagram.com/emmawatson',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/emmawatson',
  },
  {
    name: 'Chris Evans',
    role: 'React Developer',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    instagram: 'https://instagram.com/chrisevans',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/chrisevans',
  },
  {
    name: 'Scarlett Johansson',
    role: 'Backend Engineer',
    img: 'https://randomuser.me/api/portraits/women/55.jpg',
    instagram: 'https://instagram.com/scarlettjohansson',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/scarlettjohansson',
  },
  {
    name: 'Robert Downey',
    role: 'DevOps Engineer',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    instagram: 'https://instagram.com/robertdowney',
    whatsapp: 'https://wa.me/1234567890',
    linkedin: 'https://linkedin.com/in/robertdowney',
  },
  {
    name: 'Gal Gadot',
    role: 'QA Engineer',
    img: 'https://randomuser.me/api/portraits/women/52.jpg',
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
