import React, { Suspense } from 'react';
import { JSX } from 'react';
import './styles/styles.css';

const LoginButton = React.lazy(() =>
  import('../../shared/LoginButton').then(module => ({
    default: module.LoginButton,
  }))
);

export const MainSection = (): JSX.Element => {
  return (
    <section className="main-section-wrapper">
      <div className="main-section-group">
        <div className="main-section-title">
          <h1 className="main-section-h1">
            Шукаю початківців для менторства у сфері
            <br />
            Growth Marketing Associate
          </h1>
          <p className="main-section-description">
            Привіт! Я хочу допомогти тим, хто тільки починає свій шлях у сфері росту та маркетингу.
          </p>
          <Suspense fallback={<div>Завантаження…</div>}>
            <LoginButton/>
          </Suspense>
        </div>
      </div>
    </section>
  );
};