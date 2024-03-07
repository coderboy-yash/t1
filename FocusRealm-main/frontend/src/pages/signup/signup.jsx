
import { useAuth0 } from "@auth0/auth0-react";

import React, { useState,useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { register, login,clearErrors } from "../../actions/userAction";
 import  { Link,useNavigate} from "react-router-dom";
 import {useAlert} from "react-alert"
 import {auth,provider} from "../../configure";
 import {signInWithPopup} from "firebase/auth";


const SignupComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [value,setValue] = useState('')
    const {error,loading,isAuthenticated}=useSelector(state=>state.user)

    const handleClick =()=>{
        console.log('pikachu');
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

     const alert=useAlert()

    const dispatch = useDispatch();
       const navigate = useNavigate ();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
        if(isAuthenticated){
            navigate("/")
         }
     
    };

     const redirectHome = location.search ? location.search.split("=")[1] : "/Home";
     const redirectTest = location.search ? location.search.split("=")[1] : "/ADHD";
     const redirectSignup = location.search ? location.search.split("=")[1] : "/signup";

const testTaken = localStorage.getItem("testTaken");

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append("email", email);
        myForm.append("password", password);
        console.log(Object.fromEntries(myForm));
        dispatch(register(Object.fromEntries(myForm)));
    };


    useEffect(()=>{
        setValue(localStorage.getItem('email'))

        if(error){
            alert.error(error)
            dispatch(clearErrors);
        }
        if(isAuthenticated){
            navigate(redirectHome)
         }
         if(!testTaken && !isAuthenticated){
            navigate(redirectTest)
         }
         if(testTaken && !isAuthenticated){
            navigate(redirectSignup)
         }
         if(testTaken && isAuthenticated){
            navigate(redirectHome)
         }

      },[dispatch,alert,error,redirectHome,testTaken,navigate,isAuthenticated,redirectSignup,redirectTest]);
        
        
      const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};

    const { loginWithRedirect } = useAuth0();

    return (
        <div className="px-20 md:px-24 xl:px-36 font-poppins text-black">
            <form encType="multipart/form-data" className="bg-gray w-full overflow-hidden shrink-0 flex flex-col justify-center py-[7px] box-border text-left">
                <div className="self-stretch relative tracking-[0.04em] font-medium">Email</div>
                <div className="self-stretch rounded-mini bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start px-[21px] gap-[14px] text-silver border-[1px] border-solid border-royalblue">
                    <input
                        type="text"
                        className="flex-1 relative font-medium h-full outline-none text-mini  h-full placeholder:text-placeholdertext::placeholder ml-1.5 "
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="self-stretch relative tracking-[0.04em] font-medium pt-2">Password</div>
                <div className="rounded-mini bg-white box-border h-12 overflow-hidden flex items-center justify-around gap-[14px] border-[1px] border-solid border-royalblue">
                    <input
                        type="password"
                        className="flex-1 relative font-medium h-full outline-none text-mini h-full placeholder:text-placeholdertext::placeholder ml-6 "
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3 flex flex-wrap content-center pt-2">
                    <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" />
                    <label className="mr-auto text-mini">Remember me</label>
                    <a href="#" className="text-mini no-underline text-black"><Link to="/password/forgot">Reset Password</Link></a>
                </div>
                <div className="flex flex-col space-y-2">
                    <input type="submit" value="Login" onClick={handleLoginSubmit} className="flex items-center justify-center md:mx-2 md:py-3 rounded-2xl shadow-[0px_4px_70px_rgba(1,_72,_183,_0.38)] cursor-pointer bg-royalblue text-white font-semibold text-mini font-poppins" />
                    <input type="submit" value="Register" onClick={handleRegisterSubmit} className="flex items-center justify-center md:mx-2 md:py-3 rounded-2xl shadow-[0px_4px_70px_rgba(1,_72,_183,_0.38)] cursor-pointer bg-royalblue text-white font-semibold text-mini font-poppins" />
                </div>
                <div className="flex justify-center items-center">
                    <span className="w-full border-solid border-gray-500 border-t-2"></span>
                    <span className="px-4">or</span>
                    <span className="w-full border-solid border-gray-500 border-t-2"></span>
                </div>

             
                <div className="flex space-x-1 justify-center items-center">
                    <input id="agree" type="checkbox" className="mr-1 checked:bg-purple-700" />                    <p className="text-[11px] text-gray-800">I agree to the <span className="font-semibold text-royalblue cursor-pointer">Terms and condition</span> and <span className="font-semibold text-royalblue cursor-pointer">Privacy policies.</span></p>
                    {/* <p
                        // onClick={() => }
                        className="text-mini font-semibold text-royalblue cursor-pointer">Create an account</p> */}
                </div>

            </form>
            <button onClick={handleClick}
                    className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-xl font-medium cursor-pointer border-royalblue bg-white relative">
                    <svg width="450px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path fill="#EA4335 " d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                     <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" />
                     <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" />
                     <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z" />
                 </svg> 
                </button>

        </div>
    );
};

export default SignupComponent;




