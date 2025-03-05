import React from 'react';
import { LoginButton } from '../../shared/LoginButton';
import ApplyPhoto from '../../../assets/icons/apply-photo.svg';
import './styles/styles.css';

export const ApplySection = () => {
  return (
    <section className="apply-section-wrapper">
      <div className="apply-section-photo">
        <img src={ApplyPhoto} alt="apply icon" />
      </div>
      <div className="apply-section-text-group">
        <div className="apply-section-text">
          <h2 className="apply-section-title">Як подати заявку?</h2>
          <p className="apply-section-description">
            Напиши мені в особисті повідомлення, розкажи коротко про себе та свій досвід (навіть якщо його немає).
          </p>
        </div>
        <LoginButton style={{ width: '231px', padding: '16px 0px' }} />
      </div>
    </section>
  );
};
