import WelcomeContainer from "../../components/WelcomeContainer";
import ChoosePreference from "./ChoosePreference";

const Onboarding = () => {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="w-1/2 h-screen bg-bgblue">
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
        <div className="w-1/2 h-screen bg-white relative">
          <div className="flex justify-end">
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
        <WelcomeContainer Children={<ChoosePreference />} />
      </div>
    </>
  );
};

export default Onboarding