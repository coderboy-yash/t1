import React from 'react';
import styles from './Header.module.scss';
const Header = ({ title, description }) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Header;
