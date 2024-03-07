 import {Link} from "react-router-dom"
import React, { useState } from 'react';
import more from '../assets/more@2x.png';

export default function Options() {
    const [showBreakdown, setShowBreakdown] = useState(false);

    const toggleBreakdown = () => {
        setShowBreakdown(!showBreakdown);
    };

    return (
        <div className="relative w-[75px] h-[75px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-full [background:linear-gradient(88.96deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] shadow-[0.5px_0.5px_2px_rgba(5,_72,_169,_0.5)_inset] box-border border-[0.5px] border-solid border-deepskyblue-100">
                </div>

                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row flex-wrap items-center justify-center">
                    <div className="relative w-[30px] h-[30px]">
                        <img
                            onClick={toggleBreakdown}
                            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] w-[30px] h-[30px] object-cover cursor-pointer"
                            alt=""
                            src={more}
                        />
                    </div>
                </div>
            </div>
            {showBreakdown && (
                <div className="absolute top-[100%] left-[50%] transform translate-x-[-50%] mt-2 bg-black p-4 rounded-md shadow-md z-50">
                    {/* Render your breakdown components here */}
                    <Link to="/games"><div className="text-white text-decoration-line: none">Games</div></Link>
                   <Link to="/exercise" ><div className="text-white text-decoration-line: none">Exercise</div></Link> 
                </div>
            )}
        </div>
    );
}
