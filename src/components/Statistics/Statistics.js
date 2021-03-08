import React from 'react';
import PropTypes from 'prop-types';
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

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};
Statistics.protoType = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistics;
