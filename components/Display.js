import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { amount } = props; // children is the whole things between <Display> </Display>
  return <p>{ amount }</p>;
}

// Display.defaultProps = {
//   amount: 0,
// };

Display.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default Display;
