import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export const Button = ({
  title,
  fill = 'primary',
  type = 'button',
  onClick = Function.prototype,
}) => {
  return (
    <button
      className={classNames(styles.wrapper, styles[fill])}
      onClick={() => onClick()}
      type={type}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  fill: PropTypes.oneOf(['primary', 'secondary', 'transparent', 'white']),
  onClick: PropTypes.func,
};
export default Button;
