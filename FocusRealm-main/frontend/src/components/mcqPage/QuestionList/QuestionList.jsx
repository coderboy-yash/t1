import React, { useContext, useEffect, useState } from 'react';
import { questionData } from './data';
import Question from '../Question/Question';
import styles from './QuestionList.module.scss';
import {
    calculateADHDTestScore,
    interpretADHDTestScore,
} from './CalculateScore';
import { supabase } from '../../../services';
import { Link } from 'react-router-dom';
import {
    createUserData,
    updateUserFocusAndBreakTime,
} from '../../../services/userdata';
import { scoreToTime } from '../../../utils/scoreToTime';
import { useUserDataContext } from '../../../state/UserDataContext';
import { useTimerContext } from '../../../state/TimerContext';

const QuestionList = () => {
    const [answers, setAnswers] = useState({});
    const [index, setIndex] = useState(0);
    const question = questionData[index];
    const [completed, setCompleted] = useState(false);
    const [gscore, setGScore] = useState(0);
    const [user, setUser] = useState(null);
    const value = useUserDataContext();
    const { changeFocusTime, changeBreakTime } = useTimerContext();

    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user);
        });
    }, []);

    const setAnswer = (questionNumber, answer) => {
        setAnswers((answers) => {
            return { ...answers, [questionNumber]: answer };
        });
    };

    const changeQuestion = (by) => {
        setIndex((index) => index + by);
    };

    const submitAnswers = async (option) => {
        const score = calculateADHDTestScore(
            Object.values({ ...answers, 17: option })
        );
        localStorage.setItem('TestScore', score);
        localStorage.setItem('TestTaken', true);
        const { breaktime, focustime } = scoreToTime(score);
        localStorage.setItem('breaktime', breaktime);
        localStorage.setItem('focustime', focustime);
        
        setGScore(score);
        if (value.session) {
            const { breaktime, focustime } = scoreToTime(score);
            localStorage.setItem('breaktime', breaktime);
            localStorage.setItem('focustime', focustime);
            if (value.userData) {
                await updateUserFocusAndBreakTime({
                    id: value.userData.id,
                    focustime,
                    breaktime,
                    testscore: score,
                });

                value.setUserData((prev) => ({
                    ...prev,
                    focustime,
                    breaktime,
                    testscore: score,
                }));
                changeBreakTime(breaktime);
                changeFocusTime(focustime);
                setCompleted(true);
                return;
            }

            console.log(user);

            const userData = {
                userId: user.id,
                testscore: localStorage.getItem('TestScore'),
                breaktime,
                focustime,
                totaltime: 0,
                dailystreak: 1,
                user_identity: user.email ? user.email : user.phone,
            };
            await createUserData(userData);
            value.setUserData(userData);
            changeBreakTime(breaktime);
            changeFocusTime(focustime);
            setCompleted(true);
        } else {
            setCompleted(true);
        }
    };

    if (completed) {
        return (
            <div className={styles.container}>
                <div className={styles.result}>
                    <h1>Your test score is {gscore}</h1>
                    <p>{interpretADHDTestScore(gscore)}</p>

                    <p>
                        {value.session ? (
                            <Link to={'/'}>Proceed to Homepage</Link>
                        ) : (
                            <Link to={'/signup'}>Signup to continue</Link>
                        )}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Question
                question={question}
                index={index}
                changeQuestion={changeQuestion}
                setAnswer={setAnswer}
                answers={answers}
                submit={submitAnswers}
            />
        </div>
    );
};

export default QuestionList;
