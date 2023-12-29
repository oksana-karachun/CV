import React from 'react';
import { Typography } from 'shared/ui';

import { config } from '../../shared/config';
import { BurgerMenu } from '../menu';
import styles from './styles.scss';

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <div className={styles.image} />
                <Typography title="Karachun" />
            </div>
            <BurgerMenu pages={config.pages}/>
        </header>
    );
};

export default Header;