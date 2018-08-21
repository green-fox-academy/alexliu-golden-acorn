import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { onClick, name } = props;
  return <button type="button" onClick={onClick}>{name}</button>;
}

Button.defaultProps = {
  onClick: () => {},
  name: 'unnamed',
};

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default Button;
