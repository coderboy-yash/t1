import React from 'react';
import styles from './Card.module.scss';

const Card = ({ children, transparent, light ,lowmargin}) => {
    return (
        <div
            className={`${styles.container} ${light && styles.light} ${
                transparent && styles.transparent
            }`}
        >
            <div className={`${styles.wrapper}  ${lowmargin && styles.lowmargin}`}>{children}</div>
        </div>
    );
};

export default Card;
