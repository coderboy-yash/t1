import { Children } from "react";
import React from "react";
const WelcomeContainer = ({ Children }) => {
  return (
    <>
      <div className="absolute w-5/6 overflow-hidden lg:h-5/6 flex flex-col lg:flex-row top-20 lg:top-14 rounded-31xl bg-white shadow-[0px_4px_70px_rgba(1,_72,_183,_0.38)] box-border border-[1px] border-solid border-royalblue">
        <div className="w-full lg:w-1/2 h-full bg-royalblue">
          <div className="w-full pl-4 pt-4 flex absolute justify-between lg:justify-start">
            <img src="graphic-elements@2x.png" className="w-28 h-28" alt="" />
            <img src="Group 1.png" className="w-[60px] h-[140px] pr-6" alt="" />
          </div>
          <div className="w-full flex justify-center items-center">
            <img src="image@2x.png" className="w-1/2 h-1/2 overflow-hidden" alt="" />
          </div>
          <div className="flex flex-col  items-center font-poppins text-white self-stretch">
            <div className="font-semibold text-[20px] md:text-[35px] text-center">Welcome to the Focus Realm</div>
            <p className="md:text-xl text-[15px] text-center">"Step into Focus Realm, Where Distractions Fade and Learning Thrives!"</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full bg-white">
          <div className="flex justify-center pt-12">
            <img src="logo-1@2x.png" className="w-[250px] h-[100px] object-cover" alt="" />
          </div>
          {Children}
        </div>
      </div>
    </>
  );
};

export default WelcomeContainer;
