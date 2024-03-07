import logo from '../assets/logo-1@2x.png';
import img2 from '../assets/wiredlineal134target-1-1@2x.png'
import img3 from '../assets/wiredlineal134target-2@2x.png'
import img4 from '../assets/logo-1@2x.png'
import img5 from '../assets/logo-1@2x.png'
import img6 from '../assets/wiredlineal268avatarman-2-1@2x.png'
import img7 from '../assets/wiredlineal268avatarman-1-1@2x.png'
import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
    return (
        <div
            className="absolute top-[0px] left-[0px] [background:linear-gradient(177.47deg,_rgba(1,_7,_17,_0.5),_rgba(1,_7,_17,_0))] w-[115px] min-h-[100vh] text-left text-xl font-poppins">
            <div className="absolute top-[0px] left-[0px] w-[100vw] min-h-[100vh] overflow-hidden">
                <div className="absolute top-[41px] left-[30px] flex flex-row items-center justify-start cursor-pointer"
                    id="frameContainer12">
                    <img className="relative w-[45px] h-[34px] object-cover" alt="" src={logo} />

                    <div className="relative font-medium">Focus Realm</div>
                </div>
                <div
                    className="absolute top-[115px] left-[20px] flex flex-col items-center justify-center gap-[40px] text-center text-3xs">
                    <div className="relative w-[75px] h-[75px]">
                        <div
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(75.45deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] box-border border-[1px] border-solid border-deepskyblue-200">
                        </div>
                        <div
                            className="absolute h-[86.67%] w-[78.67%] top-[6.67%] right-[10.67%] bottom-[6.67%] left-[10.67%] opacity-[0]">
                            <div className="absolute top-[50px] left-[0px] font-medium">
                                Focus room
                            </div>
                            <img className="absolute top-[4px] left-[4px] w-[50px] h-[50px] object-cover" alt=""
                                src={img2} />
                        </div>
                        <img
                            className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_25px)] w-[50px] h-[50px] overflow-hidden object-cover"
                            alt="" src={img3} />
                    </div>
                    <div className="relative w-[73.37px] h-[75px] text-left">
                        <div
                            className="absolute h-full w-[102.22%] top-[0%] right-[-2.22%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(75.45deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] box-border opacity-[0] border-[1px] border-solid border-deepskyblue-200">
                        </div>
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0]">
                            <img className="absolute top-[0px] left-[0px] w-[73.37px] h-[55.43px] object-cover" alt=""
                                src={img4} />

                            <div className="absolute top-[55.43px] left-[calc(50%_-_22.5px)] font-medium">
                                About us
                            </div>
                        </div>
                        <img
                            className="absolute h-[73.91%] w-full top-[12%] right-[0%] bottom-[14.09%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                            alt="" src={img5} />
                    </div>
                    <div className="relative w-[75px] h-[75px]">
                        <div
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(75.45deg,_rgba(5,_37,_84,_0.5),_rgba(1,_7,_17,_0.5))] box-border hidden border-[1px] border-solid border-deepskyblue-200">
                        </div>
                        <Link to="/dashboard"><div
                            className="absolute h-[86.67%] w-[66.67%] top-[6.67%] right-[17.33%] bottom-[6.67%] left-[16%] opacity-[0]">
                         <img className="absolute top-[0px] left-[0px] w-[50px] h-[50px] object-cover" alt=""
                                src={img6} />  

                            <div className="absolut top-[50px] left-[10px] font-medium">
                              Profile 
                            </div>
                        </div></Link>
                        <img
                            className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[18%] bottom-[16.67%] left-[15.33%] max-w-full overflow-hidden max-h-full object-cover"
                            alt="" src={img7} />
                    </div>
                </div>
            </div>
        </div>
    )
}