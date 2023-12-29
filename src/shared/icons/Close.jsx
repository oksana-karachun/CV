import PropTypes from 'prop-types';
import React from 'react';

export const CloseIcon = ({ size = 24, color = 'currentColor' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        role="img"
        aria-label="Close Icon"
    >
        <path
            fill={color}
            fillRule="evenodd"
            d="M6.623 5.278a.95.95 0 1 0-1.345 1.345L10.656 12l-5.378 5.377a.95.95 0 1 0 1.345 1.345L12 13.344l5.377 5.378a.95.95 0 0 0 1.345-1.345L13.344 12l5.378-5.377a.95.95 0 0 0-1.345-1.345L12 10.656 6.623 5.278Z"
            clipRule="evenodd"
        />
    </svg>
);

CloseIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
};
