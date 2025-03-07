import React from 'react';
import AiEditSpark from '../../../assets/icons/AiEditSpark.svg';
import BrowthAdd from '../../../assets/icons/browser-add--app-code.svg';
import HandHeld from '../../../assets/icons/hand-held-tablet-drawing.svg';
import GoogleMedia from '../../../assets/icons/google--media.svg';
import WebcamVideo from '../../../assets/icons/webcam-video.svg';
import SendEmail from '../../../assets/icons/send-email.svg';
import StartBadge from '../../../assets/icons/star-badge.svg';
import BrowserWebsite from '../../../assets/icons/browser-website.svg';
import GraduationCap from '../../../assets/icons/graduation-cap.svg';

import './styles/styles.css';
import { InterestItem } from './feature/InterestItem';

const interestsData = [
  {
    iconSrc: AiEditSpark,
    description: 'Цікавишся рерайтингом контенту за допомогою AI',
  },
  {
    iconSrc: HandHeld,
    description: 'Бажаєш навчитися створювати креативи в Canva',
  },
  {
    iconSrc: BrowthAdd,

    description: 'Готовий(-а) публікувати матеріали на WordPress',
  },
  {
    iconSrc: GoogleMedia,
    description: 'Хочеш освоїти налаштування реклами в Google Ads',
  },
  {
    iconSrc: WebcamVideo,
    description: "Маєш бажання створювати відео (не обов'язково, але буде плюсом)",
  },
  {
    iconSrc: SendEmail,
    description: 'Прагнеш навчитися створювати презентації, оформлювати email-розсилки, лід-магніти та інше',
  },
  {
    iconSrc: StartBadge,
    description: 'Отримуєш бонусні бали за досвід у тестуванні та звітності стратегій, креативів і цільових сторінок',
  },
  {
    iconSrc: BrowserWebsite,
    description: 'Впевнено володієш формулами в Google Sheets/Excel та Google Slides',
  },
  {
    iconSrc: GraduationCap,
    description: 'Готовий(-а) вчитися й докладати зусиль',
  },
];

export const Interests = () => {
  return (
    <section className="interests-wrapper">
      <div className="interests-container">
        <h2 className="interests-title">Якщо ти:</h2>
        <div className="interests-grid">
          {interestsData.map((item, i) => (
            <InterestItem key={i} iconSrc={item.iconSrc} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};
