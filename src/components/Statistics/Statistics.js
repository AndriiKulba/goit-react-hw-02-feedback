import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <div className={s.statistics}>
        <ul className={s.statistics__list}>
          <li className={s.statistics__item}>Good: {good}</li>
          <li className={s.statistics__item}>Neutral: {neutral}</li>
          <li className={s.statistics__item}>Bad: {bad}</li>
          <li className={s.statistics__item}>Total: {total}</li>
          <li className={s.statistics__item}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Statistics;
