import React, { useEffect, useState } from 'react';

import { ChevronUp } from '../../../shared/icons';
import styles from './styles.scss';

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 800);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const scrollHandler = () => handleScroll();
        window.addEventListener('scroll', scrollHandler, { passive: true });

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button className={styles.button} onClick={scrollToTop}>
                    <ChevronUp/>
                </button>
            )}
        </div>
    );
};
