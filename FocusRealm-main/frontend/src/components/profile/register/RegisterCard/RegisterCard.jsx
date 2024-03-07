import React, { useState } from 'react';
import styles from './RegisterCard.module.scss';
import GradientInput from '../../shared/GradientInput/GradientInput';
import Button from '../../shared/Button/Button';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../services/auth';
import { toast } from 'react-toastify';

const RegisterCard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setcheck] = useState(true)
    const navigate = useNavigate();

    async function clickHandler(e) {
        e.preventDefault();

        const { result, error } = await createUser({ name, email, password });
        if (result) {
            navigate('/signup-success');
        }
        toast('Error creating user', {
            type: 'error',
        });
    }

    return (
        <form className={styles.container} onSubmit={clickHandler}>
            <GradientInput
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
            />
            <br />
            <GradientInput
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
                autocomplete={false}
            />
            <br />
            <GradientInput
                placeholder='Enter your password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
                min={8}
            />
            <div className={styles.check}>
                <input type="checkbox" required='true' value={check} />
                <label htmlFor="">  I agree to the <a href="public/policies/Terms and Conditions Focus Realm.docx" download='Terms and Conditions Focus Realm.docx'>Terms and Conditions</a> and <a href="public/policies/Privacy Policy Focus Realm.docx" download='Privacy Policy Focus Realm.docx'>privacy policies</a></label>
            </div>
            <br />
            <Button title={'Create Account'} type={'submit'} />
        </form>
    );
};

export default RegisterCard;
