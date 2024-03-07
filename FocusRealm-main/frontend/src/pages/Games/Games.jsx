import React from 'react';
import styles from './Games.module.scss';
import Card from '../../components/shared/Card/Card';
import GameCard from '../../components/games/GameCard/GameCard';
//import { useTimerContext } from '../../state/TimerContext';
import hangman from './assets/hangman.png';
import trivia from './assets/trivia.png';
import highlow from './assets/higherl.png';
import guess from './assets/guess.png';
import typing from './assets/typing.png';
import tictactoe from './assets/Tic-Tac-Toe.png';
import blackjack from './assets/blackjack.png';
import sudoku from './assets/sudoku.png';
import chess from './assets/chess.png';

const games = [
    {
        name: 'Higher Lower',
        link: '/games/highlow',
        image: highlow,
    },
    {
        name: 'Hangman',
        link: '/games/hangman',
        image: hangman,
    },
    {
        name: 'Trivia',
        link: '/games/trivia',
        image: trivia,
    },
    {
        name: 'Guess the Logo',
        link: '/games/guess-the-logo',
        image: guess,
    },
    {
        name: 'Typing-Test',
        link: '/games/typing-test',
        image: typing ,
    },
    {
        name: 'Tic-Tac-Toe',
        link: '/games/tic-tac-toe',
        image: tictactoe ,
    },
    {
        name: 'BlackJack',
        link: '/games/black-jack',
        image: blackjack ,
    },
    {
        name: 'Sudoku',
        link: '/games/sudoku',
        image: sudoku ,
    },
    {
        name: 'Chess',
        link: '/games/chess',
        image: chess ,
    },
    
];

const Games = () => {
    // const { activeMode } = useTimerContext();
    return (
        <div className=" bg-gray-950"
            // className={`${styles.container} ${
            //     activeMode === 'break' && styles.light
            // }`}
        >
            <div className={styles.content}>
                <h1 className={styles.contentHeading}>Play Games</h1>
                <div className={styles.contentWrapper}>
                    <div className={styles.games}>
                        {games.map((item) => (
                            <div className={styles.game}>
                                <Card>
                                    <GameCard {...item} />
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Games;
