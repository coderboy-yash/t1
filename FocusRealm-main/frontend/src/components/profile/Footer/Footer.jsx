import React, { useState } from 'react';
import styles from './Footer.module.scss'
import linkedin from './Images/linkedin.png'
import instagram from './Images/instagram.png'
import gmail from './Images/gmail.png'
const Reward = () => {

    return (
        <>
            <div className={styles.footer}>
                <div className={styles.sub}>
                    <a href='/'>
                        Home
                    </a>
                    <a href='src/assets/Terms.html' target='_blank' className={styles.text}>
                        Terms and Conditions
                    </a>
                    <a href='src/assets/Policy.html' target='_blank' className={styles.text}>
                        Privacy Policy
                    </a>
                </div>
                <div className={styles.sub}>
                    <a href="https://www.linkedin.com/company/focus-realm/" target='_blank'>
                        <img src={linkedin} alt=""
                        />
                    </a>
                    <a href='https://www.instagram.com/focus_realm/' target='_blank'>
                        <img src={instagram} alt="" />
                    </a>
                    <a href='mailto:admin@focus-realm.com' target='_blank'>
                        <img src={gmail} alt="" />
                    </a>
                </div>
                <p className={styles.sub}>
                    @focusrealm 2023 All Rights reserved
                </p>
            </div>
        </>
    );
};

export default Reward;
