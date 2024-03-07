import "./AppExercise.css";
import ShoulderStretch from "../../../public/animation6.gif";
import SquatKicks from "../../../public/animation5.gif";
import SquatReach from "../../../public/animation3.gif";
import Inchworm from "../../../public/animation4.gif";
import JumpingJack from "../../../public/animation1.gif";
import Punches from "../../../public/animation7.gif";
import SplitJump from "../../../public/animation2.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
function App() {
  const settings = {
    centerMode: true,
    centerPadding: "12%",

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
      swipeToSlide: true,
    touchThreshold: 1,
  };





  return (
    
    <div className="flex flex-col items-start py-120 pr-20 pb-200px max-w-full bg-gray-950 max-md:pr-5">
      <div className="flex gap-2.5 items-start mt-10 ml-16 max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea00b061e8ac5ed2286d600c0d39a9e2275b1e2fe316d15ac64aa8b06d9e89e6?"
          className="object-contain object-center shrink-0 aspect-square w-[50px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ff2ab8c3ccfd27dc852c1a70a4155c0054dd22d42c71adfd3cd7bcc837810a?"
          className="object-contain object-center shrink-0 aspect-square w-[50px]"
        />
        <div className="grow self-stretch my-auto text-5xl font-semibold text-center text-white max-md:text-4xl">
          Exercises
        </div>
      </div>

      {/* flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full */}
      <div className="w-full m-auto">
        <div className="mt-20  max-md:flex-wrap max-md:max-w-full ">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="flex flex-col items-end w-850px px-8 py-12 font-semibold text-white rounded-3xl border border-sky-400 border-solid shadow-sm max-w-[777px] max-md:px-5">
                <div className="flex flex-row w-[45%] max-md:ml-0 max-md:w-full ">
                  <img
                    className="object-contain float-left object-center mt-2.5 h-full w-full aspect-[1.11] max-md:mt-10"
                    src={d.img}
                    alt="#"
                  />
                  <div className="text-white text-3xl max-w-[25rem] text-center md:text-left ">
                    <p className=" text-white text-3xl w-[25rem] text-center">
                      {d.name}
                    </p>
                    <p className="mt-4 text-white text-sm max-w-[25rem] text-center md:text-left">
                      {d.description}
                    </p>
                    <button className=" justify-center items-end px-8 py-2  mt-10 text-lg whitespace-nowrap bg-blue-800 rounded-3xl cursor-pointer border border-sky-400 border-solid shadow-sm  max-md:px-5">
                      Start
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
   
  );
}


const data = [
  {
    name:` Jumping Jacks`,
    img: JumpingJack,
    // className="object-contain object-center mt-2.5 h-full w-full aspect-[1.11] max-md:mt-10"
    description: `Jumping jacks are a simple exercise that involves jumping while spreading the legs and raising the arms to touch overhead. They provide a full-body workout, improving cardiovascular fitness, coordination, and muscular endurance.`,
  },
  {
    name:` The Split Jump`,
    img: SplitJump,
    description: `The split jump is a plyometric exercise that involves jumping explosively and landing in a split position, with one leg forward and the other leg back. This dynamic movement targets the lower body muscles, including the quads, hamstrings, and glutes, while also improving balance and coordination. Split jumps are often incorporated into high-intensity workouts and sports training programs to enhance leg power, agility, and overall athletic performance.`,
  },
  {
    name: `Squat Reach`,
    img: SquatReach,
    description: `Squat Reach Ups is a high-intensity, dynamic workout program that combines squats and reactive movements for a challenging and effective training session.`,
  },
  {
    name: `Inchworm`,
    img: Inchworm,
    description:` The Inchworm exercise is a full-body movement that involves starting in a standing position, walking your hands out to a high plank, and then walking your feet back in towards your hands. It engages multiple muscle groups making it an excellent exercise for stretching the body.`,
  },
  {
    name: `Squat Kicks`,
    img: SquatKicks,
    description: `Squat kicks combine the benefits of squats and kicks into one dynamic exercise. By performing a squat and following it with a powerful kick, this movement targets the lower body muscles while also engaging the core and improving balance.`,
  },
  {
    name: `Shoulder Stretch`,
    img: ShoulderStretch,
    description: `The Shoulder Stretch is a simple yet effective exercise that focuses on stretching and releasing tension in the shoulder muscles. By extending one arm across the chest and gently pulling it towards the opposite side, this stretch promotes flexibility, relieves shoulder tightness, and improves overall range of motion. The Shoulder Stretch is commonly used in warm-up routines, post-workout recovery, or as a daily practice to maintain healthy shoulder mobility.`,
  },
  {
    name: `Punches`,
    img: Punches,
    description: `Punches exercise is a cardio-intensive workout that involves throwing punches with proper technique and intensity. It engages the upper body muscles, including the shoulders, arms, and core, while also increasing heart rate and calorie burn. Incorporating punches into your fitness routine improves upper body strength, endurance, and can serve as a stress-relieving activity.`,
  },
];



export default App;