import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import img1 from "../../assets/slider/sld1.svg";
import img2 from "../../assets/slider/sld2.svg";
import img3 from "../../assets/slider/sld3.svg";
import img4 from "../../assets/slider/sld4.svg";
import img5 from "../../assets/slider/sld5.svg";
import img6 from "../../assets/slider/sld6.svg";
import img7 from "../../assets/slider/sld7.svg";
import React from "react";

const slide = [
  {
    title: "Why Focus Realm?",
    text1:
      "• Pleasant Study Environment \n • Tailored Focus Zones \n • Break Time Your way \n • Artificial Intelligence \n • Concentration Enhancer \n • Student Support Services",
    img: img1,
  },
  {
    title: "Pleasant study environment",
    text1:
      "Immerse yourself in an atmosphere crafted for concentration. Our dedicated focus rooms are equipped with all the resources you need to make the most of your study sessions.",
    img: img2,
  },
  {
    title: "Tailored Focus Zones",
    text1:
      "Choose from various focus zones designed to cater for you to study with concentration. Whether you prefer a quiet corner or a collaborative workspace, we have all the theme that suits your study style.",
    img: img3,
  },
  {
    title: "Break Time, Your Way",
    text1:
      "Immerse yourself in an atmosphere crafted for concentration. Our dedicated focus rooms are equipped with all the resources you need to make the most of your study sessions.",
    img: img4,
  },
  {
    title: "Artificial Intelligence",
    text1:
      "Connect with our AI chatbot to make your learning experience more faster. Our AI chatbot is there to solve all your doubts within a second.",
    img: img5,
  },
  {
    title: "Concentration Enhancer",
    text1:
      "With our ADHD questions analyze your concentration throughout the session and enhance your concentration power for the next session.",
    img: img6,
  },
  {
    title: "Student Support Services",
    text1:
      "Our support team is dedicated to ensuring your experience at Focus Realm is seamless. We're here to help you thrive from academic resources to personal guidance",
    img: img7,
  },
];

const Sliding = () => {
  const replaceNewlinesWithBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="h-[80%] cursor-grab">
      <Splide options={{
        pagination: true, autoplay: true
      }}>
        {slide.map((val, i) => (
          <SplideSlide key={i}>
            <div className="flex justify-around pl-96 pr-36">
              <div className="flex flex-col justify-center items-center" data-aos="fade-right">
                <div className="w-[432px] h-[45px] text-[30px] font-bold mb-8 font-poppins bg-gradient-to-b from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {val.title}
                </div>
                <div className="w-[432px] h-[200px] text-xl font-bold font-poppins">
                  {replaceNewlinesWithBreaks(val.text1)}
                </div>
              </div>
              <div className="">
                <img src={val.img} />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Sliding;
