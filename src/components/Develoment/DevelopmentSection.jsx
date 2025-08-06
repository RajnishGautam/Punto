import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DevelopmentLanding from './DevelopmentLanding';
import WebServices from './WebServices';
import AppServices from './AppServices';
import HeroWithVideo from '../common/Contactsection/Contactsection';

const DevelopmentSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure render
      }
    } else {
      // Scroll to top on load if no hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <DevelopmentLanding />
      
      <div id="web-services">
        <WebServices />
      </div>

      <div id="app-services">
        <AppServices />
      </div>

      <HeroWithVideo />
    </div>
  );
};

export default DevelopmentSection;
