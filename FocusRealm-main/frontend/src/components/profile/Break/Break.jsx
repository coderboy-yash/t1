import React from 'react';
import styles from './Break.module.scss';
import { useTimerContext } from '../../../state/TimerContext';

const Break = ({ time }) => {
    const { activeMode } = useTimerContext();
    return (
        <div
            className={`${styles.container} ${
                activeMode === 'break' && 'blurBg'
            }`}
        >
            <h2>{time}</h2>
            <p>Break Time</p>
        </div>
    );
};

export default Break;
