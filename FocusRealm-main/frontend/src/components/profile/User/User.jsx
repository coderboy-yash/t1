import React from 'react';
import styles from './User.module.scss';
import avatar from './assets/avatar.png';
import { useTimerContext } from '../../../state/TimerContext';

const User = ({ user }) => {
    const { activeMode } = useTimerContext();

    return (
        <div
            className={`${styles.container} ${
                activeMode === 'break' && 'blurBg'
            }`}
        >
            <div className={styles.image}>
                <img src={`https://robohash.org/${user?.user_metadata.name}`} alt='' />
            </div>

            <div className={styles.content}>
                <h2>{user?.user_metadata.name}</h2>
                <p>{user?.email}</p>
            </div>
        </div>
    );
};

export default User;
