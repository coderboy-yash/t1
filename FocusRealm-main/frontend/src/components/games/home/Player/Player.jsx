import React from 'react';
import styles from './Player.module.scss';
import left from './assets/left.png';
import right from './assets/right.png';
import play from './assets/play.png';
import pause from './assets/pause.png';
import { usePlayerContext } from '../../../state/PlayerContext';

const Player = () => {
    const { currentAudio, setCurrentAudio, isCurrentAudioPause, setIsCurrentAudioPause, songs, index, setIndex, song, setSong } = usePlayerContext();

    const playAudio = () => {
        setIsCurrentAudioPause(false);
        currentAudio.play();
        currentAudio.addEventListener('ended', nextAudio);
    };

    const pauseAudio = () => {
        currentAudio.pause();
        setIsCurrentAudioPause(true);
    };

    const nextAudio = () => {
        const newIndex = index + 1;
        setIsCurrentAudioPause(false);
        setSong(songs[newIndex]);
        const newAudio = new Audio(songs[newIndex].link);
        setCurrentAudio(newAudio);
        setIndex(newIndex);

        newAudio.addEventListener('loadedmetadata', () => {
            newAudio.play();
        });
        currentAudio.pause();
        currentAudio.removeEventListener('ended', nextAudio); // Remove event listener to prevent memory leaks
    };

    const previousAudio = () => {
        currentAudio.pause();
        const newIndex = index - 1;
        setIsCurrentAudioPause(false);
        setSong(songs[newIndex]);
        const newAudio = new Audio(songs[newIndex].link);
        setCurrentAudio(newAudio);
        setIndex(newIndex);

        newAudio.addEventListener('loadedmetadata', () => {
            newAudio.play();
        });
    };

    if (songs.length === 0) {
        return <></>;
    }

    return (
        <div className={styles.container} title="Music player">
            <div className={styles.info}>
                <h1>{song.name}</h1>
                <p>{song.artist}</p>
            </div>
            <div className={styles.controls}>
                {index !== 0 && (
                    <img src={left} alt='' onClick={previousAudio} />
                )}
                <img
                    src={isCurrentAudioPause ? play : pause}
                    alt=''
                    onClick={(e) => {
                        currentAudio.paused ? playAudio(e) : pauseAudio(e);
                    }}
                />
                {index !== songs.length - 1 && (
                    <img src={right} alt='' onClick={nextAudio} />
                )}
            </div>
            <input
                type='range'
                min='0'
                max='10'
                onChange={(e) => {
                    currentAudio.volume = e.target.value / 10;
                }}
            />
        </div>
    );
};

export default Player;
