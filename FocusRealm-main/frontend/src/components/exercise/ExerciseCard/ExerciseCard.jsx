import React from 'react';
import styles from './ExerciseCard.module.scss';
import Button from '../../shared/Button/Button';
import { useNavigate } from 'react-router-dom';

const ExerciseCard = ({ name, description, image, id }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={image} alt='' />
            </div>
            <div className={styles.content}>
                <h1>{name}</h1>
                <p>{description}</p>
                <div>
                    <Button
                        title={'Start'}
                        noRadius={true}
                        outline={true}
                        onClick={() => {
                            navigate('/exercise/' + id);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExerciseCard;
