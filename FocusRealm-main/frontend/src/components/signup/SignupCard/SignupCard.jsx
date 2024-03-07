import React from 'react';
import GradientButton from '../../shared/GradientButton/GradientButton';
import styles from './SignupCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../../../services/auth';

const SignupCard = () => {
    const navigate = useNavigate();
    function handleEmail() {
        navigate('/register');
    }

    function handleGoogle() {
        signInWithGoogle(true);
    }
    return (
        <div className={styles.container}>
            <GradientButton
                title={'Continue with email'}
                onClick={handleEmail}
            />
            <h2>OR</h2>
            <GradientButton
                title={'Continue with Google'}
                onClick={handleGoogle}
            />
            <br />
        </div>
    );
};

export default SignupCard;
