import React, { useEffect, useRef, useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import styles from './Hangman.module.scss';
import Button from '../../../components/shared/Button/Button';
import image0 from './images/image0.jpg';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import { data } from './data';
import { useTimerContext } from '../../../state/TimerContext';

const WORDS = ['REACT', 'JAVASCRIPT', 'COMPONENT', 'FUNCTION', 'HOOKS'];
const buttons = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

const imageMap = {
    0: image0,
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
};

function Hangman() {
    const [word, setWord] = useState('_');
    const [hint, setHint] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const { activeMode } = useTimerContext();

    React.useEffect(() => {
        startGame();
    }, []);

    function startGame() {
        const randomIndex = Math.floor(Math.random() * data.length);
        setWord(data[randomIndex].name);
        setHint(data[randomIndex].hint);
        setGuesses([]);
        setIncorrectGuesses(0);
        setGameOver(false);
    }

    function handleGuess(letter) {
        if (!word.toLowerCase().includes(letter.toLowerCase())) {
            setIncorrectGuesses(incorrectGuesses + 1);
        }

        setGuesses([...guesses, letter]);
    }

    function getHiddenWord() {
        return word
            .split('')
            .map((letter) =>
                guesses.includes(letter.toUpperCase()) ? letter : '_'
            )
            .join(' ');
    }

    function getGameStatus() {
        if (incorrectGuesses >= 6) {
            return 'lost';
        }
        if (getHiddenWord().includes('_')) {
            return 'playing';
        }
        return 'won';
    }

    function handleKeyPress(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            const letter = event.key.toUpperCase();
            if (!guesses.includes(letter)) {
                handleGuess(letter);
            }
        }
    }

    React.useEffect(() => {
        const gameStatus = getGameStatus();
        if (gameStatus !== 'playing') {
            setGameOver(true);
        }
    }, [incorrectGuesses, guesses]);

    return (
        <div
            className={`${styles.container} ${
                activeMode === 'break' && styles.light
            }`}
        >
            <Card transparent={true}>
                <h2 className={styles.gametitle}>Hangman</h2>
                <p className={styles.gamequestion}>
                    <b>Question : </b> {hint}
                </p>
                <div className={styles.game}>
                    <div className={styles.image}>
                        <img src={imageMap[incorrectGuesses]} alt='' />
                        <p
                            style={{
                                textTransform: 'uppercase',
                            }}
                        >
                            {getHiddenWord()}
                        </p>
                    </div>

                    <div className={styles.controls}>
                        {gameOver ? (
                            <div className={styles.result}>
                                <h3>
                                    {getGameStatus() === 'won'
                                        ? 'You won!'
                                        : 'You lost!'}
                                </h3>
                                <h3 onClick={startGame}>Play Again</h3>
                            </div>
                        ) : (
                            <>
                                <div className={styles.buttons}>
                                    {buttons.map((letter) => (
                                        <Button
                                            disable={guesses.includes(letter)}
                                            outline={!guesses.includes(letter)}
                                            onClick={() => handleGuess(letter)}
                                            title={letter}
                                        ></Button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Hangman;
