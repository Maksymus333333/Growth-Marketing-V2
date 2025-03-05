import React from 'react';
import { JSX } from 'react';
import '../Propositions/styles/style.css';

import TaskList from '../../../assets/icons/task-list.svg';
import PinkPath from '../../../assets/icons/path.svg';
import Collaborations from '../../../assets/icons/collaborations-idea.svg';
import OfficeWorker from '../../../assets/icons/office-worker.svg';
import GroupMeeting from '../../../assets/icons/group-meeting.svg';
import Handshake from '../../../assets/icons/business-handshake.svg';

const PropositionItem = ({ icon, text, containerClass }: { icon: string; text: string; containerClass: string }) => (
  <div className={containerClass}>
    <div className='icon-list-container'>
      <img src={icon} alt='icon' className='proposition-icon' />
    </div>
    <p className='icon-list-text'>{text}</p>
  </div>
);

export const Propositions = (): JSX.Element => {
  return (
    <section className='proposition-container-wrapper'>
      <div className='left-proposition-container'>
        <div className='proposition-h2-container'>
          <h2 className='proposition-h2'>Що я пропоную?</h2>
          <img src={PinkPath} className='pink-path' alt='PinkPath icon' />
        </div>
        <PropositionItem 
          icon={TaskList} 
          text='Практичні завдання, які підготують до реальної роботи.'
          containerClass='proposition-icon-text-pink-container'
        />
      </div>

      <div className='middle-proposition-container'>
        <PropositionItem 
          icon={Collaborations} 
          text='Персоналізовану навчальну програму, адаптовану під твій рівень.'
          containerClass='proposition-icon-text-blue-container'
        />
        <PropositionItem 
          icon={OfficeWorker} 
          text='Допомогу в створенні портфоліо та розвитку професійних навичок.'
          containerClass='proposition-icon-text-blue-container'
        />
      </div>

      <div className='right-proposition-container'>
        <PropositionItem 
          icon={GroupMeeting} 
          text='Регулярні менторські сесії для розбору складних тем і підтримки.'
          containerClass='proposition-icon-text-pink-container'
        />
        <PropositionItem 
          icon={Handshake} 
          text='Сприяння в працевлаштуванні на прямі контракти в закордонні компанії з місячною зарплатою від $4,000 до $6,500.'
          containerClass='proposition-icon-text-pink-container'
        />
      </div>
    </section>
  );
};