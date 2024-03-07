import dot from "../../assets/images/dot.svg";
import img from "../../assets/images/qn1.svg";
import { Link } from "react-router-dom";
import React from "react";
import theDots from '../../assets/images/Graphic_Elements.png'
import { useNavigate } from "react-router-dom";

const Questions = () => {
  // const linkOptions = {
  //   initial: {
  //     scale: 0.1,
  //     opacity: 1,
  //   },
  //   whileInView: {
  //     scale: 1,
  //     y: 1,
  //     opacity: 1,
  //   },
  //   Transition: {
  //     delay: 1,
  //   },
  // };

  const navigate=useNavigate();

  const handleAnswerClick = (answer) => {
    // Store the selected answer in local storage
    localStorage.setItem("question1Answer", answer);
    console.log(answer);
     navigate("/Questions2")

  };

  return (
    <div className="flex relative justify-center items-center overflow-hidden h-[100vh] bg-bgtest bg-cover bg-center font-poppins">
      
      <div className="h-[718px] w-[1234px] bg-[#4F82D1] rounded-3xl  shadow-2xl pt-10 px-20 text-[25px] relative">
        <img src={theDots} className="absolute top-3 left-3" />
        <div className="text-[32px] text-white mt-[71px] text-center">
          1. How often do you have trouble wrapping up the final details of a
          project, once the challenging parts have been done?
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col animate-slideRight delay-1000">
            <button
              className="w-[327px] flex justify-start items-center text-lg text-white h-[69px] bg-[#0148B7] ml-[69px] pl-4 rounded-2xl mt-[120px] decoration-transparent" 
              onClick={() => handleAnswerClick("Never")}
            >
              1. Never
            </button>
            <button
              className="w-[327px] flex justify-start items-center text-lg text-white h-[69px] bg-[#0148B7] ml-[69px] pl-4 rounded-2xl mt-10  decoration-transparent"
              onClick={() => handleAnswerClick("Rarely")}
            >
              2. Rarely
            </button>
            <button
              className="w-[327px] flex justify-start items-center text-lg text-white h-[69px] bg-[#0148B7] ml-[69px] pl-4 rounded-2xl mt-10 decoration-transparent"
              onClick={() => handleAnswerClick("Sometimes")}
            >
              3. Sometimes
            </button>
            <button
              className="w-[327px] flex justify-start items-center text-lg text-white h-[69px] bg-[#0148B7] ml-[69px] pl-4 rounded-2xl mt-10 decoration-transparent"
              onClick={() => handleAnswerClick("Often")}
            >
              4. Often
            </button>
          </div>
          <div>
            <img className="mt-[60px] animate-slideUp delay-1000 absolute bottom-0 right-20" src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="absolute z-10 flex flex-row gap-[2px] mt-[680px]">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#0148B7" />
        </svg>

        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
        <img src={dot} alt="" />
      </div>
    </div>
  );

};

export default Questions;
