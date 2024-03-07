import img from "../assets/images/test2.svg"
import { useNavigate } from "react-router-dom";
import React from "react";
import testbg from '../assets/images/question-bg.png'

const WelcomeContainer = ({ Children }) => {
  const navigate = useNavigate()
    return (
      <div className=" flex items-center justify-center h-[100vh] overflow-hidden  bg-bgtest bg-cover bg-center">
        {/* <img src={testbg} alt="" className=" w-[100vw] overflow-clip" /> */}
        <div className="absolute w-5/6 overflow-hidden lg:h-5/6 flex flex-col lg:flex-row top-20 lg:top-14 rounded-31xl bg-white shadow-[0px_4px_70px_rgba(1,_72,_183,_0.38)] box-border border-[1px] border-solid border-royalblue">
          <div className="w-full lg:w-1/2 h-full bg-white ">
            <div className="w-full pl-4 pt-4 flex absolute justify-between lg:justify-start">
              <img src={img} className="w-[112px] h-[112px]  " alt="" />
              <img src="Group 1.png" className="w-[60px] h-[140px] pr-6" alt="" />
            </div>
            <div className="w-[459px] m-auto ">
                <div className="flex flex-row mt-[261px] items-center gap-20 justify-between">
                    <div className="text-[#01388D] text-[24px] font-semibold">31-40 points</div>
                    <button className="w-[247px] h-[50px] gap-[10px] text-[20px] font-semibold text-white bg-[#20C406] rounded-3xl">Low ADHD symptom</button>
                </div>
                <div className="text-[20px] items-center text-[#01388D] mt-5">
                <div> • Recommended Study Time: 15-30 minutes</div>
                <div className="mt-4"> • Recommended Break Time: 1-3 minutes</div>
                </div>
            </div>
            <div className="w-[459px] m-auto ">
                <div className="flex flex-row mt-[50px] items-center gap-6 justify-between">
                    <div className="text-[#01388D] text-[24px] font-semibold">11-20 points</div>
                    <button className="w-[306px] h-[50px] gap-[10px] text-[20px] font-semibold text-white bg-[#0148B7] rounded-3xl">Moderate ADHD symptom</button>
                </div>
                <div className="text-[20px] items-center text-[#01388D] mt-5">
                <div> • Recommended Study Time: 45-60 minutes</div>
                <div className="mt-4"> • Recommended Break Time: 5-10 minutes</div>
                </div>
            </div>
            
          </div>
          <div className="w-full lg:w-1/2 h-full bg-royalblue">
            <div className="flex justify-center pt-12">
              <img src="public/logo-1@2x.png" className="w-[250px] h-[100px] object-cover" alt="" />
            </div>
            <div className="w-[459px] m-auto ">
                <div className="flex flex-row mt-[101px] items-center gap-20 justify-between">
                    <div className="text-white text-[24px] font-semibold">21-30 points</div>
                    <button className="w-[247px] h-[50px] gap-[10px] text-[20px] font-semibold text-[#0148B7] bg-[#EBE318] rounded-3xl">Mild ADHD symptom</button>
                </div>
                <div className="text-[20px] items-center text-white mt-5">
                <div> • Recommended Study Time: 30-45 minutes</div>
                <div className="mt-4"> • Recommended Break Time: 3-5 minutes</div>
                </div>
            </div>
            <div className="w-[459px] m-auto ">
                <div className="flex flex-row mt-[50px] items-center justify-between gap-6 ">
                    <div className="text-white text-[24px] font-semibold">0-10 points</div>
                    <button className="w-fit px-6 h-[50px] gap-[10px] text-[20px] font-semibold text-white bg-[#C40606] rounded-3xl">Low ADHD symptom</button>
                </div>
                <div className="text-[20px] items-center text-white mt-5">
                <div> • Recommended Study Time: 60-90 minutes</div>
                <div className="mt-4"> • Recommended Break Time: 10-15 minutes</div>
                </div>
            </div>
        <button onClick={() => navigate("/Questions1")} className="-ml-[94px] mt-[85px] cursor-pointer bg-[#01388D] rounded-3xl w-[210px] h-[68px] gap-[10px] text-[24px] items-center text-[#ffff]">Start Test</button>
            {Children}
          </div>
        </div>
      </div>
    );
  };
  
  export default WelcomeContainer;
  