import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Email = () => {
    const [visible, setVisible] = useState<any>(false);

    const navigate = useNavigate();

    return (
        <div className="px-20 md:px-24 xl:px-36 font-poppins text-black">
            <div className="bg-gray w-full overflow-hidden shrink-0 flex flex-col justify-center py-[7px] box-border text-left">
                <div className="self-stretch relative tracking-[0.04em] font-medium">
                    Email
                </div>

                <div className="self-stretch rounded-mini bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start px-[21px] gap-[14px] text-silver border-[1px] border-solid border-royalblue">

                    <div className="flex items-center gap-4">
                        <div
                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="fluent:mail-24-filled">
                                    <path id="Vector" d="M22 8.608V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V8.608L11.652 13.664C11.7594 13.7202 11.8788 13.7496 12 13.7496C12.1212 13.7496 12.2406 13.7202 12.348 13.664L22 8.608ZM5.25 4H18.75C19.5556 3.9999 20.3325 4.299 20.93 4.83927C21.5276 5.37954 21.9032 6.12248 21.984 6.924L12 12.154L2.016 6.924C2.09352 6.15431 2.44305 5.43752 3.00175 4.90246C3.56045 4.36741 4.29168 4.04919 5.064 4.005L5.25 4Z" fill="#0148B7" />
                                </g>
                            </svg>
                        </div>
                        <input type="text" className="flex-1 relative font-medium h-full outline-none text-mini placeholder:text-placeholdertext" placeholder="Enter your email address" />
                    </div>
                </div>
                <div className="self-stretch relative tracking-[0.04em] font-medium pt-2">
                    Password
                </div>

                <div className="rounded-mini bg-white box-border h-12 overflow-hidden flex items-center justify-around gap-[14px] text-silver border-[1px] border-solid border-royalblue">

                    <div className="flex items-center gap-4">
                        <div
                            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" strokeWidth="0.24000000000000005"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8Z" fill="#0148B7"></path> </g></svg>
                        </div>
                        <input
                            type={visible ? "text" : "password"}
                            className="flex-1 relative font-medium outline-none text-mini h-full placeholder:text-placeholdertext" placeholder="Enter your password" />
                    </div>
                    <div
                        onClick={() => {
                            setVisible(!visible);
                        }}
                        className="flex items-center justify-between pt-2"
                    >
                        {visible ? (
                            // <AiFillEye class="w-6 h-6" color={colors.primary} />
                            // <p className="text-white">Hii</p>

                            <div>
                                <svg fill="#000000" height="22" width="23" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <g>
                                        <path d="M506.309,238.459C445.412,154.281,354.177,106,256,106S66.588,154.281,5.691,238.459c-7.588,10.474-7.588,24.609,0,35.083
		C66.588,357.719,157.824,406,256,406s189.412-48.281,250.309-132.458C513.897,263.068,513.897,248.932,506.309,238.459z M256,361
		c-58.221,0-105.412-47-105.412-105S197.779,151,256,151c58.213,0,105.412,46.999,105.412,105S314.213,361,256,361z"/>
                                        <path d="M256,181v75h-75.294c0,41.426,33.706,75,75.294,75c41.581,0,75.294-33.574,75.294-75S297.581,181,256,181z" />
                                    </g>
                                </svg>
                            </div>
                        ) : (
                            // <AiFillEyeInvisible class="w-6 h-6" color={colors.primary} />
                            <div>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6873 4.78282C21.827 4.63281 21.9031 4.4344 21.8995 4.2294C21.8959 4.02439 21.8129 3.82879 21.6679 3.6838C21.5229 3.53882 21.3273 3.45577 21.1223 3.45215C20.9173 3.44853 20.7189 3.52463 20.5689 3.66441L3.68717 20.5461C3.60942 20.6185 3.54706 20.7059 3.50381 20.803C3.46056 20.9 3.4373 21.0048 3.43543 21.1111C3.43355 21.2173 3.4531 21.3229 3.4929 21.4214C3.5327 21.5199 3.59193 21.6095 3.66708 21.6846C3.74222 21.7597 3.83173 21.819 3.93026 21.8588C4.0288 21.8986 4.13434 21.9181 4.24059 21.9162C4.34684 21.9144 4.45163 21.8911 4.5487 21.8479C4.64577 21.8046 4.73313 21.7423 4.80558 21.6645L8.00782 18.4623C9.39845 19.1038 10.9906 19.5226 12.6872 19.5226C15.4495 19.5226 17.9332 18.4137 19.7227 17.04C20.6195 16.3521 21.3549 15.5882 21.8698 14.8454C22.3762 14.1152 22.7107 13.3492 22.7107 12.6645C22.7107 11.9797 22.3762 11.2137 21.8698 10.4846C21.3549 9.74076 20.6195 8.97687 19.7227 8.28999C19.4378 8.07053 19.1339 7.8574 18.8153 7.65587L21.6873 4.78282ZM15.9897 10.4825L14.8291 11.641C15.0406 12.084 15.1097 12.5817 15.0267 13.0656C14.9436 13.5494 14.7127 13.9956 14.3655 14.3428C14.0184 14.6899 13.5722 14.9209 13.0883 15.0039C12.6045 15.0869 12.1068 15.0179 11.6638 14.8063L10.5031 15.9669C11.264 16.4707 12.1756 16.696 13.0836 16.6047C13.9915 16.5133 14.84 16.1109 15.4852 15.4657C16.1305 14.8204 16.5329 13.9719 16.6242 13.064C16.7156 12.156 16.4903 11.2444 15.9865 10.4836L15.9897 10.4825Z" fill="black" />
                                    <path d="M13.3941 8.77106C13.4375 8.77919 13.4823 8.77672 13.5245 8.76386C13.5668 8.75101 13.6053 8.72814 13.6368 8.6972L15.6942 6.63975C15.7262 6.60829 15.7494 6.56899 15.7614 6.52578C15.7735 6.48256 15.774 6.43694 15.7629 6.39348C15.7518 6.35001 15.7294 6.31022 15.6982 6.27808C15.6669 6.24594 15.6277 6.22258 15.5845 6.21032C14.6416 5.94455 13.6668 5.8086 12.6872 5.80621C9.92493 5.80621 7.44121 6.91513 5.65175 8.28888C4.75491 8.9768 4.01951 9.7407 3.50356 10.4835C2.99711 11.2136 2.6637 11.9796 2.6637 12.6644C2.6637 13.3492 2.99816 14.1152 3.50356 14.8442C4.00564 15.5489 4.59885 16.184 5.2677 16.7329C5.31775 16.7743 5.38148 16.7954 5.44633 16.792C5.51118 16.7887 5.57243 16.7612 5.61799 16.7149L8.72 13.6129C8.75094 13.5814 8.7738 13.5429 8.78666 13.5006C8.79952 13.4584 8.80199 13.4137 8.79386 13.3703C8.67952 12.741 8.71942 12.0934 8.91015 11.483C9.10088 10.8725 9.43675 10.3174 9.88899 9.86514C10.3412 9.4129 10.8964 9.07703 11.5068 8.8863C12.1173 8.69557 12.7649 8.65567 13.3941 8.77V8.77106Z" fill="black" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="mb-3 flex flex-wrap content-center pt-2 font-poppins font-medium">
                <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" />
                <label className="mr-auto text-mini">Remember me</label>
                <a href="#" className="text-mini no-underline text-black">Reset Password</a>
            </div>

            <div className="flex flex-col space-y-2">
                <button className="flex items-center justify-center md:mx-2 md:py-3 rounded-2xl shadow-[0px_4px_70px_rgba(1,_72,_183,_0.38)] cursor-pointer bg-royalblue text-white font-semibold text-mini font-poppins">Login</button>
                <div className="flex justify-center items-center">
                    <span className="w-full border-solid border-gray-500 border-t-2"></span>
                    <span className="px-4">or</span>
                    <span className="w-full border-solid border-gray-500 border-t-2"></span>
                </div>
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-xl font-medium border-royalblue bg-white relative">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#EA4335 " d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                        <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" />
                        <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" />
                        <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z" />
                    </svg>
                </button>
                <div className="flex space-x-1 justify-center font-poppins font-medium whitespace-nowrap">
                    <p className="text-mini text-gray-800">Don’t have an account?</p>
                    <p
                        onClick={() => navigate("/signup")}
                        className="text-mini font-semibold text-royalblue cursor-pointer">Create an account</p>
                </div>
            </div>
        </div>
    )
}

export default Email