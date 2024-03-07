import React from 'react';
import styles from './Graph.module.scss';
import { rewardData } from '../rewardData';
import { useUserDataContext } from '../../../state/UserDataContext';

const Graph = () => {
    const { userData } = useUserDataContext();
    return (
        <div className={styles.container}>
            <div className={styles.overcontainer}>
                Coming Soon
            </div>
            <h2>Upcoming Rewards</h2>

            <div className={styles.rewards}>
                {rewardData.map((item, i) => (
                    <div key={i}>
                        <img
                            style={{
                                filter:
                                    userData.totaltime >= item.requiredTime
                                        ? 'none'
                                        : 'blur(4px)',
                            }}
                            src={item.reward}
                            alt=''
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Graph;