import React from 'react';
import styles from './GradientInput.module.scss';

const GradientInput = (props) => {
    return <input className={styles.container} required {...props}></input>;
};

export default GradientInput;
