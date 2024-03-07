import React, { useState } from 'react';
import styles from './Reward.module.scss';
import { useTimerContext } from '../../../state/TimerContext';
import { useUserDataContext } from '../../../state/UserDataContext';
import { getReward } from '../rewardData.js';
import Popup from '../../shared/Popup/Popup';

const Reward = () => {
    const { activeMode,reward } = useTimerContext();
    const { userData } = useUserDataContext();
    const [popup, setPopup] = useState(false);

    return (
        <>
            <div
                className={`${styles.container} 
                ${
                    activeMode === 'break' && 'blurBg'
                }`
            }
                onClick={() => {
                    setPopup(true);
                }}
            >
                <img src={reward.reward} alt='' />
                <p>{reward.name}</p>
            </div>
            {popup && (
                <Popup>
                    <div className={styles.Popup}>
                        <img src={reward.reward} alt='' />
                        <button
                            onClick={() => {
                                setPopup(false);
                            }}
                        >
                            close
                        </button>
                    </div>
                </Popup>
            )}
        </>
    );
};

export default Reward;
