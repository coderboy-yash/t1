import logo from "../../../public/public/logo-1@2x.png"
import arrow from "../../../public/public/arrow-4@2x.png"
import React from "react"
import {Link} from "react-router-dom"
const ProfileLogOut = () => {
  return (
    <div className="flex flex-col bg-gray-950">
    <div className="flex gap-5 items-center p-4 text-white border-b border-solid shadow-lg bg-gray-950 border-b-[color:var(--button-color,#0148B7)] max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src={logo}
        className="self-stretch w-12 aspect-square"
      />
      <div className="flex gap-0 self-stretch my-auto text-xl font-medium whitespace-nowrap">
        {/* <img
          loading="lazy"
          srcSet="..."
          className="aspect-[1.32] w-[45px]"
        /> */}
        <div className="grow my-auto">Focus Realm</div>
      </div>
      <img
        loading="lazy"
        src={arrow}
        className="self-stretch my-auto w-6 aspect-square"
      />
      <div className="flex-auto self-stretch my-auto text-2xl font-semibold max-md:max-w-full">
        {" "}
        Profile
      </div>
    </div>
    <div className="w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pt-12 mx-auto w-full text-sm font-medium text-white whitespace-nowrap rounded border-2 border-blue-500 border-solid shadow-2xl max-md:mt-10">
            <div className="flex gap-0 self-center px-5 mt-2 text-xl">
              <img
                loading="lazy"
                srcSet={logo}
                className="aspect-[1.32] w-[45px] mr-4"
              />
              <div className="grow my-auto">Focus Realm</div>
            </div>
            <div className="flex gap-4 justify-between px-16 py-5 mt-20 bg-blue-800 rounded-xl border-2 border-blue-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/067e323e6c6cd585cfbe28e325102a559fa9dbd26226d6afbb9818961ce5ba7a?"
                className="w-6 aspect-square"
              />
              <div className="flex-auto self-start">Dashboard</div>
            </div>
            <div className="flex gap-4 justify-between px-16 py-5 rounded-xl border border-blue-800 border-solid bg-white bg-opacity-0 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f212d37904f0b8e4e088843e1124c1c6291af82430695f0fbafb37d8547e0f5?"
                className="w-6 aspect-square"
              />
              <div className="flex-auto self-start">Settings</div>
            </div>
            <div className="flex gap-4 justify-between px-16 py-5 rounded-xl border border-blue-800 border-solid bg-white bg-opacity-0 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/983587f93308b27074f569a12efe5fedaa201cb6523569342b6b0339aca1c827?"
                className="w-6 aspect-square"
              />
              <div className="flex-auto">Support</div>
            </div>
            <div className="flex gap-5 justify-between py-3 pr-12 pl-4 w-full rounded-xl border-2 border-blue-800 border-solid bg-white bg-opacity-0 mt-[946px] max-md:pr-5 max-md:mt-10">
              <div className="flex gap-2 justify-between">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="w-7 rounded-full aspect-[1.04]"
                />
                <div className="grow my-auto">Serena Wart</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc80370e533c62baec58c01ac07d82ffd51dae09d8c2329ab9525c36930f51a3?"
                className="self-start w-6 aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[70%] max-md:w-full ml-5 h-[786px] max-md:ml-0 max-md:h-full">
          <div className="flex flex-col items-center px-20 py-12 w-full font-medium text-white whitespace-nowrap rounded-3xl border border-solid border-[color:var(--button-color,#0148B7)] mt-[516px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="mt-8 text-xl">
              You are about to log out. Are you sure?
            </div>
            <div className="flex gap-5 justify-between p-1 mt-6 max-w-full text-2xl text-center w-[389px]">
              <div className="grow justify-center px-9 py-2 rounded-3xl border border-solid border-[color:var(--button-color,#0148B7)] max-md:px-5">
                Cancel
              </div>
              <div className="grow justify-center px-8 py-2 bg-blue-800 rounded-3xl border border-solid border-[color:var(--button-color,#0148B7)] max-md:px-5">
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default ProfileLogOut;
