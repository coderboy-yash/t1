import React from 'react';
import styles from './GradientButton.module.scss';

const GradientButton = ({ title, onClick }) => {
    return (
        <button className={styles.container} onClick={onClick}>
            {title}
        </button>
    );
};

export default GradientButton;
