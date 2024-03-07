// import React from "react";
import theDots from '../../assets/images/Graphic_Elements.png'
import img from "../../assets/images/qn2.png";
import dot from "../../assets/images/dot.svg";
import { useNavigate } from "react-router-dom";
import React from "react";
const Questions = () => {

  const navigate=useNavigate();

  const handleAnswerClick = (answer) => {
    // Store the selected answer in local storage
    localStorage.setItem("question15Answer", answer);
    localStorage.setItem("testTaken", true);
        
    let score = 0;
    let count = 0;
    let totalScore=0;

    // Iterate through all keys in local storage
    for (let i = 1; i <= Object.keys(localStorage).length; i++) {
        const answerKey = `question${i}Answer`;
        const answerValue = localStorage.getItem(answerKey);

        
        if (answerValue !== null) {
            count++;

            
            switch (answerValue) {
                case 'Never':
                    score += 0;
                    break;
                case 'Rarely':
                    score += 1;
                    break;
                case 'Often':
                    score += 2;
                    break;
                case 'Very Often':
                    score += 3;
                    break;
                default:
                    break;
            }
        }
    }

    // Calculate the total score and return it
    if (count > 0) {
        totalScore= Math.floor((score * 100) / (count * 3));
        localStorage.setItem("totalScore",totalScore);
    } else {
      localStorage.setItem("totalScore",totalScore);
    }
  };
  
  return (
    <div className="flex justify-center items-center overflow-hidden h-[100vh] bg-bgtest bg-cover bg-center font-poppins">
      <div className="h-[718px] w-[1234px]   bg-[#4F82D1] rounded-3xl shadow-2xl pt-10 px-20 text-[25px] relative">
      <img src={theDots} className="absolute top-3 left-3" />
        <div className="text-[32px] text-white   mt-[71px]  text-left">
          15. How often do you have difficulty completing tasks in a timely
          manner, often procrastinating or avoiding them altogether?
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col animate-slideRight delay-1000 ">
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
            <img className="mt-[10px] animate-slideUp delay-1000 absolute bottom-0 right-20 " src={img} alt="" />
          </div>
          <button onClick={() => navigate("/Results")} className="w-[169px] h-[51px] bg-[#04931B] mt-[461px] rounded-3xl text-white cursor-pointer font-semibold text-lg gap-[2px] drop-shadow-lg shadow-[#0148B7]">
            Submit
          </button>
        </div>
      </div>
      <div className="z-10 flex flex-row gap-[2px] mt-[680px] absolute">
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
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#0148B7" />
        </svg>
      </div>
    </div>
  );
};

export default Questions;
