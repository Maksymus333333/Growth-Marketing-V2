import React from 'react';
import { JSX } from 'react';
import '../Conditions/styles/style.css';
import BluePath from '../../../assets/icons/blue-path.svg'
import Ellipse from '../../../assets/images/Ellipse1.webp'

export const Conditions = (): JSX.Element => {
  return (
<section className="conditions-section-wrapper">
    <div className='conditions-h2-container'>
      <h2 className="h2-conditions-text">Умови:</h2>
      <img src={BluePath} className='blue-path' alt='BluePath icon' />
      </div>
      <div className="conditions-list">
      <img src={Ellipse} className='ellipse-1' alt='ellipse-img'/>
        <div className="list-points">
          <div className="gap-container">
            <div className="point-restangle-container">
              <span className="point-restangle" />
            </div>
          </div>
          <div className="point-text-container">
            <p className="point-text">
              Рівень англійської мови від <span className="b2-bold">B2</span>.
            </p>
          </div>
        </div>

        <div className="list-points">
          <div className="gap-container">
            <div className="point-restangle-container">
              <span className="point-restangle" />
            </div>
          </div>
          <div className="point-text-container">
            <p className="point-text">
              Це абсолютно безкоштовно, але я можу взяти максимум двох людей, щоб забезпечити якісний менторинг.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
