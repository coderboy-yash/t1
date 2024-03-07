import logo from "../../../public/public/logo-1@2x.png"
import arrow from "../../../public/public/arrow-4@2x.png"
import React from "react"
import {Link} from "react-router-dom"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

const ProfileSetting = () => {

  const { isAuthenticated,user } = useSelector((state) => state.user);
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
            <div className="flex gap-4 justify-between px-16 py-5 mt-20 rounded-xl border-2 border-blue-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/067e323e6c6cd585cfbe28e325102a559fa9dbd26226d6afbb9818961ce5ba7a?"
                className="w-6 aspect-square"
              />
              <Link to="/dashboard" className="flex-auto self-start"><div className="text-white text-decoration-line: none">Dashboard</div></Link>
            </div>
            <div className="flex gap-4 justify-between px-16 py-5  bg-blue-800 rounded-xl border-2 border-blue-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
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
              <Link to="/support"className="flex-auto"><div className="text-white text-decoration-line: none" >Support</div></Link>
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
        <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 mt-4 max-md:mt-9 max-md:max-w-full">
            <div className="text-3xl font-semibold text-white max-md:max-w-full">
              Settings
            
            </div>
            <div className="py-0.5 pr-5 mt-8 rounded-3xl border-blue-800 border-solid border-[3px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow py-12 pl-2 text-sm font-medium text-white whitespace-nowrap max-md:mt-10">
                    <div className="justify-center items-center px-16 py-3 mt-10 bg-blue-800 rounded-xl max-md:px-5">
                     Accounts
                    </div>
                    <div className="justify-center px-16 py-3 mt-2.5 rounded-xl bg-white bg-opacity-0 max-md:px-5">
                    <Link to="/notification"><div className="text-white text-decoration-line: none">Notification</div></Link>
                    </div>
                    <div className="justify-center items-center px-16 py-3 mt-2.5 rounded-xl bg-white bg-opacity-0 max-md:px-5">
                      Theme
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <div className="text-xl font-medium text-white max-md:max-w-full">
                      Accounts
                    </div>
                    <div className="px-8 py-4 mt-9 rounded-xl border border-blue-800 border-solid max-md:px-5 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
                          <div className="grow py-0.5 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                              <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb2f1992a307be17c11a702e2c574c1e7e60e7471b8bda57605fa377d9e3082a?"
                                  className="grow max-w-full aspect-[1.09] w-[106px] max-md:mt-7"
                                />
                              </div>
                              <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                                <div className="self-stretch my-auto text-2xl font-semibold text-white max-md:mt-10 max-md:max-w-full">
                                  Serena Wart
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-3 w-[12%] max-md:ml-0 max-md:w-full">
                          <div className="flex gap-3.5 justify-end self-stretch px-3.5 py-2 my-auto w-full text-2xl font-semibold whitespace-nowrap rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:mt-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cb37ff9a066ec510e416fe50e1b238636aa6f311c9e7af60cee21459f65b9e?"
                              className="my-auto aspect-square w-[30px]"
                            />
                            <div>Edit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3.5 pt-3.5 mt-36 rounded-xl border border-blue-800 border-solid max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[85%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow px-4 pt-2 pb-4 text-white rounded-xl max-md:mt-10 max-md:max-w-full">
                            <div className="text-2xl font-semibold max-md:max-w-full">
                              Personal Information
                            </div>
                            <div className="flex gap-5 justify-between pb-3 mt-8 max-md:flex-wrap max-md:max-w-full">
                              <div className="flex flex-col flex-1">
                                <div className="text-xl">First Name</div>
                                <div className="mt-1.5 text-base font-medium">
                                  Serena
                                </div>
                              </div>
                              <div className="flex flex-col flex-1 items-end pl-20 whitespace-nowrap">
                                <div className="text-xl">Last Name</div>
                                <div className="mt-1.5 text-base font-medium">
                                  Wart
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-5 justify-between pb-3 mt-8 max-md:flex-wrap max-md:max-w-full">
                              <div className="flex flex-col flex-1 pr-16">
                                <div className="text-xl">Email Address</div>
                                <div className="mt-1.5 text-base font-medium">
                                Serena@gmail.com
                                </div>
                              </div>
                              <div className="flex flex-col flex-1 items-end pl-20 whitespace-nowrap">
                                <div className="text-xl">Phone Number</div>
                                <div className="mt-1.5 text-base font-medium">
                                  +916789874567
                                </div>
                              </div>
                            </div>
                            <div className="self-start mt-8 text-xl">
                              Password
                            </div>
                            <div className="self-start mt-1.5 text-base font-medium">
                              *******
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[15%] max-md:ml-0 max-md:w-full">
                          <div className="flex gap-3.5 justify-center px-2.5 py-1.5 w-[83%] text-2xl font-semibold whitespace-nowrap rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:mt-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4245e82b3a311cf0fc96575f91a6316d4fc6f3d73cdf4608141704e417b0ec61?"
                              className="self-start aspect-square w-[30px]"
                            />
                            <div>Edit</div>
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

export default ProfileSetting;
