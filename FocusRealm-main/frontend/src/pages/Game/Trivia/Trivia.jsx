import React, { useEffect, useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import styles from './Trivia.module.scss';
import _ from 'lodash';
import { data } from './data';
// import { color } from 'd3';
// import { blue } from '@material-ui/core/colors';

const Trivia = () => {
    const [question, setQuestion] = useState('');
    const [count, setCount] = useState(1);
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [image, setImage] = useState('');

    useEffect(() => {
        const questiondata = _.sample(data);
        setQuestion(questiondata.question);
        setOptions(
            questiondata.wrong_options.concat(questiondata.right_option).sort()
        );
        setAnswer(questiondata.right_option);
        setImage(questiondata.imageLink);
    }, []);

    function handleOptionClick(option) {
        setCount(count + 1);
        if (option === answer) {
            setScore(score + 1);
        }

        const questiondata = _.sample(data);
        setQuestion(questiondata.question);
        setOptions(
            questiondata.wrong_options.concat(questiondata.right_option).sort()
        );
        setAnswer(questiondata.right_option);
        setImage(questiondata.imageLink);
    }

    function restart() {
        setScore(0);
        setCount(1);
    }

    return (
        
        <div className={styles.container} >
            <Card transparent={true}>
                <h2 className={styles.gametitle}>Trivia Game</h2>
                {count == 11 ? (
                    <div className={styles.result}>
                        <h1>Your Score is {score}/10</h1>
                        <Button title={'Start Again'} onClick={restart} />
                    </div>
                ) : (
                    <>
                        <div className={styles.game}>
                            <div className={styles.image}>
                                <img src={image} alt='' />
                            </div>

                            <div className={styles.question}>
                                <p>Question {count}</p>
                                <h2
                                    dangerouslySetInnerHTML={{
                                        __html: question,
                                    }}
                                ></h2>
                                <ul>
                                    {options.map((option) => (
                                        <li className={styles.abcd} key={option}>
                                            <Button 
                                                title={option}
                                                onClick={() =>
                                                    handleOptionClick(option)
                                                }
                                                noRadius={true}
                                                fontWeight={400}
                                                // style={{ backgroundColor:'aqua' }}
                                            >
                                                {' '}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </Card>
        </div>
        
    );
};

export default Trivia;
