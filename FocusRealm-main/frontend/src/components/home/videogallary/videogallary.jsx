import React from 'react';
import { Media } from './media/index';
import style from './videogallary.module.scss'
import Card from '../../shared/Card/Card';
const Videogallary = ({ mode, updateactive, updateindex, handelfullscreen }) => {
    return (
        <div className={style.gallary} title="Study Template">
            <Card lowmargin={true} light={mode === 'break'} >
                <div className={style.video}>
                    {
                        Media.gallary.map((Video, index) => {
                            return <Card lowmargin={true} key={index} light={mode === 'break'} >
                                <video
                                    src={Video}
                                    muted
                                    loop
                                    controlsList="nodownload nosound"
                                    onClick={(e) => {
                                        updateactive('video')
                                        handelfullscreen.enter()
                                        updateindex(index)
                                    }}
                                />
                            </Card>
                        })
                    }
                </div>
            </Card>
        </div>
    );
};

export default Videogallary;