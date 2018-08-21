import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { children } = props;
  return <p>{children}</p>;
}

Display.defaultProps = {
  children: 0,
};

Display.propTypes = {
  children: PropTypes.number,
}

export default Display;
