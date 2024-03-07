import React, { useEffect } from 'react';
import styles from './Question.module.scss';
import { useState } from 'react';
import Button from '../../shared/Button/Button';

const Question = ({
    question,
    index,
    changeQuestion,
    setAnswer,
    answers,
    submit,
}) => {
    const [option, setOption] = useState(null);

    useEffect(() => {
        setOption(answers[index] !== undefined ? answers[index] : null);
    }, [question]);
    const clickHandler = (by) => {
        if (by > 0) {
            if (option != null) {
                setAnswer(index, option);
                if (index === 17) {
                    submit(option);
                    return;
                }
                changeQuestion(by);
            }
        } else {
            changeQuestion(by);
        }
    };

    return (
        <div className={styles.container}>
            <h1>{question.question}</h1>
            <div
                onChange={(e) => setOption(e.target.value)}
                className={styles.options}
            >
                {question.options.map((item, i) => (
                    <div key={i}>
                        <input
                            type='radio'
                            name={`answer ${index}`}
                            value={item}
                            id={item}
                            checked={item === option}
                            readOnly
                        />

                        <label
                            htmlFor={item}
                            className={`${item === option && styles.active}`}
                        >
                            {item}
                        </label>
                    </div>
                ))}
            </div>
            <div className={styles.buttons}>
                <div>
                    <Button
                        onClick={() => clickHandler(-1)}
                        disable={index === 0 ? true : false}
                        title={'Previous'}
                        noRadius={true}
                    />

                    <Button
                        onClick={() => clickHandler(1)}
                        disable={option != null ? false : true}
                        title={index != 17 ? 'Next' : 'Submit'}
                        outline={true}
                        noRadius={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Question;
