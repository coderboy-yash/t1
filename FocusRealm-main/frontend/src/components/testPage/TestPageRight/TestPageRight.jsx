import React from 'react';
import Button from '../../shared/Button/Button';
import styles from './TestPageRight.module.scss';
import { useNavigate } from 'react-router-dom';

const TestPageRight = () => {
    const navigate = useNavigate();
    function clickHandler() {
        navigate('/mcq');
    }
    return (
        <div className={styles.container}>
            <h1>MCQ Game</h1>
            <div className={styles.words}>
                <Button title={'Option a'} outline={true} noEvents={true} />
                <br />
                <Button title={'Option b'} noEvents={true} />
            </div>
            <Button
                circular={true}
                small={true}
                title={'Start'}
                outline={true}
                onClick={clickHandler}
            />
        </div>
    );
};

export default TestPageRight;
