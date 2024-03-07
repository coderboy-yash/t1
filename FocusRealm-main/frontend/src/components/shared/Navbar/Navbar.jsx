import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import styles from './Navbar.module.scss';
import casino from './icons/casino.png';
import clock from './icons/clock.png';
import lotus from './icons/lotus.png';
import user from './icons/user.png';
import character from './icons/character.png'
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../services';
import { useTimerContext } from '../../../state/TimerContext';
import { useEffect } from 'react';
import { useUserDataContext } from '../../../state/UserDataContext';
import Ai from '../../../pages/ai/ai';
import unaccess from './icons/unacess.png';

const Navbar = ({ session }) => {
    const [active, setActive] = useState(window.location.pathname);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [focusTimevalue, setFocusTimevalue] = useState();
    const [breakTimevalue, setBreakTimevalue] = useState();

    const {
        changeFocusTime,
        changeBreakTime,
        timeString,
        activeMode,
        setActiveMode,
        isFocusCompleted,
        isBreakCompleted,
        reward
    } = useTimerContext();

    const { userData, setUserData } = useUserDataContext();

    useEffect(() => {
        if (isFocusCompleted) {
            setActiveMode('break');
            navigate('/games');
        }
    }, [isFocusCompleted]);

    useEffect(() => {
        if (isBreakCompleted) {
            console.log('yes');
            setActiveMode('focus');
            navigate('/');
        }
    }, [isBreakCompleted]);

    useEffect(() => {
        if (active === 'timer') {
            setFocusTimevalue('0');
            setBreakTimevalue('0');
        }
    }, [active]);

    const showTimerPages = [
        '/games',
        '/games/highlow',
        '/games/hangman',
        '/games/trivia',
        '/games/guess-the-logo',
        '/exercise',
        "/ai",
        "/home",
        '/donate',
        '/task',
        '/notes',
        '/profile',
    ];
    const showcharcterpage = [
        '/games',
        '/games/highlow',
        '/games/hangman',
        '/games/trivia',
        '/games/guess-the-logo',
        '/exercise',
        '/task',
        '/profile',
        '/donate,',
        '/notes',
        '/home',
    ];
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
        setMobileMenu(false);
        setActive('/' + path);
    };

    const handleClick = (item) => {
        if (active === item) {
            setActive(window.location.pathname);
        } else {
            setActive(item);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (focusTimevalue !== '0') {
            setUserData((prev) => ({
                ...prev,
                focustime: focusTimevalue * 60,
            }));
            changeFocusTime(focusTimevalue * 60);

        }

        if (breakTimevalue !== '0') {
            setUserData((prev) => ({
                ...prev,
                breaktime: breakTimevalue * 60,
            }));
            changeBreakTime(breakTimevalue * 60);
        }
        setActive("")
    };

    return (
        <>
            <div
                className={`${styles.container} ${activeMode === 'break' && styles.light
                    }`}
            >
                <h1 className='logo' onClick={() => handleNavigation('/')}>
                    Focus<span>Realm</span>
                </h1>

                {session && (
                    <>{showTimerPages.includes(location.pathname) && (
                        <div
                            className={styles.timer}
                            onClick={() => handleNavigation('/')}>
                            <h2>{timeString}</h2>
                        </div>
                    )}
                        <div className={styles.nav}>
                            {activeMode == 'break' && <>

                                <div
                                    className={`${styles.navIcon} ${active == '/games' ? styles.active : ''
                                        }`}
                                    onClick={() => handleNavigation('games')}
                                >
                                    <img src={casino} alt='' title='Games' />
                                </div>

                            </>}
                            {activeMode == 'focus' && <>

                                <div
                                    className={`${styles.navIcon} ${active == '/games' ? styles.active : ''
                                        }`}
                                >
                                    <img src={unaccess} alt='' title='Unvailable' />
                                </div>

                            </>}
                            <div
                                className={`${styles.navIcon} ${active == '/exercise' ? styles.active : ''
                                    }`}
                                onClick={() => handleNavigation('exercise')}
                            >
                                <img src={lotus} alt='' title='Excercise' />
                            </div>
                            <div
                                onClick={() => handleClick('timer')}
                                className={`${styles.navIcon} ${active == 'timer' ? styles.active : ''
                                    }`}
                            >
                                <img src={clock} alt='' title='Timer Settings' />
                            </div>
                            {/* {userData && ( */}
                            <div
                                className={`${styles.navIcon} ${active == 'profile' ? styles.active : ''
                                    }`}
                                onClick={() => handleClick('profile')}
                            >
                                <img src={user} alt='' title='Profile' />
                            </div>
                            {/* )} */}

                            {active === 'timer' && (
                                <div className={styles.navMenu}>
                                    <h1>timer</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor=''>
                                                focus time (in minutes)
                                            </label>
                                            <input
                                                type='number'
                                                onChange={(e) =>
                                                    setFocusTimevalue(
                                                        e.target.value
                                                    )
                                                }
                                                value={focusTimevalue}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor=''>
                                                break time (in minutes)
                                            </label>
                                            <input
                                                type='number'
                                                placeholder='break time (in minutes)'
                                                onChange={(e) =>
                                                    setBreakTimevalue(
                                                        e.target.value
                                                    )
                                                }
                                                value={breakTimevalue}
                                            />
                                        </div>

                                        <button type='submit'>Save</button>
                                    </form>
                                </div>
                            )}

                            {active === 'profile' && (
                                <div className={styles.navMenu}>
                                    {userData &&
                                        <button
                                            onClick={() =>
                                                handleNavigation('profile')
                                            }
                                        >
                                            Profile
                                        </button>
                                    }
                                    <button
                                        onClick={() => {
                                            supabase.auth.signOut();
                                            setActiveMode('focus');
                                        }}
                                    >
                                        Logout
                                    </button>
                                </div>

                            )}

                        </div>

                        <HiOutlineMenuAlt3
                            className={styles.icon}
                            onClick={() => setMobileMenu(true)}
                        />
                    </>
                )}
            </div>
            {/* {showcharcterpage.includes(location.pathname) && (
                <div onClick={() => {
                    handleClick('ai')
                }} className={styles.ai}>
                    <img src={character} alt="" />
                </div>
            )} */}
            {/* {active === 'ai' && (
                <div className={styles.aiblock}>
                    <Ai />
                </div>
            )} */}


            {mobileMenu && (
                <div className={styles.mobileNav}>
                    <HiX
                        className={styles.mobileNavIcon}
                        onClick={() => setMobileMenu(false)}
                    />

                    <div className={styles.mobileNavMenu}>
                        <button onClick={() => handleNavigation('')}>
                            Home
                        </button>

                        {
                            active === 'break' &&
                            <>
                                <button onClick={() => handleNavigation('games')}>
                                    Games
                                </button>
                            </>
                        }

                        <button onClick={() => handleClick('timer')}>
                            Timer
                        </button>
                        {active === 'timer' && (
                            <div className={styles.navMenu}>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor=''>
                                            focus time (in minutes)
                                        </label>
                                        <input
                                            type='number'
                                            onChange={(e) =>
                                                setFocusTimevalue(
                                                    e.target.value
                                                )
                                            }
                                            value={focusTimevalue}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor=''>
                                            break time (in minutes)
                                        </label>
                                        <input
                                            type='number'
                                            placeholder='break time (in minutes)'
                                            onChange={(e) =>
                                                setBreakTimevalue(
                                                    e.target.value
                                                )
                                            }
                                            value={breakTimevalue}
                                        />
                                    </div>
                                    <button type='submit'>Save</button>
                                </form>
                            </div>
                        )}
                        <button onClick={() => handleNavigation('exercise')}>
                            Exercise
                        </button>
                        <button onClick={() => handleNavigation('profile')}>
                            Profile
                        </button>
                        <button
                            onClick={() => {
                                supabase.auth.signOut();
                                setActiveMode('focus');
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
export default Navbar;
