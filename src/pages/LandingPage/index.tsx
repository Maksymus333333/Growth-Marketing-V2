import React from 'react';

import { JSX } from 'react';
import './styles/styles.css';
import { Interests } from '../../modules/AboutСourse/Interests';
import { PinkSection } from '../../modules/AboutСourse/PinkSection';
import { MainSection } from '../../modules/AboutСourse/MainSection';
import { Propositions } from '../../modules/AboutСourse/Propositions';
import { ApplySection } from '../../modules/AboutСourse/ApplySection';
import { Conditions } from '../../modules/AboutСourse/Conditions';

export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page-wrapper">
      <div className="full-width">
        <MainSection />
      </div>
      <Interests />
      <div className="full-width">
        <PinkSection />
      </div>
      <Propositions/>
      <Conditions/>
      <ApplySection />
    </div>
  );
};
