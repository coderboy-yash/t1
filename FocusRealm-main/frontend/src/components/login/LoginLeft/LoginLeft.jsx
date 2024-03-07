import React, { useState } from 'react';
import GradientButton from '../../shared/GradientButton/GradientButton';
import styles from './LoginLeft.module.scss';
import GradientInput from '../../shared/GradientInput/GradientInput';
import Button from '../../shared/Button/Button';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../services/auth';
import { toast } from 'react-toastify';

const LoginLeft = ({ forgotPassword }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function clickHandler(e) {
        e.preventDefault();
        if (await loginUser({ email, password })) {
            navigate('/home')
        } else {
            toast('Invalid email or password', {
                type: 'error',
            });
        }
    }
    return (
        <form className={styles.container} onSubmit={clickHandler}>
            <GradientInput
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={'email'}
                required={true}
            />
            <br />
            <GradientInput
                placeholder='Enter your password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
            />
            <br />
            <Button title={'Click to Login'} type={'submit'} />
            <br />
            <p onClick={forgotPassword}>Forgot password?</p>
        </form>
    );
};

export default LoginLeft;
