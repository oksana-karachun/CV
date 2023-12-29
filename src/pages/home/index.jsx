import React from 'react';
import { Button, Typography } from 'shared/ui';

import { config } from '../../shared/config';
import styles from './styles.scss';

const Home = () => {
    const handleAboutMeClick = () => {
        window.scrollTo({
            top: window.innerHeight + 35,
            behavior: 'smooth',
        });
    };

    const handleClick = () => console.log('clicked');

    return (
        <div className={styles.wrapper}>
            <Typography
                title={config.title}
                tag="h1"
                className={styles.stack}/>
            <Typography title="Hello, and welcome to my portfolio! 👋🏻"/>
            <Typography className={styles.about} title={config.description}/>
            <Button title="About me" onClick={handleAboutMeClick}/>
            <Button title="Hire me" onClick={handleClick}/>
            <Button title="Download CV" onClick={handleClick}/>
        </div>
    );
};
export default Home;