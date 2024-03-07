import { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { supabase } from '../services';

const PlayerContext = createContext();

export const PlayerProvider = ({ children, songProp, audioPause, indexProp }) => {

    const [currentAudio, setCurrentAudio] = useState(songProp);
    const [isCurrentAudioPause, setIsCurrentAudioPause] = useState(true);
    const [songs, setSongs] = useState([]);
    const [song, setSong] = useState(null);
    const [index, setIndex] = useState(indexProp);

    useEffect(() => {
        (async () => {
            let { data: songs, error } = await supabase
                .from('songs')
                .select('*')

            setSongs(songs);
            setSong(songs[0]);
            setCurrentAudio(new Audio(songs[0].link));
        })();
    }, []);
    return (
        <PlayerContext.Provider value={{ currentAudio, setCurrentAudio, isCurrentAudioPause, setIsCurrentAudioPause, songs, setSongs, index, setIndex, song, setSong }}>
            {children}
        </PlayerContext.Provider>
    );
}

export const usePlayerContext = () => useContext(PlayerContext);