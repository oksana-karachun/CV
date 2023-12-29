import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import Typography from '../../shared/ui/Typography';
import styles from './styles.scss';

export const BurgerMenu = ({ pages = [] }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    }, []);

    const onLinkClick = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return (
        <>
            <label htmlFor="check" className={styles.burger}>
                <input type="checkbox" id="check" checked={isMenuOpen} onChange={toggleMenu} />
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div className={classNames(styles.menu, isMenuOpen ? styles.active : '')}>
                {pages.map(({ title }) => (
                    <Typography key={title} tag={'a'} href={'#about'} onClick={onLinkClick} title={title} className={styles.link}/>
                ))}
            </div>
        </>
    );
};

BurgerMenu.propTypes = {
    pages: PropTypes.array.isRequired,
    handleLinkOnClick: PropTypes.func,
};

BurgerMenu.defaultProps = {
    pages: [],
    handleLinkOnClick: Function.prototype,
};