import React from 'react';
import './BrandingSection.css';

import BrandingLanding from './BrandingLanding';
import LogoDesignWork from './works/LogoDesignWork';
import BrandIdentityWork from './works/BrandIdentityWork';
import PackagingDesignWork from './works/PackagingDesignWork';
import RebrandingWork from './works/RebrandingWork';

const BrandingSection = () => {
  return (
    <div className="branding-sections-wrapper">
      <section className="branding-section"><BrandingLanding /></section>
      <section className="branding-section"><LogoDesignWork /></section>
      <section className="branding-section"><BrandIdentityWork /></section>
      <section className="branding-section"><PackagingDesignWork /></section>
      <section className="branding-section"><RebrandingWork /></section>
    </div>
  );
};

export default BrandingSection;
