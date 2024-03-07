import logo1 from "../../../public/public/logo-1@2x.png"
import arrow1 from "../../../public/public/arrow-4@2x.png"
import React from "react"
import {Link} from "react-router-dom"
const ProfileDashboard = () => {
  return (
    <div className="flex flex-col bg-gray-950">
    <div className="flex gap-5 items-center p-4 text-white border-b border-solid shadow-lg bg-gray-950 border-b-[color:var(--button-color,#0148B7)] max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src={logo1}
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
        src={arrow1}
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
                srcSet={logo1}
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
            <Link to="/setting"  className="flex-auto self-start"> <div  className="text-white text-decoration-line: none"> Settings</div></Link>
            </div>
            <Link to="/support">
            <div className="flex gap-4 justify-between px-16 py-5 rounded-xl border border-blue-800 border-solid bg-white bg-opacity-0 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/983587f93308b27074f569a12efe5fedaa201cb6523569342b6b0339aca1c827?"
                className="w-6 aspect-square"
              />
              <div  className="flex-auto text-white text-decoration-line: none">Support</div>
            </div>
            </Link>
            <div className="flex gap-5 justify-between py-3 pr-12 pl-4 w-[83%] rounded-xl border-2 border-blue-800 border-solid bg-white bg-opacity-0 mt-[946px] max-md:pr-5 max-md:mt-10">
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
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <div className="self-start ml-6 text-3xl font-medium text-white max-md:ml-2.5">
              Dashboard
            </div>
            <div className="flex gap-5 justify-between py-3 pr-20 pl-3 mt-10 rounded-3xl backdrop-blur-[250px] bg-white bg-opacity-10 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
              <div className="flex flex-col flex-wrap content-center">
                <div className="flex gap-0 justify-between font-medium text-white">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="max-w-full aspect-[1.23] w-[117px]"
                  />
                  <div className="flex flex-col flex-1 items-start my-auto">
                    <div className="self-stretch text-2xl font-semibold">
                      Ongoing Task
                    </div>
                    <div className="text-lg">Biology</div>
                    <div className="text-base">Cell Structure</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center rounded-3xl bg-zinc-300">
                  <div className="shrink-0 h-3.5 bg-lime-600 rounded-3xl" />
                </div>
              </div>
              <div className="justify-center px-8 py-1.5 my-auto text-2xl font-medium text-center text-white whitespace-nowrap bg-blue-900 rounded-3xl shadow-sm max-md:px-5">
                Resume
              </div>
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                  <div className="flex mr-18 flex-col grow py-9 pr-5 pl-12 w-full font-semibold border border-solid backdrop-blur-[13.199999809265137px] bg-stone-300 bg-opacity-20 border-[color:var(--white-10,rgba(255,255,255,0.10))] rounded-[40px] max-md:pl-5 max-md:mt-6 max-md:max-w-full">
                    <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                      <div className="flex flex-col text-lg text-white whitespace-nowrap basis-0 max-md:hidden">
                        <div className="mt-7">10</div>
                        <div className="mt-7">8</div>
                        <div className="mt-7">6</div>
                        <div className="mt-7">4</div>
                        <div className="mt-7">2</div>
                        <div className="mt-7">0</div>
                      </div>
                      <div className="flex flex-col flex-1 my-auto text-base text-right text-neutral-200">
                        <div className="flex gap-4 self-end px-px">
                          <div>Study time</div>
                          <div className="self-start w-3 h-3 bg-blue-800 rounded-full" />
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/896266913b840dc93ea9c671b331b97ddcdde817704bab7e211762982ad37d97?"
                          className="mt-14 max-w-full aspect-[2] stroke-[5px] stroke-blue-800 w-[354px] max-md:mt-10"
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-5 justify-between px-4 mt-4 text-lg text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                      <div className="grow">Mon</div>
                      <div className="grow">Tue</div>
                      <div className="grow">Wed</div>
                      <div className="grow">Thru</div>
                      <div className="grow">Fri</div>
                      <div className="grow">Sat</div>
                      <div className="grow">Sun</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-3.5 ml-10 justify-between px-10 py-11 w-full font-semibold border border-solid backdrop-blur-[13.199999809265137px] bg-stone-300 bg-opacity-20 border-[color:var(--white-10,rgba(255,255,255,0.10))] rounded-[40px] max-md:flex-wrap max-md:px-5 max-md:mt-6 max-md:max-w-full">
                    <div className="flex flex-col self-start text-lg text-white whitespace-nowrap basis-0 max-md:hidden">
                      <div className="mt-7">10</div>
                      <div className="mt-7">8</div>
                      <div className="mt-7">6</div>
                      <div className="mt-7">4</div>
                      <div className="mt-7">2</div>
                      <div className="mt-7">0</div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex gap-4 self-end px-px text-base text-right text-neutral-200">
                        <div>Break time</div>
                        <div className="w-3 h-3 bg-sky-400 rounded-full" />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b04cfdc788990325988d08a1c748ea4d24461fa7656e6b72b268ca027f50a284?"
                        className="mt-28 ml-4 max-w-full aspect-[2.94] stroke-[3px] stroke-sky-400 w-[343px] max-md:mt-10 max-md:ml-2.5"
                      />
                      <div className="flex gap-5 justify-between mt-9 text-lg text-white whitespace-nowrap">
                        <div className="grow">Mon</div>
                        <div className="grow">Tue</div>
                        <div className="grow">Wed</div>
                        <div className="grow">Thru</div>
                        <div className="grow">Fri</div>
                        <div className="grow">Sat</div>
                        <div className="grow">Sun</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-6 pt-2 pb-7 mt-7 font-semibold text-white rounded-3xl backdrop-blur-[250px] bg-white bg-opacity-10 max-md:px-5 max-md:max-w-full">
              <div className="text-2xl max-md:max-w-full">ADHD Level</div>
              <div className="flex gap-2.5 items-end pt-3 pr-16 mt-4 text-xl whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex flex-col mr-7 self-stretch px-2.5 py-2 basis-0">
                  <div className="shrink-0 bg-blue-800 rounded-2xl h-[446px]" />
                  <div className="mt-4 mr-4">Jan</div>
                </div>
                <div className="flex flex-col mr-7 px-2.5 pt-2 pb-4 mt-24 basis-0 max-md:mt-10">
                  <div className="shrink-0 bg-blue-800 rounded-2xl h-[343px]" />
                  <div className="mt-4 mr-4">Feb</div>
                </div>
                <div className="flex gap-2.5 items-end mt-24 max-md:mt-10">
                  <div className="flex flex-col mr-7  flex-1 px-2.5 py-2 mt-36 max-md:mt-10">
                    <div className="shrink-0 bg-blue-800 rounded-2xl h-[207px]" />
                    <div className="mt-4 mr-4">Mar</div>
                  </div>
                  <div className="flex flex-col mr-7  flex-1 px-3 py-2 mt-16 max-md:mt-10">
                    <div className="shrink-0 bg-blue-800 rounded-2xl h-[283px]" />
                    <div className="mt-4 mr-4">Apr</div>
                  </div>
                  <div className="flex flex-col mr-7  flex-1 self-stretch p-2.5">
                    <div className="shrink-0 bg-blue-800 rounded-2xl h-[343px]" />
                    <div className="mt-6 mr-4">May</div>
                  </div>
                  <div className="flex flex-col mr-7  flex-1 px-3 py-2 mt-16 max-md:mt-10">
                    <div className="shrink-0 bg-blue-800 rounded-2xl h-[283px]" />
                    <div className="mt-4 mr-4">Jun</div>
                  </div>
                </div>
                <div className="flex flex-col mr-7  self-stretch px-2.5 py-2 basis-0">
                  <div className="shrink-0 bg-blue-800 rounded-2xl h-[446px]" />
                  <div className="mt-4 mr-4">Jul</div>
                </div>
                <div className="flex flex-col mr-7  px-2.5 py-2 mt-60 basis-0 max-md:mt-10">
                  <div className="shrink-0 bg-blue-800 rounded-2xl h-[207px]" />
                  <div className="mt-4 mr-4">Aug</div>
                </div>
                <div className="flex flex-col mr-7  self-stretch px-2.5 py-2 basis-0">
                  <div className="shrink-0 bg-blue-800 rounded-2xl h-[446px]" />
                  <div className="mt-4 mr-4">Sept</div>
                </div>
                
                <div className="flex flex-col mr-7  px-2.5 pt-2 pb-4 mt-24 basis-0 max-md:mt-10">
                  <div className="shrink-0 bg-blue-800 rounded-2xl h-[343px]" />
                  <div className="mt-6 mr-4">Oct</div>
                </div>
                <div className="flex gap-2.5 mt-40 max-md:mt-10">
                  <div className="flex flex-col mr-7  flex-1 self-end px-2.5 py-2 mt-20 max-md:mt-10">
                    <div className="shrink-0 bg-blue-800 rounded-2xl h-[207px]" />
                    <div className="mt-4 mr-4">Nov</div>
                  </div>
               
                  <div className="flex flex-col mr-7  flex-1 px-3.5 py-2">
                    <div className="shrink-0 bg-blue-800 rounded-2xl h-[283px]" />
                    <div className="mt-4 mr-4">Dec</div>
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

export default ProfileDashboard;
