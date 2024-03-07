import styles from './Popup.module.scss';
import React from 'react';
const Popup = ({ children ,lowmargin}) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={`${styles.inside} ${lowmargin && styles.lowmargin}`}>{children}</div>
            </div>
        </div>
    );
};
export default Popup;