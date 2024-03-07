import React from 'react';
import styles from './Button.module.scss';

const Button = ({
    title,
    onClick,
    outline,
    circular,
    small,
    disable,
    noRadius,
    noEvents,
    fontWeight,
    type,
}) => {
    return (
        <button
            className={`${styles.container} ${outline ? styles.outline : ''} ${
                circular ? styles.circular : ''
            } ${small ? styles.small : ''} ${disable ? styles.disable : ''} ${
                noRadius ? styles.noRadius : ''
            } ${noEvents ? styles.noEvents : ''}`}
            style={{
                fontWeight,
            }}
            onClick={onClick}
            disabled={disable}
            dangerouslySetInnerHTML={{ __html: title }}
            type={type == 'submit' ? 'submit' : 'button'}
        ></button>
    );
};

export default Button;
