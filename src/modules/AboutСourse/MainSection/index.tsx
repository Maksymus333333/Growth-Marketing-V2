import React from 'react';

import { JSX } from 'react';
import './styles/styles.css';
import { LoginButton } from '../../shared/LoginButton';

export const MainSection = (): JSX.Element => {
  return (
    <section className="main-section-wrapper">
      <div className="main-section-group">
        <div className="main-section-title">
          <h1 className="main-section-h1">
            Шукаю початківців для менторства у сфері
            <br />
            <p> Growth Marketing Associate </p>
          </h1>
          <p className="main-section-description">
            Привіт! Я хочу допомогти тим, хто тільки починає свій шлях у сфері росту та маркетингу.
          </p>
          <LoginButton />
        </div>
      </div>
    </section>
  );
};
