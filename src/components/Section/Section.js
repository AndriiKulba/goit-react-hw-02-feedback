import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);
Section.propType = { title: PropTypes.string };
export default Section;
