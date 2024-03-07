import React from 'react';
import styles from './Streak.module.scss';
import Button from '../../shared/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useTimerContext } from '../../../state/TimerContext';

const Streak = () => {
    const navigate = useNavigate();
    const { activeMode } = useTimerContext();
    return (
        <div
            className={`${styles.container} ${
                activeMode === 'break' && 'blurBg'
            }`}
        >
            <div className={styles.btn}>
                <Button
                    title={'Take test'}
                    onClick={() => {
                        navigate('/test');
                    }}
                />
            </div>

            <p>Test</p>
        </div>
    );
};

export default Streak;
