import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

export const Typography = ({
  title,
  className,
  href,
  onClick,
  tag: Tag = 'p',
}) => {
  return (
    <Tag className={classNames(styles.wrapper, className)} href={href} onClick={onClick}>
      {title}
    </Tag>
  );
};

Typography.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  tag: PropTypes.string,
  onClick: PropTypes.func,
};
export default Typography;