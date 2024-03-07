import stage1 from '/src/components/profile/assets/updated white models[1]/updated white models/1-f(white).png';
import stage2 from '/src/components/profile/assets/updated white models[1]/updated white models/2_f(white).png';
import stage3 from '/src/components/profile/assets/updated white models[1]/updated white models/3(new).png';
import stage4 from '/src/components/profile/assets/updated white models[1]/updated white models/4(white).png';
import stage5 from '/src/components/profile/assets/updated white models[1]/updated white models/5(white-new).png';
import stage6 from '/src/components/profile/assets/updated white models[1]/updated white models/6(white-new).png';
import stage7 from '/src/components/profile/assets/updated white models[1]/updated white models/7(white).png';
import stage8 from '/src/components/profile/assets/updated white models[1]/updated white models/model2.png';
import stage9 from '/src/components/profile/assets/updated white models[1]/updated white models/model3.png';

export const rewardData = [
    {
        name: 'stage 1',
        reward: stage1,
        requiredTime: 0,
    },
    {
        name: 'stage 2',
        reward: stage2,
        requiredTime: 60 * 60 * 48,
    },
    {
        name: 'stage 3',
        reward: stage3,
        requiredTime: 60 * 120 * 48,
    },
    {
        name: 'stage 4',
        reward: stage4,
        requiredTime: 60 * 180 * 48,
    },
    {
        name: 'stage 5',
        reward: stage5,
        requiredTime: 60 * 240 * 48,
    },
    {
        name: 'stage 6',
        reward: stage6,
        requiredTime: 60 * 300 * 48,
    },
    {
        name: 'stage 7',
        reward: stage7,
        requiredTime: 60 * 360 * 48,
    },
    {
        name: 'stage 8',
        reward: stage8,
        requiredTime: 60 * 420 * 48,
    },
    {
        name: 'stage 9',
        reward: stage9,
        requiredTime: 60 * 480 * 48,
    },
];

export function getReward(totaltime) {
    if (totaltime < 60 * 48 * 60) {
        return rewardData[0];
    } else if (totaltime < 60 * 48 * 120) {
        return rewardData[1];
    } else if (totaltime < 60 * 48 * 180) {
        return rewardData[2];
    } else if (totaltime < 60 * 48 * 240) {
        return rewardData[3];
    } else if (totaltime < 60 * 48 * 300) {
        return rewardData[4];
    } else if (totaltime < 60 * 48 * 360) {
        return rewardData[5];
    } else if (totaltime < 60 * 48 * 420) {
        return rewardData[6];
    } else if (totaltime < 60 * 48 * 480) {
        return rewardData[7];
    } else {
        return rewardData[8];
    }
}
