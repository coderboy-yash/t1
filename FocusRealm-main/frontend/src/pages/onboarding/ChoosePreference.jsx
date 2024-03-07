import { useNavigate } from "react-router-dom"


const ChoosePreference = () => {
    const navigate = useNavigate();

    return (
        <div className="absolute w-[44.98%] top-[calc(50%_-_153px)] right-[3%] left-[52.03%] h-[390px] overflow-hidden flex flex-col items-start justify-start py-[26px] px-[27px] box-border gap-[16px] font-poppins">
            <div className="rounded-mini bg-gray-200 w-[528px] h-[73px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[43px] px-[49px] box-border">
                <div className="relative font-medium">Choose Your Preference</div>
            </div>
            <div className="self-stretch bg-gray-200 h-[261px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-8 px-[18px] pb-1.5 box-border gap-[21px] text-gray-100">
                <div className="self-stretch rounded-mini bg-gray-200 box-border h-[73px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[13px] pr-4 pl-1 border-[1px] border-solid border-royalblue cursor-pointer"

                >
                    <div className="relative font-medium">Through Organization</div>
                </div>
                <div className="self-stretch relative font-medium text-black text-center">
                    or
                </div>
                <div
                    className="self-stretch rounded-mini bg-gray-200 box-border h-[73px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[13px] pr-4 pl-1 cursor-pointer border-[1px] border-solid border-royalblue"
                    onClick={() => navigate("/as-individual")}
                >
                    <div className="relative font-medium">As Individual</div>
                </div>
            </div>
        </div>
    )
}

export default ChoosePreference