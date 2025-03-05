import React from 'react';

import { JSX } from 'react';
import './styles/styles.css';
import { Interests } from '../../modules/AboutСourse/Interests';
import { PinkSection } from '../../modules/AboutСourse/PinkSection';
import { MainSection } from '../../modules/AboutСourse/MainSection';
import { Propositions } from '../../modules/AboutСourse/Propositions';

export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page-wrapper">
      <MainSection />
      <Interests />
      <div className="full-width">
        <PinkSection />
      </div>
      <Propositions/>
    </div>
  );
};
