  import React from "react";

  
const ExamplePage = () => {

    const facilities = [
        {
            name: "Restaurant",
            description: "Elevate your dining experience, under the stars!",
            image: "assets/svg/restaurant.svg"
        },
        {
            name: "Kitchenette",
            description: "Unwind. Savor. Indulge. Your perfect homestay kitchenette.",
            image: "assets/svg/kitchen.svg"
        },
        {
            name: "Laundry",
            description: "Relax, Refresh, and Revitalize - Let us take care of your laundry!",
            image: "assets/svg/laundry.svg"
        },

        {
            name: "Parking",
            description: "Your comfortable retreat with hassle-free parking.",
            image: "assets/svg/car.svg"
        },
    ];








    return (
        <div className="w-full h-screen flex items-center justify-center dark:bg-[#454545]">
            <div className="w-[95%] h-[95%] bg-[#4F82D1] rounded-xl overflow-hidden">
                {facilities.map((item) =>
                    <>
                        <div className="flex justify-center font-poppins text-center text-white font-semibold text-[32px]">
                            <p className="w-[80%] text-center">{item.description}</p>
                        </div>
                        <div className="flex justify-around pt-12 ">
                            <div className="flex flex-col gap-10">
                                <div className="w-96 h-16 bg-royalblue rounded-2xl p-2"><p className="font-poppins text-xl font-semibold text-white">1. Never</p></div>
                                <div className="w-96 h-16 bg-royalblue rounded-2xl p-2"><p className="font-poppins text-xl font-semibold text-white">2. Rarely</p></div>
                                <div className="w-96 h-16 bg-royalblue rounded-2xl p-2"><p className="font-poppins text-xl font-semibold text-white">3. Sometimes</p></div>
                                <div className="w-96 h-16 bg-royalblue rounded-2xl p-2"><p className="font-poppins text-xl font-semibold text-white">4. Often</p></div>
                            </div>
                            <div className="-mt-7">
                                <img src="src/assets/5178406 1.png" alt="" />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ExamplePage