import React from "react";
const Cards = () => {
  return (
    <div className="absolute h-full top-[0%] bottom-[0%] left-[0px] bg-royalblue w-1/2 overflow-hidden text-center text-17xl text-white font-poppins">
      <img
        className="absolute h-[45.68%] top-[25.49%] bottom-[28.83%] left-[143px] max-h-full w-[282px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div className="absolute h-[21.59%] top-[68.66%] bottom-[9.75%] left-[19px] bg-gray-200 w-1/2 overflow-hidden flex flex-col items-start justify-start p-2 box-border gap-[8px]">
        <div className="self-stretch relative font-semibold">
          Welcome to the Focus Realm
        </div>
        <div className="self-stretch relative text-xl inline-block h-[65px] shrink-0">
          <p className="m-0">
            "Step into Focus Realm, Where Distractions Fade and Learning
            Thrives!"
          </p>
        </div>
      </div>
      <div className="absolute top-[0px] left-[143px] w-[72px] h-[174px]">
        <div className="absolute top-[66px] left-[-5px] rounded-t-none rounded-b-31xl bg-gray-200 box-border w-12 h-[113px] border-[5px] border-solid border-royalblue" />
        <div className="absolute top-[0px] left-[19px] rounded-t-none rounded-b-31xl [background:linear-gradient(180deg,_#0148b7,_rgba(255,_255,_255,_0.24))] w-[53px] h-[142px]" />
      </div>
      <img
        className="absolute top-[15px] left-[19px] w-28 h-28 overflow-hidden object-cover"
        alt=""
        src="/graphic-elements@2x.png"
      />
    </div>
  );
};

export default Cards