import bgchangelogo from '../assets/group@2x.png'
import bgc2 from '../assets/frame-1001@2x.png'
import React from 'react'

export default function Bgchange() {
    return (
        <div className="relative w-[75px] h-[75px]">
            <div
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(88.96deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] box-border border-[1px] border-solid border-dark-stroke">
            </div>
            <div
                className="absolute h-[66.67%] w-[66.67%] top-[17.33%] right-[17.33%] bottom-[16%] left-[16%] overflow-hidden opacity-[0]">
                <img
                    className="absolute h-[71.27%] w-[75.78%] top-[72%] right-[12.19%] bottom-[-43.27%] left-[12.03%] max-w-full overflow-hidden max-h-full object-cover"
                    alt="" src={bgchangelogo} />

                <div className="absolute top-[38px] left-[calc(50%_-_25px)] font-medium">
                    Background
                </div>
            </div>
            <div className="absolute top-[calc(50%_-_37.5px)] left-[calc(50%_-_37.5px)] w-[75px] h-[75px]">
                <div
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(88.96deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] box-border border-[1px] border-solid border-dark-stroke">
                </div>
                <div
                    className="absolute h-[66.67%] w-[66.67%] top-[17.33%] right-[17.33%] bottom-[16%] left-[16%] overflow-hidden opacity-[0]">
                    <img
                        className="absolute h-[71.27%] w-[75.78%] top-[72%] right-[12.19%] bottom-[-43.27%] left-[12.03%] max-w-full overflow-hidden max-h-full object-cover"
                        alt="" src={bgchangelogo} />

                    <div className="absolute top-[38px] left-[calc(50%_-_25px)] font-medium">
                        Background
                    </div>
                </div>
                <img
                    className="absolute h-[57.65%] w-[66.67%] top-[21.33%] right-[17.33%] bottom-[21.02%] left-[16%] max-w-full overflow-hidden max-h-full object-cover"
                    alt="" src={bgc2} />
            </div>
        </div>
    )
}