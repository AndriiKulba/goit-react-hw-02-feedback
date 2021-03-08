import React from 'react';
import s from './Notification.module.css';

const Notification = ({ message }) => (
  <div>
    <h4 className={s.title}>{message}</h4>
  </div>
);
export default Notification;
