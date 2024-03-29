import PropTypes from 'prop-types';
import React from 'react';

export const ChevronUp = ({ size = 24, color = 'currentColor' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            fill={color}
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
    </svg>
);

ChevronUp.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
};
