import React, { useState } from 'react';
import Popup from '../../shared/Popup/Popup';
import styles from './Tutorial.module.scss';
import character from './assets/character.png';
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';
import slide4 from './assets/slide4.png';
import slide5 from './assets/slide5.png';
import slide6 from './assets/slide6.png';
import slide7 from './assets/slide7.png';
import slide8 from './assets/slide8.png';
import slide9 from './assets/slide9.png';
import slide10 from './assets/slide10.png';
import slide11 from './assets/slide11.png';
import slide12 from './assets/slide12.png';

import { updateUserTutorialWatched } from '../../../services/userdata';
import { Navigate } from 'react-router-dom';

const slides = [slide1, slide2, slide3, slide4, slide5, slide6,slide7,slide8,slide9,slide10,slide11,slide12];

const Tutorial = ({ userData, setUserData }) => {
    const [start, setStart] = useState(false);
    const [slide, setSlide] = useState(0);

    const handleComplete = async () => {
        const { success } = await updateUserTutorialWatched(userData.id);
        if (success) {
            setUserData((prev) => ({
                ...prev,
                tutorial_watched: true,
            }));
        }
        Navigate('/');
    };

    return (
        <Popup>
            {start ? (
                <div className={styles.slidesContainer}>
                    <div className={styles.slide}>
                        <img src={slides[slide]} alt='' />
                    </div>
                    <div className={styles.controls}>
                        <button
                            disabled={slide === 0}
                            className={styles.slidesPreviousBtn}
                            onClick={() => {
                                setSlide((prev) => prev - 1);
                            }}
                        >
                            Previous
                        </button>

                        {slide + 1 === slides.length ? (
                            <button onClick={handleComplete}>
                                Complete tutorial
                            </button>
                        ) : (
                            <button
                                disabled={slide + 1 === slides.length}
                                onClick={() => {
                                    setSlide((prev) => prev + 1);
                                }}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className={styles.tutorialPopup}>
                    <div className={styles.tutorialPopupImage}>
                        <img src={character} alt='' />
                    </div>
                    <div className={styles.tutorialPopupContent}>
                        <h1>Welcome to Focus realm</h1>
                        <p>Would you like to take a tutorial?</p>
                        <div className={styles.checkbox}>
                            <input type='checkbox' id='checkbox' onChange={(e)=>{
                                if(e.target.checked){
                                    handleComplete();
                                }

                            }}/>
                            <label htmlFor="">never show again</label>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    setStart(true);
                                }}
                            >
                                Start tutorial
                            </button>

                            <button
                                onClick={() => {
                                    
                                    setUserData((prev) => ({
                                        ...prev,
                                        tutorial_watched: true,
                                    }));
                                }}
                                className={styles.tutorialPopupCancelBtn}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default Tutorial;
