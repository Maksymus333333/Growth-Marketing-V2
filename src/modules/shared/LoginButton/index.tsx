import React from 'react';
import './styles/styles.css';
import { useNavigate } from 'react-router-dom';

interface LoginButtonProps {
  style?: React.CSSProperties;
}

export const LoginButton = ({ style }: LoginButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/thanks');
  };
  return (
    <button className="main-section-button" onClick={handleClick} style={style}>
      Записатися
    </button>
  );
};
