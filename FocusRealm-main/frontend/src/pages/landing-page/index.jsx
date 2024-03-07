import { useNavigate,Link } from "react-router-dom";
import { FooterSection } from "../../components/footer";
import OurHappyClient from "../../components/our-happy-client";
import FAQ from "./faq/FAQ";
import Sliding from "../../components/slider/Sliding";
import React from "react";
const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-[#E7E7E7]">
      <img src="assets/images/Frame 758.svg" alt="" />
      <nav className="font-poppins text-xl text-[#010711] flex items-center justify-between px-4">
        <div className="flex items-center font-semibold">
          <img src="logo.png" className="w-[45px] h-[34px]" alt="logo" />
          <p>Focus Realm</p>
        </div>
        <div className="flex items-center gap-14 font-semibold">
          <div>About</div>
          <div>The Realm...</div>
          <div>Goals</div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/as-individual")}
              className="w-28 outline-1 outline outline-royalblue font-semibold text-xl py-4 px-5 rounded-3xl cursor-pointer">Login</button>
            <button
              onClick={() => navigate("/signup")}
              className="w-28 bg-royalblue py-4 text-white font-semibold text-xl rounded-3xl cursor-pointer">Signup</button>
          </div>
        </div>
      </nav>

      {/* hero */}
      <div className="w-full h-screen flex flex-col items-center justify-center" data-aos="fade-up">
        <div className="-m-[143px]">
          <img src="Frame 553 (1).png" alt="" />
        </div>
        <div className="text-[#122C5A] text-[100px] text-center font-open_sans font-normal">
          FOCUS REALM
        </div>
        <div className="text-center text-xl text-[#122C5A] font-poppins leading-3 font-semibold">
          <p className="">The ultimate solution to enhance your focus and productivity. Our cutting-</p>
          <p>edge application is designed to empower you to achieve peak</p>
          <p>concentration in a world full of distractions.</p>
          <p>Click below to continue</p>
        </div>
        <div className="flex justify-center">
        <button  onClick={() => navigate("/Home")} className="w-36 h-10 text-white font-poppins rounded-xl bg-royalblue flex items-center justify-center gap-1 cursor-pointer">
            <p className="font-semibold">Get started</p>
            <svg width="20" height="13" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0L0 8.5Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>

      {/* slider */}
      <Sliding />
      {/* <Slider /> */}
      {/* <Box /> */}

      {/* faq */}
      <FAQ />
      {/* <Faq /> */}
      {/* <Faq /> */}
      {/* <Accordion /> */}


      {/* our happy client */}
      <OurHappyClient />
      {/* footer */}
      <FooterSection />
    </div>
  );
};

export default LandingPage