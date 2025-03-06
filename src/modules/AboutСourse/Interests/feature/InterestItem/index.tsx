import React from 'react';
import './styles/styles.css';

interface InterestItemProps {
  iconSrc: string;
  description: string;
}

export const InterestItem = ({ iconSrc, description }: InterestItemProps) => {
  return (
    <div className="interests-item">
      <div className="interests-icon">
        <img src={iconSrc} alt="Interest Icon" />
      </div>
      <p>{description}</p>
    </div>
  );
};
