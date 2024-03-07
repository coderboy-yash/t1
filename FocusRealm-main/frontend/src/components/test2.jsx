import React from "react";
import {Link} from "react-router-dom";
function MyComponent() {
    return (
        <div className="bg-neutral-200 flex flex-col items-stretch pt-7">
            <div className="flex items-center justify-between gap-5 mx-8 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                <div className="items-stretch flex gap-0 my-auto">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4345cb6402b3a7de989d9489cb74c8bd12b3ace26dc8a48b6da67f7198e7347d?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4345cb6402b3a7de989d9489cb74c8bd12b3ace26dc8a48b6da67f7198e7347d?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4345cb6402b3a7de989d9489cb74c8bd12b3ace26dc8a48b6da67f7198e7347d?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4345cb6402b3a7de989d9489cb74c8bd12b3ace26dc8a48b6da67f7198e7347d?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4345cb6402b3a7de989d9489cb74c8bd12b3ace26dc8a48b6da67f7198e7347d?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4345cb6402b3a7de989d9489cb74c8bd12b3ace26dc8a48b6da67f7198e7347d?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4345cb6402b3a7de989d9489cb74c8bd12b3ace26dc8a48b6da67f7198e7347d?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4345cb6402b3a7de989d9489cb74c8bd12b3ace26dc8a48b6da67f7198e7347d?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-[1.32] object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-gray-950 text-xl font-medium self-center grow whitespace-nowrap my-auto">
                        Focus Realm
                    </div>
                </div>
                <div className="justify-between items-start self-stretch flex gap-5 pl-2 py-0.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <div className="text-gray-950 text-center text-xl font-medium self-center whitespace-nowrap my-auto">
                        About
                    </div>
                    <div className="text-gray-950 text-xl font-medium my-auto">
                        The Realm...
                    </div>
                    <div className="text-gray-950 text-center text-xl font-medium self-center my-auto">
                        Goals
                    </div>
                    <div className="justify-between items-stretch self-stretch flex gap-2.5 px-px py-1">
                        <div className="text-gray-950 text-center text-xl font-semibold whitespace-nowrap justify-center items-stretch border grow px-6 py-2.5 rounded-3xl border-solid border-blue-800 border-opacity-60 max-md:px-5">
                            Login
                        </div>
                        <div className="text-white text-center text-xl font-semibold whitespace-nowrap justify-center items-stretch bg-blue-800 grow px-6 py-2.5 rounded-3xl max-md:px-5">
                            Signup
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-9xl bg-clip-text blur-[1px] max-w-[1007px] self-center mt-32 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                FOCUS REALM
            </div>
            <div className="text-blue-950 text-center text-xl font-medium leading-8 self-center max-w-[750px] mt-6 max-md:max-w-full">
                The ultimate solution to enhance your focus and productivity. Our
                cutting-edge application is designed to empower you to achieve peak
                concentration in a world full of distractions.
                <br />
                Click below to continue
            </div>
            <div className="justify-center items-stretch bg-white bg-opacity-0 self-center flex w-48 max-w-full flex-col mt-5 px-px py-1">
                <div className="justify-between items-stretch bg-blue-800 flex gap-2.5 px-6 py-2.5 rounded-3xl max-md:px-5">
                    <div className="text-white text-center text-xl font-medium grow whitespace-nowrap">
                      <Link to="/ADHD"> Get started</Link>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41dee9128ab0595fc3cc3f87657b52bf179d6ec06717855c14500c863bca0c62?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                        className="aspect-[1.4] object-contain object-center w-[21px] stroke-[2px] strokeWhite overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
            </div>
            <div className="self-center w-full max-w-[1084px] mt-64 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
                        <div className="flex grow items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdd75e184614a06cb80b1028ae60aa01a089acd240b71de619634c674873f765?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full my-auto"
                            />
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                <div className="text-blue-950 text-3xl bg-clip-text whitespace-nowrap">
                                    <span className="text-blue-950">Why </span>Focus Realm?
                                </div>
                                <div className="text-blue-950 text-xl font-semibold whitespace-nowrap mt-9">
                                    <ul>
                                        <li>Pleasant Study Environment</li>
                                    </ul>
                                </div>
                                <div className="text-blue-950 text-xl font-semibold mt-9">
                                    <ul>
                                        <li>Tailored Focus Zones</li>
                                    </ul>
                                </div>
                                <div className="text-blue-950 text-xl font-semibold mt-10">
                                    <ul>
                                        <li>Break Time, Your way</li>
                                    </ul>
                                </div>
                                <div className="text-blue-950 text-xl font-semibold mt-9">
                                    <ul>
                                        <li>Artificial Intelligence</li>
                                    </ul>
                                </div>
                                <div className="text-blue-950 text-xl font-semibold whitespace-nowrap mt-9">
                                    <ul>
                                        <li>Concentration Enhancer</li>
                                    </ul>
                                </div>
                                <div className="text-blue-950 text-xl font-semibold whitespace-nowrap mt-10">
                                    <ul>
                                        <li>Student Support Services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="px-px max-md:max-w-full max-md:mt-10">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[85%] max-md:w-full max-md:ml-0">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48c26c8b741f3dc3379b345c75a66802ad1b7f913f365c9ae617779f705ac603?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c26c8b741f3dc3379b345c75a66802ad1b7f913f365c9ae617779f705ac603?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c26c8b741f3dc3379b345c75a66802ad1b7f913f365c9ae617779f705ac603?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c26c8b741f3dc3379b345c75a66802ad1b7f913f365c9ae617779f705ac603?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c26c8b741f3dc3379b345c75a66802ad1b7f913f365c9ae617779f705ac603?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c26c8b741f3dc3379b345c75a66802ad1b7f913f365c9ae617779f705ac603?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c26c8b741f3dc3379b345c75a66802ad1b7f913f365c9ae617779f705ac603?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48c26c8b741f3dc3379b345c75a66802ad1b7f913f365c9ae617779f705ac603?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                        className="aspect-[0.75] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
                                    />
                                </div>
                                <div className="flex flex-col items-stretch w-[15%] ml-5 max-md:w-full max-md:ml-0">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ed50f8c240235d83f5da8af572b876438c2be350c077481d75974ef61f3a46?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                        className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bf7448b3240994ad5883b5bc20f6e373b9ad8c8a623a384036c8b357d9b57c5?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                className="aspect-[17] object-contain object-center w-[204px] justify-center items-center overflow-hidden self-center max-w-full mt-16 max-md:mt-10"
            />
            <div className="text-blue-950 text-center text-5xl font-bold bg-clip-text self-center max-w-[723px] mt-24 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                <span className="text-blue-950">Frequently </span>Asked Questions
            </div>
            <div className="justify-center items-center bg-white bg-opacity-0 flex w-full flex-col mt-16 px-16 py-5 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="flex w-[756px] max-w-full flex-col items-stretch">
                    <div className="justify-between items-stretch content-center flex-wrap border bg-white bg-opacity-0 flex gap-5 pl-5 pr-8 py-6 rounded-[30px] border-solid border-neutral-400 max-md:max-w-full max-md:px-5">
                        <div className="text-blue-950 text-xl font-semibold grow shrink basis-auto max-md:max-w-full">
                            How does Focus Realm enhance my study experience?
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dded9aa58122d698e88141b19f50dd2fc18c519fd2995d7b7d9d88d23a0a3c6c?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-[2.07] object-contain object-center w-[29px] self-center fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                    </div>
                    <div className="justify-between items-stretch content-center flex-wrap border bg-white bg-opacity-0 flex gap-5 mt-16 pl-5 pr-8 py-6 rounded-[30px] border-solid border-neutral-400 max-md:max-w-full max-md:mt-10 max-md:px-5">
                        <div className="text-blue-950 text-xl font-semibold grow shrink basis-auto max-md:max-w-full">
                            Can I choose my preferred study environment?
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28c882730808fa99820e608002eeebd67e8efaea1fa475d2861959b972aa7380?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-[2.07] object-contain object-center w-[29px] self-center fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                    </div>
                    <div className="justify-between items-stretch content-center flex-wrap border bg-white bg-opacity-0 flex gap-5 mt-16 pl-5 pr-8 py-6 rounded-[30px] border-solid border-neutral-400 max-md:max-w-full max-md:mt-10 max-md:px-5">
                        <div className="text-blue-950 text-xl font-semibold grow shrink basis-auto max-md:max-w-full">
                            What activities are available during break times?
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dc6b7e11072d241f2a47c275a3a764b7e875ae2de887485a920acacebb481de?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-[2.07] object-contain object-center w-[29px] self-center fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                    </div>
                    <div className="justify-between items-stretch content-center flex-wrap border bg-white bg-opacity-0 flex gap-2.5 mt-16 pl-5 pr-8 py-4 rounded-[30px] border-solid border-neutral-400 max-md:max-w-full max-md:mt-10 max-md:px-5">
                        <div className="text-blue-950 text-xl font-semibold grow shrink basis-auto max-md:max-w-full">
                            Can I schedule study sessions or access the platform at any time?
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/487d16d53b3dfa9cf2ec6393b1a5440bc89dbf684870fe67d45eb515f9180c13?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-[2.07] object-contain object-center w-[29px] self-center fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                    </div>
                    <div className="justify-between items-stretch content-center flex-wrap border bg-white bg-opacity-0 flex gap-5 mt-16 pl-5 pr-8 py-5 rounded-[30px] border-solid border-neutral-400 max-md:max-w-full max-md:mt-10 max-md:px-5">
                        <div className="text-blue-950 text-2xl font-semibold grow shrink basis-auto max-md:max-w-full">
                            Are there any student support services available?
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f09e96166f6567d1de623413f35f1d78701cb53757835380d8b9f7c55f1a7e?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-[2.07] object-contain object-center w-[29px] self-center fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="items-center flex w-full flex-col justify-center mt-20 px-16 py-6 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="flex w-full max-w-[1184px] flex-col items-center pr-6 pb-6 max-md:max-w-full max-md:pr-5">
                    <div className="text-blue-950 text-center text-5xl font-bold bg-clip-text whitespace-nowrap max-md:max-w-full max-md:text-4xl">
                        <span className="text-blue-950">Our </span>Happy Users
                    </div>
                    <div className="items-stretch self-stretch flex justify-between gap-5 mt-16 pl-20 pr-3 py-1.5 rounded-[30px] max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pl-5">
                        <div className="items-stretch border flex grow basis-[0%] flex-col px-8 py-5 rounded-[30px] border-solid border-neutral-400 max-md:max-w-full max-md:px-5">
                            <div className="items-stretch flex gap-0 pr-20 pb-2.5 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/794b04b7d74e9bfe217f19703072522ab49c3ce86e73707d2e4803283211e551?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                    className="aspect-[0.9] object-contain object-center w-7 fill-amber-400 overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/794b04b7d74e9bfe217f19703072522ab49c3ce86e73707d2e4803283211e551?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                    className="aspect-[0.9] object-contain object-center w-7 fill-amber-400 overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/794b04b7d74e9bfe217f19703072522ab49c3ce86e73707d2e4803283211e551?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                    className="aspect-[0.9] object-contain object-center w-7 fill-amber-400 overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/794b04b7d74e9bfe217f19703072522ab49c3ce86e73707d2e4803283211e551?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                    className="aspect-[0.9] object-contain object-center w-7 fill-amber-400 overflow-hidden shrink-0 max-w-full"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/794b04b7d74e9bfe217f19703072522ab49c3ce86e73707d2e4803283211e551?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                    className="aspect-[0.9] object-contain object-center w-7 fill-amber-400 overflow-hidden shrink-0 max-w-full"
                                />
                            </div>
                            <div className="text-blue-950 text-xl font-medium mt-4 max-md:max-w-full">
                                &quot;I am genuinely impressed with Focus Realm! The platform's
                                focus on providing a dedicated space for focused studying is
                                exactly what I needed. Focus Realm provides a distraction-free
                                environment, enhancing my concentration. Highly recommend to
                                anyone looking to elevate their study routine!&quot;
                            </div>{" "}
                            <div className="justify-between items-center flex gap-2.5 mt-4 pl-20 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                                <div className="bg-blue-950 w-[49px] shrink-0 h-1 my-auto" />{" "}
                                <div className="text-blue-950 text-right text-xl self-stretch grow whitespace-nowrap">
                                    Rajeev Sharma
                                </div>
                            </div>
                        </div>{" "}
                        <div className="justify-center items-center bg-blue-800 self-center flex aspect-square flex-col w-10 h-10 my-auto px-4 rounded-3xl">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd30b363b8918952afe7ef533196f07075a98dd5283590f4fc3c0657c9e57bc1?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                className="aspect-[0.5] object-contain object-center w-full fill-white overflow-hidden"
                            />
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="justify-between items-stretch content-center gap-y-9 flex-wrap z-[1] flex w-full flex-col mt-8 pt-12 pb-5 px-8 max-md:max-w-full max-md:px-5">
                <div className="bg-blue-950 shrink-0 h-[3px] mt-14 max-md:max-w-full max-md:mt-10" />{" "}
                <div className="mt-9 px-0.5 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex grow flex-col pl-px pr-5 pt-1 pb-4 max-md:mt-7">
                                <div className="justify-between items-center flex gap-3 py-3.5">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77f5b0583f6a01897d77621bb2c13bd622e817e1a9def252d369d53c2f6ed54?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                        className="aspect-[0.97] object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full my-auto"
                                    />{" "}
                                    <div className="text-blue-950 text-3xl font-medium self-stretch grow whitespace-nowrap">
                                        Focus Realm
                                    </div>
                                </div>{" "}
                                <div className="text-blue-950 text-sm leading-7 mt-2.5">
                                    {" "}
                                    Our cutting-edge application is designed to empower you to
                                    achieve peak concentration in a world full of distractions.
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex flex-col my-auto px-2 py-2.5 max-md:mt-9">
                                <div className="text-blue-950 text-xl font-semibold">
                                    Contact Us
                                </div>{" "}
                                <div className="items-stretch flex justify-between gap-3.5 mt-3 pl-1.5 py-2">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cc234474c890b3e487e53360adda87f5c9f9778ad6e6236dfb24720b06582a9?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                        className="aspect-[0.71] object-contain object-center w-[15px] fill-blue-950 overflow-hidden shrink-0 max-w-full"
                                    />{" "}
                                    <div className="text-blue-950 text-xs self-center grow whitespace-nowrap my-auto">
                                        345 Faukoner Drive, Suite 4. Charlottesville, CA, 12345
                                    </div>
                                </div>{" "}
                                <div className="items-stretch flex justify-between gap-2 mt-1.5 py-1">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd2e3b8254f61565973559835e99ce090fec77b667f6e290dd8cd2556271d90?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                    />{" "}
                                    <div className="text-blue-950 text-xs self-center grow whitespace-nowrap my-auto">
                                        (123)456-7890
                                    </div>
                                </div>{" "}
                                <div className="items-stretch flex justify-between gap-2 mt-1.5 py-1">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eb6d7b0c8b58e8febfa7bb382dd2e20679e3664bea610f77a47049ce685d20d?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                    />{" "}
                                    <div className="text-blue-950 text-xs self-center grow whitespace-nowrap my-auto">
                                        example@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[17%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex grow flex-col px-2 py-5 max-md:mt-7">
                                <div className="text-blue-950 text-xl font-semibold">
                                    Quick Links
                                </div>{" "}
                                <div className="text-blue-950 text-xs whitespace-nowrap mt-4">
                                    About Us
                                </div>{" "}
                                <div className="text-blue-950 text-xs whitespace-nowrap mt-3.5">
                                    Terms and Condition
                                </div>{" "}
                                <div className="text-blue-950 text-xs whitespace-nowrap mt-2.5">
                                    The Realm...
                                </div>{" "}
                                <div className="text-blue-950 text-xs whitespace-nowrap mt-4">
                                    Goals
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-stretch flex flex-col my-auto py-2 max-md:mt-10">
                                <div className="text-blue-950 text-xl font-semibold whitespace-nowrap">
                                    Newsletter
                                </div>{" "}
                                <div className="text-blue-950 text-sm font-semibold whitespace-nowrap mt-7">
                                    You can Trust Us.
                                </div>{" "}
                                <div className="justify-between items-center bg-zinc-400 flex gap-5 mt-5 px-3 py-1.5 rounded-[33px]">
                                    <div className="text-neutral-300 text-xs font-semibold my-auto">
                                        Your Email Address
                                    </div>{" "}
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/946503d288571d3458dc176a8247cbb3635fec9556a270efe9541c83cfb2fe88?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                                        className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                <div className="bg-blue-950 shrink-0 h-[3px] mt-9 max-md:max-w-full" />{" "}
                <div className="flex items-center justify-between gap-0 mt-9 max-md:max-w-full max-md:flex-wrap">
                    <div className="items-center flex gap-1 my-auto max-md:justify-center">
                        <div className="text-blue-950 text-xs self-stretch whitespace-nowrap">
                            Copyright
                        </div>{" "}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d84be03276a65d3241af225dbfccbcd53bb5495f11c17566f216ca4f2f8e7f?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-[0.9] object-contain object-center w-[9px] overflow-hidden shrink-0 max-w-full my-auto"
                        />{" "}
                        <div className="text-blue-950 text-xs self-stretch grow whitespace-nowrap">
                            2018. Lift Media Inc.
                        </div>
                    </div>{" "}
                    <div className="justify-between items-stretch self-stretch flex gap-5 pl-20 pr-px max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/07577029c47ab0144fe1377e86ba620eac9c222cf257204830df5d9190677372?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
                        />{" "}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3f88b6bae8ce6234dee39d4025cf6aaeaed4ee91ed859760b48701ee53c4b5?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
                        />{" "}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3050581a65d4e37b9cc41e471b30ff69045091d080e85be4f0849ece6c8abef4?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
                        />{" "}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e85ce2580d5c555c1f7ed4fd169c7b24f87832e10418e8fc188b853633764914?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
                        />{" "}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/073a0a1c3a0c53c591f8e73628d52562f42decd3c93168828426d7f7ff025ba5?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
                        />{" "}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc96eb28d413687c18f0d954a1f2dc0320bb926bcb64319aaf3c648d3133837c?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                            className="aspect-[1.47] object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                        />
                    </div>
                </div>
            </div>{" "}
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5c8f70be5dde69a142523220a4c4eea0e1c3d281b82e6ba9952ae6bb972dfe?apiKey=91472dff4a9b43ce95ae25688f4c786f&"
                className="aspect-[1.12] object-contain object-center w-full items-center blur-2xl overflow-hidden mt-0 max-md:max-w-full max-md:mt-0"
            />
        </div>
    );
}

export default MyComponent