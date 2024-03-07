import React from 'react';
import GradientButton from '../../shared/GradientButton/GradientButton';
import styles from './LoginRight.module.scss';
import { signInWithGoogle } from '../../../services/auth';

const LoginRight = () => {
    function handleEmail() {}
    function handleGoogle() {
        signInWithGoogle();
    }
    return (
        <div className={styles.container}>
            <GradientButton
                title={'Continue with Google'}
                onClick={handleGoogle}
            />
        </div>
    );
};

export default LoginRight;
