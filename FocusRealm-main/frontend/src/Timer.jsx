import { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { updateUserTotalTime, updateUserFocusTime, updateUserBreakTime } from '../services/userdata/index.js';
import { useUserDataContext } from '../state/UserDataContext.jsx';
// import audios from '/src/components/profile/Settings/assets/songs/index.jsx'
const TimerContext = createContext();
import { getReward } from './components/profile/rewardData.js';
import toast from 'react-hot-toast';

export const TimerProvider = ({ children, focusTimeProp, breakTimeProp }) => {
    const { userData, setUserData } = useUserDataContext();
    const [focusTime, setFocusTime] = useState(focusTimeProp);
    const [breakTime, setBreakTime] = useState(breakTimeProp);

    const [title, settitle] = useState('')
    const initialReward = userData ? getReward(userData.totaltime) : 0;
    const [reward, setreward] = useState(initialReward);
    const [initTime, setInitTime] = useState(0);
    const [activeMode, setActiveMode] = useState('focus');
    const [isFocusCompleted, setIsFocusCompleted] = useState(false);
    const [time, setTime] = useState(100);
    const [isActive, setIsActive] = useState(false);
    const [isBreakCompleted, setIsBreakCompleted] = useState(false);
    const [currenttask, setcurrenttask] = useState({});

    const [quotedelay, setquotedelay] = useState(12);
    const [exercisedelay, setexercisedelay] = useState(12)
    const [soundarr, setsoundarr] = useState([]);
    const [noofcycle, setnoofcycle] = useState(0);

    useEffect(() => {
        const data = localStorage.getItem('sound');
        if (data == null) {
            setsoundarr([0, 1, 2, 3, 4])
        }
        else {
            setsoundarr(JSON.parse(data))
        }
    }, [])

    const [Theme, setTheme] = useState(localStorage.getItem('theme'))
    localStorage.setItem('theme', Theme)

    useEffect(() => {
        const update = async () => {
            updateUserFocusTime({
                id: userData.id,
                focustime: focusTime,
            });
            updateUserBreakTime({
                id: userData.id,
                breaktime: breakTime,
            });
        }
        update()
    }, [focusTime, breakTime])


    useEffect(() => {
        switch (activeMode) {
            case 'focus':
                setTime(focusTime);
                setInitTime(focusTime);
                setIsFocusCompleted(false);
                setIsActive(true);
                break;
            case 'break':
                setTime(breakTime);
                setInitTime(breakTime);
                setIsBreakCompleted(false);
                setIsFocusCompleted(false);
                setIsActive(true);
                break;
            default:
                break;
        }
    }, [activeMode]);

    useEffect(() => {
        setIsActive(false);
    }, []);


    useEffect(() => {
        localStorage.setItem('theme', Theme);
        document.body.className = Theme;
    }, [Theme]);

    useEffect(() => {
        if (isActive) {
            if (time > 0) {
                const interval = setInterval(() => {
                    setTime((time) => time - 1);
                }, 1000);

                return () => clearInterval(interval);
            } else if (
                time === 0 &&
                activeMode === 'focus' &&
                !isFocusCompleted
            ) {
                setActiveMode('');
                setIsFocusCompleted(true);

                const focustimesound = new Audio(audios[soundarr[0]].sound)
                focustimesound.play();
                setTimeout(() => {
                    focustimesound.pause();
                    focustimesound.currentTime = 0;
                }, 3000);

                if (Notification.permission !== "granted") {
                    Notification.requestPermission();
                };
                if (Notification.permission === "granted") {
                    const notification = new Notification("focus time completed", {
                        body: "your focus time has been completed ",
                    });
                }

                (async () => {
                    const { error, success, value } = await updateUserTotalTime(
                        userData,
                        initTime
                    );

                    if (success) {
                        setUserData((prev) => ({
                            ...prev,
                            totaltime: prev.totaltime + value,
                        }));
                    } else {
                        console.log(error);
                    }
                })();
                setIsActive(false);
            } else if (time === 0 && activeMode === 'break') {
                if (Notification.permission !== "granted") {
                    Notification.requestPermission();
                };
                if (Notification.permission === "granted") {
                    const notification = new Notification("break time completed", {
                        body: "your break time has been completed ",
                    });
                }

                const focustimesound = new Audio(audios[soundarr[1]].sound)
                focustimesound.play();
                setTimeout(() => {
                    focustimesound.pause();
                    focustimesound.currentTime = 0;
                }, 3000);

                setIsBreakCompleted(true);
                setnoofcycle(noofcycle + 1)
                setIsActive(false);
            }
        }
    }, [time, isActive]);

    const start = () => {
        setIsActive(true);
    };
    const updatetitle = (title) => {
        settitle(title);
    };

    const changeFocusTime = (time) => {
        setFocusTime(time);
        if (activeMode === 'focus') {
            setInitTime(time);
            setTime(time);
        }
        setIsActive(false);
        setIsFocusCompleted(false);
    };

    const changeBreakTime = (time) => {
        setBreakTime(time);
        if (activeMode === 'break') {
            setInitTime(time);
            setTime(time);
        }
        setIsActive(false);
        setIsFocusCompleted(false);
    };

    const restart = () => {
        setTime(initTime);
        setIsActive(false);
    };

    useEffect(() => {
        const taskrunner = () => {
            if (currenttask.noofcycle == noofcycle) {
                currenttask.complete = true;
            }
        }
        taskrunner();
    }, [noofcycle])

    const pause = () => {
        setIsActive(false);
    };

    const setcurrentTask = (task) => {
        setcurrenttask(task);


    }

    const getTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
    };

    const getTimer = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return {
            minutes,
            seconds,
            isRunning: isActive,
            start,
            pause,
            restart,
        };
    };

    return (
        <TimerContext.Provider
            value={{
                timeString: getTime(time),
                timeValue: time,
                initTime,
                timer: getTimer(time),
                totalSeconds: initTime,
                breakStatus: activeMode === 'break',
                activeMode,
                setActiveMode,
                setFocusTime,
                soundarr, setsoundarr,
                Theme, setTheme,
                title, updatetitle,
                quotedelay, setquotedelay,
                exercisedelay, setexercisedelay,
                setBreakTime,
                currenttask, setcurrentTask,
                focusTime, breakTime,
                reward, setreward,
                start,
                restartTimer: restart,
                isFocusCompleted,
                setIsFocusCompleted,
                isBreakCompleted,
                changeFocusTime,
                changeBreakTime,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};

export const useTimerContext = () => {
    const value = useContext(TimerContext);
    return value;
};