import React, { useEffect, useRef, useState } from 'react';
import styles from './Timer.module.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTimerContext } from '../../../state/TimerContext';
import play from './assets/play.png';
import pause from './assets/pause.png';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Settings from './Settings';

const Timer = ({ takeBreak, togglePopup, startFocus, endFocus }) => {
    const navigate = useNavigate();
    const {
        timer,
        totalSeconds: total,
        isFocusCompleted,
        setActiveMode,
        activeMode,
        currenttask,setcurrentTask,
        isBreakCompleted,
    } = useTimerContext();

    useEffect(() => {
        if (isFocusCompleted) {
            toast('your focus time has been completed');
            setActiveMode('break');
            navigate('/games');
        }
    }, [isFocusCompleted]);

    const percentage =
        ((total -
            (timer.minutes === 0
                ? timer.seconds
                : timer.minutes * 60 + timer.seconds)) /
            total) *
        100;

    const startTimer = () => {
        startFocus();
        timer.start();
    };

    const endTimer = () => {
        endFocus();
        timer.pause();
    };

    return (
        <div 
            className={`${styles.forth} ${activeMode === 'break' && styles.light
                }`}
        >
            <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    pathTransition:
                        percentage === 0
                            ? 'none'
                            : 'stroke-dashoffset 1s ease-in',
                    pathColor: activeMode === 'focus' ? 'var(--loader-color)' : 'var(--loader-color)',
                    tailColor: 'rgba(255,255,255,.2)',
                    trailColor: 'transparent',
                })}
                strokeWidth={2}
            />

            <div className={styles.container}>
            {currenttask.complete || !currenttask.title  ? <></> : <div className={styles.title}>
                <label htmlFor="" onClick={() => {
                            navigate('/task')
                        
                        }}>{currenttask.title}</label>
                        </div>}
                <h1
                    onClick={() => {
                        setIsPaused(!isPaused);
                        isPausedRef.current = !isPaused;
                    }}
                >
                    {timer.minutes < 10 && '0'}
                    {timer.minutes +
                        ':' +
                        (timer.seconds < 10 ? '0' : '') +
                        timer.seconds}
                </h1>

                <div className={styles.play}>
                    {timer.isRunning ? (
                        <img title='Timer'
                            src={pause}
                            onClick={() => {
                                timer.isRunning ? endTimer() : startTimer();
                            }}
                        />
                    ) : (
                        <img title='Timer'
                            src={play}
                            onClick={() => {
                                timer.isRunning ? endTimer() : startTimer();
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timer;
