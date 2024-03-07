import logo from "../../../public/public/logo-1@2x.png"
import arrow from "../../../public/public/arrow-4@2x.png"
import React from "react"
import {Link} from "react-router-dom"

const ProfileNotification = () => {
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
            <div className="flex gap-4 justify-between px-16 py-5 mt-20  rounded-xl border-2 border-blue-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/067e323e6c6cd585cfbe28e325102a559fa9dbd26226d6afbb9818961ce5ba7a?"
                className="w-6 aspect-square"
              />
              <div className="flex-auto self-start "><Link to="/dashboard"><div className="text-white text-decoration-line: none">Dashboard</div></Link></div>
            </div>
            <div className="flex gap-4 justify-between bg-blue-800 px-16 py-5 rounded-xl border border-blue-800 border-solid bg-white bg-opacity-0 max-md:px-5">
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
              <div className="flex-auto"><Link to="/support"><div className="text-white text-decoration-line: none">Support</div></Link></div>
            </div>
            <div className="flex gap-5  w-[83%] justify-between py-3 pr-12 pl-4 w-full rounded-xl border-2 border-blue-800 border-solid bg-white bg-opacity-0 mt-[946px] max-md:pr-5 max-md:mt-10">
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
          <div className="flex flex-col self-stretch py-3 pl-2 my-auto whitespace-nowrap max-md:mt-10 max-md:max-w-full">
          <div className="pr-16 pb-12 rounded-3xl border border-solid border-[color:var(--button-color,#0148B7)] max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow py-12 pr-0.5 pl-2 text-sm font-medium text-white whitespace-nowrap max-md:mt-9">
            <div className="justify-center items-center px-16 py-3 mt-10 rounded-xl bg-white bg-opacity-0 max-md:px-5">
              <Link to="/account"><div className="text-white text-decoration-line: none">Accounts</div></Link>
            </div>
            <div className="justify-center px-16 py-3 mt-2.5 bg-blue-800 rounded-xl max-md:px-5">
              Notifications
            </div>
            <div className="justify-center items-center px-16 py-3 mt-2.5 rounded-xl bg-white bg-opacity-0 max-md:px-5">
              Theme
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-9 max-md:mt-10 max-md:max-w-full">
            <div className="text-xl font-medium text-white max-md:max-w-full">
              Notifications
            </div>
            <div className="flex flex-col px-4 py-5 mt-32 rounded-xl border border-solid border-[color:var(--button-color,#0148B7)] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 justify-between py-3 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col flex-1 py-px text-xl font-semibold text-white max-md:max-w-full">
                  <div className="max-md:max-w-full">Email </div>
                  <div className="mt-2.5 text-base font-medium text-zinc-300 max-md:max-w-full">
                    These settings apply to the notifications that you receive
                    by email.
                  </div>
                  <div className="mt-2.5 max-md:max-w-full">
                    Allow Email Notifications
                  </div>
                </div>
                <div className="flex flex-col justify-center py-1.5 my-auto basis-0">
                  <div className="flex flex-col justify-center pr-14 bg-stone-300 rounded-[30px] max-md:pr-5">
                    <div className="z-10 shrink-0 mt-0 -mb-1.5 bg-white rounded-full h-[38px]" />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between py-1 mt-24 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col flex-1 py-px text-xl font-semibold text-white max-md:max-w-full">
                  <div className="max-md:max-w-full">Device</div>
                  <div className="text-base font-medium text-zinc-300 max-md:max-w-full">
                    These settings apply to the notifications that you receive
                    on your device.
                  </div>
                  <div className="max-md:max-w-full">
                    Allow Device Notifications
                  </div>
                </div>
                <div className="flex flex-col justify-center py-1.5 my-auto basis-0">
                  <div className="flex flex-col justify-center pr-14 bg-stone-300 rounded-[30px] max-md:pr-5">
                    <div className="z-10 shrink-0 mt-0 -mb-1.5 bg-white rounded-full h-[38px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
      </div>
      </div>
  );
};

export default ProfileNotification;
