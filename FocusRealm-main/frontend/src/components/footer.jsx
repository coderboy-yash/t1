// import { Frame589 } from "./Frame589";
import React from "react";
export const FooterSection = () => {
    return (
        <div className="flex flex-wrap h-[452px] items-center justify-between gap-[1px_35px] px-[34px] py-[41px] relative font-poppins">
            <div className="relative w-fit mt-[-22.57px] font-medium text-[#112c59] text-[32px] tracking-[0] leading-[normal]">
                {""}
            </div>
            {/* <img className="w-[1372px] h-[3.13px] mr-[-1.00px] -ml-px relative object-cover" alt="Line" src="line-5.svg" /> */}
            <div className="w-full border-solid border border-royalblue"></div>
            <div className="flex flex-col w-[396px] items-center gap-[9px] pl-px pr-[19px] py-[4px] relative -ml-px">
                <div className="flex h-[75px] items-center justify-center gap-[11px] relative self-stretch w-full">
                    <img className="relative w-[30px] h-[31px] " alt="Logo" src="src/assets/images/logo 1.png" />
                    <div className="relative flex-1 h-[48px] font-poppins font-medium text-[#112c59] text-[32px] tracking-[0] leading-[normal]">
                        Focus Realm
                    </div>
                </div>
                <p className="relative self-stretch h-[79px] font-poppins font-normal text-[#112c59] text-[13px] tracking-[0] leading-[27px]">
                    {" "}
                    Our cutting-edge application is designed to empower you to achieve peak concentration in a world full of
                    distractions.
                </p>
            </div>
            <div className="flex flex-col w-[358px] h-[169px] items-start gap-[6px] p-[8px] relative -ml-px">
                <div className="flex flex-col w-[282px] h-[35px] items-start gap-[6px] relative">
                    <div className="relative self-stretch h-[29px] mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#112c59] text-[20px] tracking-[0] leading-[normal]">
                        Contact Us
                    </div>
                    <div className="w-[282px] border-solid border"></div>
                </div>
                <div className="flex h-[36px] items-center gap-[8px] relative self-stretch w-full">
                    {/* <img className="relative w-[25px]" alt="Ion location sharp" src="ion-location-sharp.svg" /> */}
                    <div>
                        <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 0.591309C3.35953 0.591309 0 3.61521 0 7.34131C0 13.3413 7.5 21.5913 7.5 21.5913C7.5 21.5913 15 13.3413 15 7.34131C15 3.61521 11.6405 0.591309 7.5 0.591309ZM7.5 11.0913C6.90666 11.0913 6.32664 10.9154 5.83329 10.5857C5.33994 10.2561 4.95542 9.78754 4.72836 9.23936C4.5013 8.69118 4.44189 8.08798 4.55764 7.50604C4.6734 6.92409 4.95912 6.38955 5.37868 5.96999C5.79824 5.55043 6.33279 5.26471 6.91473 5.14895C7.49667 5.0332 8.09987 5.09261 8.64805 5.31967C9.19623 5.54673 9.66476 5.93125 9.99441 6.4246C10.3241 6.91795 10.5 7.49796 10.5 8.09131C10.4991 8.88669 10.1828 9.64925 9.62036 10.2117C9.05794 10.7741 8.29538 11.0904 7.5 11.0913Z" fill="#122C5A" />
                        </svg>
                    </div>

                    <p className="relative flex-1 font-poppins font-normal text-[#112c59] text-[11px] tracking-[0] leading-[normal]">
                        345 Faukoner Drive, Suite 4. Charlottesville, CA, 12345
                    </p>
                </div>
                <div className="flex h-[30px] items-center gap-[8px] relative self-stretch w-full">
                    {/* <img className="relative w-[24px] h-[24px]" alt="Mingcute phone fill" src="mingcute-phone-fill.svg" /> */}
                    <div>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_423_2918)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.552 22.2243C15.112 22.1713 11.031 21.6073 6.757 17.3343C2.484 13.0603 1.921 8.98028 1.867 7.53928C1.787 5.34328 3.469 3.21028 5.412 2.37728C5.64598 2.27625 5.9022 2.23778 6.15553 2.26566C6.40886 2.29353 6.65059 2.38679 6.857 2.53628C8.457 3.70228 9.561 5.46628 10.509 6.85328C10.7176 7.15801 10.8068 7.52883 10.7596 7.89508C10.7123 8.26133 10.532 8.59741 10.253 8.83928L8.302 10.2883C8.20774 10.3563 8.14139 10.4563 8.11528 10.5696C8.08916 10.6829 8.10505 10.8018 8.16 10.9043C8.602 11.7073 9.388 12.9033 10.288 13.8033C11.189 14.7033 12.441 15.5413 13.3 16.0333C13.4077 16.0937 13.5345 16.1106 13.6543 16.0805C13.774 16.0504 13.8777 15.9755 13.944 15.8713L15.214 13.9383C15.4475 13.6281 15.7919 13.4203 16.1752 13.3585C16.5584 13.2966 16.9508 13.3854 17.27 13.6063C18.677 14.5803 20.319 15.6653 21.521 17.2043C21.6826 17.4122 21.7854 17.6597 21.8187 17.9209C21.8519 18.1822 21.8144 18.4475 21.71 18.6893C20.873 20.6423 18.755 22.3053 16.552 22.2243Z" fill="#122C5A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_423_2918">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.0913086)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="relative flex-1 font-poppins font-normal text-[#112c59] text-[11px] tracking-[0] leading-[normal]">
                        (123)456-7890
                    </div>
                </div>
                <div className="flex h-[30px] items-center gap-[8px] relative self-stretch w-full">
                    {/* <img className="relative w-[24px] h-[24px]" alt="Ic round print" src="ic-round-print.svg" /> */}
                    <div>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 8.09131H5C3.34 8.09131 2 9.43131 2 11.0913V15.0913C2 16.1913 2.9 17.0913 4 17.0913H6V19.0913C6 20.1913 6.9 21.0913 8 21.0913H16C17.1 21.0913 18 20.1913 18 19.0913V17.0913H20C21.1 17.0913 22 16.1913 22 15.0913V11.0913C22 9.43131 20.66 8.09131 19 8.09131ZM15 19.0913H9C8.45 19.0913 8 18.6413 8 18.0913V14.0913H16V18.0913C16 18.6413 15.55 19.0913 15 19.0913ZM19 12.0913C18.45 12.0913 18 11.6413 18 11.0913C18 10.5413 18.45 10.0913 19 10.0913C19.55 10.0913 20 10.5413 20 11.0913C20 11.6413 19.55 12.0913 19 12.0913ZM17 3.09131H7C6.45 3.09131 6 3.54131 6 4.09131V6.09131C6 6.64131 6.45 7.09131 7 7.09131H17C17.55 7.09131 18 6.64131 18 6.09131V4.09131C18 3.54131 17.55 3.09131 17 3.09131Z" fill="#122C5A" />
                        </svg>
                    </div>
                    <div className="relative flex-1 font-poppins font-normal text-[#112c59] text-[11px] tracking-[0] leading-[normal]">
                        example@gmail.com
                    </div>
                </div>
            </div>
            <div className="inline-flex flex-col h-[186px] items-start gap-[6px] px-[7px] py-[14px] relative flex-[0_0_auto] -ml-px">
                <div className="flex flex-col w-[152px] h-[35px] items-start gap-[6px] relative">
                    <div className="relative self-stretch h-[29px] mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#112c59] text-[20px] tracking-[0] leading-[normal]">
                        Quick Links
                    </div>
                    {/* <img className="w-[147px] h-[1.01px] mb-[-0.01px] relative object-cover" alt="Line" src="image.svg" /> */}
                    <div className="w-24 border-solid border"></div>
                </div>
                <div className="flex w-[184px] h-[26px] items-center gap-[8px] relative">
                    <div className="relative flex-1 font-poppins font-normal text-[#112c59] text-[11px] tracking-[0] leading-[normal]">
                        About Us
                    </div>
                </div>
                <div className="flex w-[205px] items-center gap-[8px] relative flex-1 grow">
                    <div className="relative flex-1 font-poppins font-normal text-[#112c59] text-[11px] tracking-[0] leading-[normal]">
                        Terms and Condition
                    </div>
                </div>
                <div className="flex w-[205px] items-center gap-[8px] relative flex-1 grow">
                    <div className="relative flex-1 font-poppins font-normal text-[#112c59] text-[11px] tracking-[0] leading-[normal]">
                        The Realm...
                    </div>
                </div>
                <div className="w-[205px] h-[30px] items-center gap-[8px] flex relative">
                    <div className="relative flex-1 font-poppins font-normal text-[#112c59] text-[11px] tracking-[0] leading-[normal]">
                        Goals
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[317px] h-[156px] items-start justify-center gap-[20px] relative -ml-px">
                <div className="flex-col items-start gap-[6px] self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="relative self-stretch h-[29px] mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#112c59] text-[20px] tracking-[0] leading-[normal]">
                        Newsletter
                    </div>
                    {/* <img className="w-[255.99px] h-[1.05px] relative object-cover" alt="Line" src="line-4-2.svg" /> */}
                    <div className="w-52 border-solid border"></div>
                </div>
                <div className="relative self-stretch h-[19px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#112c59] text-[14px] tracking-[0] leading-[normal]">
                    You can Trust Us.
                </div>
                <div className="flex items-center justify-around gap-[131px] pl-[31px] pr-[9px] py-[7px] relative self-stretch w-72 bg-[#bab9b9] rounded-[33px]">
                    <div className="relative w-[125px] h-[18px] ml-[-19.00px] font-semibold text-[#d2d2d2] text-[12px] tracking-[0] leading-[normal]">
                        Your Email Address
                    </div>
                    {/* <Frame589 className="!relative !w-[50px] !h-[50px] !mt-[-3.50px] !mb-[-11.50px] !mr-[-5.00px]" /> */}
                    <div className="flex justify-center items-center">
                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="1.61426" width="40" height="40" rx="20" fill="#0148B7" />
                            <g filter="url(#filter0_d_423_2946)">
                                <circle cx="25" cy="21.6143" r="20.5" transform="rotate(-180 25 21.6143)" stroke="white" />
                                <path d="M29.7071 22.3214C30.0976 21.9308 30.0976 21.2977 29.7071 20.9072L23.3431 14.5432C22.9526 14.1527 22.3195 14.1527 21.9289 14.5432C21.5384 14.9337 21.5384 15.5669 21.9289 15.9574L27.5858 21.6143L21.9289 27.2711C21.5384 27.6616 21.5384 28.2948 21.9289 28.6853C22.3195 29.0759 22.9526 29.0759 23.3431 28.6853L29.7071 22.3214ZM28 22.6143H29V20.6143H28V22.6143Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_423_2946" x="0" y="0.614258" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0.282353 0 0 0 0 0.717647 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_423_2946" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_423_2946" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>

            </div>
            <div className="w-full border-solid border border-royalblue"></div>
            {/* <img className="w-[1372px] h-[4.01px] mr-[-1.00px] -ml-px relative object-cover" alt="Line" src="line-6.svg" /> */}
            <div className="flex w-[194px] h-[13px] items-end gap-[2px] relative mb-[-11.07px] -ml-px">
                <div className="relative h-[13px] mt-[-1.00px] font-normal text-[#112c59] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Copyright
                </div>
                {/* <img className="relative w-[11.38px]" alt="Charm copyright" src="charm-copyright.svg" /> */}
                <div className="font-bold text-[#112c59] ">©</div>
                <div className="relative flex-1 h-[13px] font-normal text-[#112c59] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
                    2023. Lift Media Inc.
                </div>
            </div>
            <img className="relative flex-1 grow mb-[-21.57px] -ml-px" alt="Frame" src="src/assets/images/Frame 608.png" />
        </div>
    );
};
