import React, { useState } from 'react';
import _ from 'lodash';
import { data } from './data';
import Button from '../../../components/shared/Button/Button';
import styles from './HighLow.module.scss';
import Card from '../../../components/shared/Card/Card';
import { useTimerContext } from '../../../state/TimerContext';

const HighLow = () => {
    const [element, setElement] = useState(_.sample(data.questions));
    const [answered, setAnswered] = useState(false);
    const [result, setResult] = useState('');
    const { activeMode } = useTimerContext();

    const [questiondata, setQuestionData] = useState(
        _.shuffle([
            {
                value: element.right_option,
                image: element.rightOptionImage,
            },
            {
                value: element.wrong_option,
                image: element.wrongOptionImage,
            },
        ])
    );

    const checkResult = (answer) => {
        if (answer === element.right_option) {
            setResult('Right Answer');
        } else {
            setResult('Wrong Answer');
        }
        setAnswered(true);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.gametitle}>Higher Lower</h2>
            <h1>{element.question}</h1>
            <div className={styles.buttons}>
                {questiondata.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            checkResult(item.value);
                        }}
                    >
                        <img src={item.image} alt='' />
                        <p>
                            <b>{item.value}</b>
                        </p>
                    </div>
                ))}
            </div>

            <div className={styles.mobileButtons}>
                {questiondata.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            checkResult(item.value);
                        }}
                    >
                        <img src={item.image} alt='' />
                        <p>
                            <b>{item.value}</b>
                        </p>
                    </div>
                ))}
            </div>

            {answered && (
                <div className={styles.result}>
                    <h3
                        dangerouslySetInnerHTML={{
                            __html: result,
                        }}
                    ></h3>
                    <h3
                        onClick={() => {
                            setAnswered(false);
                            const newelement = _.sample(data.questions);
                            setElement(newelement);
                            setQuestionData(
                                _.shuffle([
                                    {
                                        value: newelement.right_option,
                                        image: newelement.rightOptionImage,
                                    },
                                    {
                                        value: newelement.wrong_option,
                                        image: newelement.wrongOptionImage,
                                    },
                                ])
                            );
                        }}
                    >
                        Next Question
                    </h3>
                </div>
            )}
        </div>
    );
};

export default HighLow;
