import React from 'react';
import s from './Feedback.module.css';
import { v4 as uuidv4 } from 'uuid';

const Feedback = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={uuidv4()}
      type="button"
      name={option}
      className={s.button}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

export default Feedback;
