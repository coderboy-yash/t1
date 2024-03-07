import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import CircleGraph from "./CircleGraph"
import Circle from 'react-circle';
 
const Results = () => {
  const [adhdLevel, setADHDLevel] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const score = localStorage.getItem("totalScore");

  useEffect(() => {
    // Read the score from local storage
   

    console.log(score)

    // Interpret the score and set the result message accordingly
    if (score >= 0 && score <= 27) {
      setADHDLevel("No significant symptoms of ADHD");
      setStudyTime("Recommended Study Time: 30-45 minutes");
      setBreakTime("Recommended Break Time: 3-5 minutes");
    } else if (score >= 28 && score <= 45) {
      setADHDLevel("Mild to moderate symptoms of ADHD");
      setStudyTime("Recommended Study Time: 30-45 minutes");
      setBreakTime("Recommended Break Time: 3-5 minutes");
    } else if (score >= 46 && score <= 63) {
      setADHDLevel("Moderate to severe symptoms of ADHD");
      setStudyTime("Recommended Study Time: 45-60 minutes");
      setBreakTime("Recommended Break Time: 5-10 minutes");
    } else {
      setADHDLevel("Severe symptoms of ADHD");
      setStudyTime("Recommended Study Time: 60+ minutes");
      setBreakTime("Recommended Break Time: 10+ minutes");
    }



  }, []);
  return (
    <div className=" bg-bgtest w-[100vw] h-[100vh] flex items-center justify-center">
    <div className="flex flex-col items-center justify-center px-11 pt-12 pb-5 bg-blue-500 shadow-2xl rounded-[30px] max-md:px-5 w-[80%] h-fit text-lg font-poppins">
      
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div  style={{ minWidth: '10px', minHeight: '10px' }} className="flex flex-col w-[43%] max-md:ml-0 max-md:w" >
          <div >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="3s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={7} // Number: Defines the size of the circle.
              lineWidth={10} // Number: Defines the thickness of the circle's stroke.
              progress={score} // Number: Update to change the progress and percentage.
              progressColor="cornflowerblue"  // String: Color of "progress" portion of circle.
              bgColor="whitesmoke" // String: Color of "empty" portion of circle.
              textColor="hotpink" // String: Color of percentage text color.
              textStyle={{
                font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={2} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-60 text-2xl font-semibold text-center text-blue-950 max-md:mt-10 max-md:max-w-full text-xl font-poppins">
              <div className="text-4xl text-sky-900 max-md:max-w-full">
                Your ADHD level is {adhdLevel}.
              </div>
              <div className="mt-10 max-md:max-w-full">
                {studyTime}
              </div>
              <div className="mt-4 max-md:max-w-full">
                {breakTime}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-end mt-32 max-w-full text-2xl font-medium text-center w-[691px] max-md:flex-wrap max-md:mt-10">
        <div className="grow my-auto text-sky-950 max-md:max-w-full">
          Start Your Journey with Focus Realm
        </div>
        <div className="justify-center items-center px-16 py-4 text-white bg-blue-900 rounded-3xl shadow-sm max-md:px-5">
          <Link to="/signup" className="text-white no-underline">Start{" "}</Link>
        </div>
      </div>
    </div>
    </div>
  );
            }  
export default Results;
