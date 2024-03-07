import React from 'react';
import styles from './ReasonPopup.module.scss';
import character from './assets/character.png';
import Popup from '../../shared/Popup/Popup';

const ReasonPopup = ({ close }) => {
    return (
        <Popup>
            <div className={styles.tutorialPopup}>
                <div className={styles.tutorialPopupImage}>
                    <img src={character} alt='' />
                </div>
                <div className={styles.tutorialPopupContent}>
                    <h1>Welcome to test page</h1>
                    <p>
                        The tests are designed to calculate the user's level of
                        ADHD, and based on the results, our application will
                        determine an optimal focus time and break time for the
                        user.
                    </p>

                    <div>
                        <button classname={styles.button}
                            onClick={() => {
                                close();
                            }}
                        >
                            Start test
                        </button>
                    </div>
                </div>
            </div>
        </Popup>
    );
};

export default ReasonPopup;
