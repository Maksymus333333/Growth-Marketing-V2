import React from 'react';
import './styles/styles.css';

interface LoginButtonProps {
  style?: React.CSSProperties;
}

export const LoginButton = ({ style }: LoginButtonProps) => {
  return (
    <button className="main-section-button" style={style}>
      Записатися
    </button>
  );
};
