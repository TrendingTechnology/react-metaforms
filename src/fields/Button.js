import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, disabled, onButtonClick }) => (
  <div className="formField">
    <button
      disabled={disabled}
      onClick={onButtonClick}
      type="button"
    >
      {label}
    </button>
  </div>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  onButtonClick: null,
};

export default Button;
