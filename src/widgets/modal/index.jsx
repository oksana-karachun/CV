import PropTypes from 'prop-types';
import React from 'react';

import { CloseIcon } from '../../shared/icons';
import styles from './styles.scss';

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.wrapper} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.icon} onClick={onClose}>
                    <CloseIcon />
                </div>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};