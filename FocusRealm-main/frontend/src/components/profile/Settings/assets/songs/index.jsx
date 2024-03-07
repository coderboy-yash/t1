import sound1 from './ring1.mp3';
import sound2 from './ring2.wav'
import sound3 from "./ring6.wav"
import sound4 from "./ring7.wav"
import sound5 from "./ring3.wav"
import sound6 from "./ring8.wav"
import sound8 from "./ring4.mp3"
import sound7 from "./ring5.mp3"
const Ringtones = () => {
    const data = [{
        sound: sound1,
        name: 'Buzz'
    },
    {
        sound: sound2,
        name: 'Ding'
    }, {
        sound: sound3,
        name: 'Chime'
    }, {
        sound: sound4,
        name: 'Ping'
    }, {
        sound: sound5,
        name: 'pop'
    }, {
        sound: sound6,
        name: 'Beep'
    }, {
        sound: sound7,
        name: 'ring'
    }, {
        sound: sound8,
        name: 'Alert'
    },
    {
        sound: 'dsds dskhd',
        name: 'none'
    }
    ]
    return data;
};
// 
// 
// 
// 
// 
// 
export default Ringtones();