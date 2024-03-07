import React from 'react';
import styles from './Focus.module.scss';
import { useTimerContext } from '../../../state/TimerContext';

const Focus = ({ time }) => {
    const { activeMode } = useTimerContext();
    return (
        <div
            className={`${styles.container} ${
                activeMode === 'break' && 'blurBg'
            }`}
        >
            <h2>{time}</h2>
            <p>Total Focus Time</p>
        </div>
    );
};

export default Focus;
