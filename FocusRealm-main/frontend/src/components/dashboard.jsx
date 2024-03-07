import WelcomeContainer from "./WelcomeContainer";
import React from "react";
const Dashboard = ({ params }) => {
  return (
    <>
      <div className="lg:flex flex-col lg:flex-row w-full h-full hidden">
        <div className="w-full lg:w-1/2 h-screen bg-bgblue">
          <div className="absolute bottom-0">
            <svg width="127" height="339" viewBox="0 0 127 339" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_12_24)">
                <path d="M86.0189 339L127 339L106.509 318.081L86.0189 339Z" fill="white" />
                <path d="M86.0189 268.11L127 268.11L106.509 247.191L86.0189 268.11Z" fill="white" />
                <path d="M86.0189 197.191L127 197.191L106.509 176.271L86.0189 197.191Z" fill="white" />
                <path d="M86.0189 126.301L127 126.301L106.509 105.382L86.0189 126.301Z" fill="white" />
                <path d="M86.0189 55.4116L127 55.4116L106.509 34.4622L86.0189 55.4116Z" fill="white" />
                <path d="M0.000831604 304.538L40.9819 304.538L20.4914 283.618L0.000831604 304.538Z" fill="white" />
                <path d="M0.000343323 233.618L40.9814 233.618L20.4909 212.699L0.000343323 233.618Z" fill="white" />
                <path d="M0.000343323 162.728L40.9814 162.728L20.4909 141.809L0.000343323 162.728Z" fill="white" />
                <path d="M0.000343323 91.8388L40.9814 91.8388L20.4909 70.9196L0.000343323 91.8388Z" fill="white" />
                <path d="M0.000343323 20.9191L40.9814 20.9191L20.4909 -0.00013363L0.000343323 20.9191Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_12_24">
                  <rect width="127" height="339" fill="white" transform="translate(127 339) rotate(180)" />
                </clipPath>
              </defs>
            </svg>

          </div>

        </div>
        <div className="w-full lg:w-1/2 h-screen bg-white relative">
          <div className="flex lg:justify-end bottom-0 absolute rotate-180 lg:relative lg:rotate-0">
            <svg width="200" height="200" viewBox="0 0 313 324" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="199.5" cy="124.5" r="199.5" fill="#4F82D1" />
            </svg>
          </div>
          <div className="flex bottom-0 right-0 absolute">
            <svg width="250" height="250" viewBox="0 0 382 314" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="268.5" cy="268.5" r="234" fill="white" stroke="#4F82D1" strokeWidth="69" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative lg:hidden [background:linear-gradient(180deg,_#4f82d1_39.06%,_#fff)] w-full h-[150vh] overflow-auto">
        <div
          className="w-full h-48 overflow-hidden object-cover"
        >
          <svg width="67" height="200" viewBox="0 0 67 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_76_2449)" filter="url(#filter0_d_76_2449)">
              <path d="M43.9615 192L63 192L53.4808 180.152L43.9615 192Z" fill="white" />
              <path d="M43.9615 151.85L63 151.85L53.4808 140.002L43.9615 151.85Z" fill="white" />
              <path d="M43.9615 111.683L63 111.683L53.4808 99.8352L43.9615 111.683Z" fill="white" />
              <path d="M43.9615 71.5334L63 71.5334L53.4808 59.6854L43.9615 71.5334Z" fill="white" />
              <path d="M43.9615 31.3835L63 31.3835L53.4808 19.5184L43.9615 31.3835Z" fill="white" />
              <path d="M4.00035 172.481L23.0388 172.481L13.5196 160.633L4.00035 172.481Z" fill="white" />
              <path d="M4.00011 132.314L23.0386 132.314L13.5193 120.466L4.00011 132.314Z" fill="white" />
              <path d="M4.00011 92.1646L23.0386 92.1646L13.5193 80.3166L4.00011 92.1646Z" fill="white" />
              <path d="M4.00011 52.0149L23.0386 52.0149L13.5193 40.1669L4.00011 52.0149Z" fill="white" />
              <path d="M4.00011 11.848L23.0386 11.848L13.5193 -5.16199e-05L4.00011 11.848Z" fill="white" />
            </g>
            <defs>
              <filter id="filter0_d_76_2449" x="0" y="0" width="67" height="200" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_76_2449" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_76_2449" result="shape" />
              </filter>
              <clipPath id="clip0_76_2449">
                <rect width="59" height="192" fill="white" transform="translate(63 192) rotate(180)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex justify-between h-[50vh] overflow-hidden">
          <div className="flex lg:justify-end bottom-0 absolute rotate-180 lg:relative lg:rotate-0">
            <svg width="200" height="200" viewBox="0 0 313 324" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="199.5" cy="124.5" r="199.5" fill="#4F82D1" />
            </svg>
          </div>
          <div className="flex bottom-0 right-0 absolute">
            <svg width="250" height="250" viewBox="0 0 382 314" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="268.5" cy="268.5" r="234" fill="white" stroke="#4F82D1" strokeWidth="69" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <WelcomeContainer Children={params} />
      </div>
    </>
  );
};

export default Dashboard