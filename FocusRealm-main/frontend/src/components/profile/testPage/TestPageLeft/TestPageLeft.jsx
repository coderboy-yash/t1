import React from 'react';
import styles from './TestPageLeft.module.scss';
import Button from '../../shared/Button/Button';
import { useNavigate } from 'react-router-dom';

const TestPageLeft = () => {
    const navigate = useNavigate();
    function clickHandler() {
        navigate('/wordgame');
    }
    return (
        <div className={styles.container}>
            <h1>WORD GAME</h1>
            <div className={styles.words}>
                <p>A</p>
                <p>N</p>
                <p>R</p>
                <p>K</p>
                <p>E</p>
                <p>D</p>
            </div>
            <Button
                onClick={clickHandler}
                circular={true}
                small={true}
                title={'Start'}
                outline={true}
            />
        </div>
    );
};

export default TestPageLeft;
