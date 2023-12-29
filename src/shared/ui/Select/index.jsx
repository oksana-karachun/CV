import PropTypes from 'prop-types';
import React, { useState } from 'react';

// import { arrow } from 'app/icons';
import styles from './styles.scss';

export const Select = ({ name, value, options, onChange }) => {
  const [currentValue, setCurrentValue] = useState(value || '');
  const handleSelectChange = (event) => {
    const value = event.target.value;

    setCurrentValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={styles.wrapper}>
      {/*<img src={arrow} alt="arrow" className={styles.icon} />*/}
      <select
        name={name}
        id={name}
        value={currentValue}
        onChange={handleSelectChange}
        className={styles.select}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.string
};
export default Select;
