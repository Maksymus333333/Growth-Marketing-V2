import React from 'react';

import { JSX } from 'react';
import './styles/styles.css';
import { Interests } from '../../modules/Home/Interests';
import { PinkSection } from '../../modules/Home/PinkSection';



export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page-wrapper">
      <div className="full-width">
       <Interests/>
       <PinkSection/>
      </div>

      
    </div>
  );
};
