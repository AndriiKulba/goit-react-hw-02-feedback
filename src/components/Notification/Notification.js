import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => (
  <div>
    <h4 className={s.title}>{message}</h4>
  </div>
);

Notification.propType = {
  message: PropTypes.string.isRequired,
};
export default Notification;
