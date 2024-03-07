import React from 'react';
import { useTimerContext } from '../../../state/TimerContext';

const SmallTimer = () => {
    const { timer } = useTimerContext();
    return (
        <div>
            {timer.minutes}:{timer.seconds}
        </div>
    );
};

export default SmallTimer;
