import React, { useEffect, useState } from 'react';
import styles from './GuessTheLogo.module.scss';
import _ from 'lodash';
import { logosData } from './data';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';

const GuessTheLogo = () => {
    const [currentLogo, setCurrentLogo] = useState(null);
    const [options, setOptions] = useState([]);
    const [answered, setAnswered] = useState(false);
    const [result, setResult] = useState('');

    useEffect(() => {
        generateNewLogo();
    }, []);

    const generateRandomOptions = (logo) => {
        const allOptions = [...logo.wrongOptions, logo.writeOption];
        const shuffledOptions = _.shuffle(allOptions);
        setOptions(shuffledOptions);
    };

    const handleOptionClick = (selectedOption) => {
        if (selectedOption === currentLogo.writeOption) {
            setResult('Right Answer');
        } else {
            setResult('Wrong Answer');
        }
        setAnswered(true);
    };

    const generateNewLogo = () => {
        const newLogo = _.sample(logosData);
        setCurrentLogo(newLogo);
        generateRandomOptions(newLogo);
        setAnswered(false);
    };

    return (
        <div className={styles.container}>
            <Card transparent={true}>
                <h1 className={styles.gametitle}>Guess the Logo</h1>
                <div className={styles.imageWrap}>
                    <img src={currentLogo?.imageUrl} alt={currentLogo?.brand} />
                </div>
                <div className={styles.buttons}>
                    {options.map((option, index) => (
                        <Button className="button"
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            title={option}
                            noRadius={true}
                        ></Button>
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
                                generateNewLogo();
                            }}
                        >
                            Next Question
                        </h3>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default GuessTheLogo;
