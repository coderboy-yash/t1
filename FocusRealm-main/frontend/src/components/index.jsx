import * as React from "react";

function MyComponent() {
    return (
        <div className="justify-between items-stretch content-center gap-y-9 self-stretch flex-wrap flex flex-col pt-12 pb-5 px-9 max-md:px-5">
            <div className="bg-blue-950 shrink-0 h-[3px] mt-14 max-md:max-w-full max-md:mt-10" />
            <div className="mt-9 px-px max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col pl-px pr-5 pt-1 pb-4 max-md:mt-7">
                            <div className="justify-between items-center flex gap-3 py-3.5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                    className="aspect-[0.97] object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full my-auto"
                                />
                                <div className="text-blue-950 text-3xl font-medium self-stretch grow whitespace-nowrap">
                                    Focus Realm
                                </div>
                            </div>
                            <div className="text-blue-950 text-sm leading-7 mt-2.5">
                                {" "}
                                Our cutting-edge application is designed to empower you to
                                achieve peak concentration in a world full of distractions.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col my-auto px-2 py-2.5 max-md:mt-9">
                            <div className="text-blue-950 text-xl font-semibold">
                                Contact Us
                            </div>
                            <div className="items-stretch flex justify-between gap-3.5 mt-3 pl-1.5 py-2">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cc234474c890b3e487e53360adda87f5c9f9778ad6e6236dfb24720b06582a9?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                    className="aspect-[0.71] object-contain object-center w-[15px] fill-blue-950 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-blue-950 text-xs self-center grow whitespace-nowrap my-auto">
                                    345 Faukoner Drive, Suite 4. Charlottesville, CA, 12345
                                </div>
                            </div>
                            <div className="items-stretch flex justify-between gap-2 mt-1.5 py-1">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd2e3b8254f61565973559835e99ce090fec77b667f6e290dd8cd2556271d90?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-blue-950 text-xs self-center grow whitespace-nowrap my-auto">
                                    (123)456-7890
                                </div>
                            </div>
                            <div className="items-stretch flex justify-between gap-2 mt-1.5 py-1">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eb6d7b0c8b58e8febfa7bb382dd2e20679e3664bea610f77a47049ce685d20d?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-blue-950 text-xs self-center grow whitespace-nowrap my-auto">
                                    example@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[17%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col px-2 py-5 max-md:mt-7">
                            <div className="text-blue-950 text-xl font-semibold">
                                Quick Links
                            </div>
                            <div className="text-blue-950 text-xs whitespace-nowrap mt-4">
                                About Us
                            </div>
                            <div className="text-blue-950 text-xs whitespace-nowrap mt-3.5">
                                Terms and Condition
                            </div>
                            <div className="text-blue-950 text-xs whitespace-nowrap mt-2.5">
                                The Realm...
                            </div>
                            <div className="text-blue-950 text-xs whitespace-nowrap mt-4">
                                Goals
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="justify-center items-stretch flex flex-col my-auto py-2 max-md:mt-10">
                            <div className="text-blue-950 text-xl font-semibold whitespace-nowrap">
                                Newsletter
                            </div>
                            <div className="text-blue-950 text-sm font-semibold whitespace-nowrap mt-7">
                                You can Trust Us.
                            </div>
                            <div className="justify-between items-center bg-zinc-400 flex gap-5 mt-5 px-3 py-1.5 rounded-[33px]">
                                <div className="text-neutral-300 text-xs font-semibold my-auto">
                                    Your Email Address
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/946503d288571d3458dc176a8247cbb3635fec9556a270efe9541c83cfb2fe88?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                    className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-950 shrink-0 h-[3px] mt-9 max-md:max-w-full" />
            <div className="flex items-center justify-between gap-0 mt-9 max-md:max-w-full max-md:flex-wrap">
                <div className="items-center flex gap-1 my-auto max-md:justify-center">
                    <div className="text-blue-950 text-xs self-stretch whitespace-nowrap">
                        Copyright
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d84be03276a65d3241af225dbfccbcd53bb5495f11c17566f216ca4f2f8e7f?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-[0.9] object-contain object-center w-[9px] overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-blue-950 text-xs self-stretch grow whitespace-nowrap">
                        2018. Lift Media Inc.
                    </div>
                </div>
                <div className="justify-between items-stretch self-stretch flex gap-5 pl-20 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/07577029c47ab0144fe1377e86ba620eac9c222cf257204830df5d9190677372?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3f88b6bae8ce6234dee39d4025cf6aaeaed4ee91ed859760b48701ee53c4b5?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3050581a65d4e37b9cc41e471b30ff69045091d080e85be4f0849ece6c8abef4?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e85ce2580d5c555c1f7ed4fd169c7b24f87832e10418e8fc188b853633764914?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/073a0a1c3a0c53c591f8e73628d52562f42decd3c93168828426d7f7ff025ba5?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc96eb28d413687c18f0d954a1f2dc0320bb926bcb64319aaf3c648d3133837c?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-[1.47] object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                    />
                </div>
            </div>
        </div>
    );
}