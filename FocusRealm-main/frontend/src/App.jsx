
import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import AsIndividual from "./pages/login-as-individual"
//  import Onboarding from "./pages/onboarding"
import ProfileLogOut from "./pages/Profile/ProfileAccount";
import ProfileSetting from "./pages/Profile/ProfileSetting"
import ProfileDashboard from "./pages/Profile/ProfileDashh";
import ProfileSupport from "./pages/Profile/ProfileSupport"
import ProfileNotification from "./pages/Profile/ProfileNotification"
import ProfileAccount from "./pages/Profile/ProfileAccount"
import Signup from "./pages/signup"
import LandingPage from "./pages/landing-page"
import AOS from "aos";
import ADHD from "./components/TestPage2"
import Question1 from "./components/Question/Questions1"
import Questions2 from "./components/Question/Questions2"
import Questions3 from "./components/Question/Questions3"
import Questions4 from "./components/Question/Questions4"
import Questions5 from "./components/Question/Questions5"
import Questions6 from "./components/Question/Questions6"
import Questions7 from "./components/Question/Questions7"
import Questions8 from "./components/Question/Questions8"
import Questions9 from "./components/Question/Questions9"
import Questions10 from "./components/Question/Questions10"
import Questions11 from "./components/Question/Questions11"
import Questions12 from "./components/Question/Questions12"
import Questions13 from "./components/Question/Questions13"
import Questions14 from "./components/Question/Questions14"
import Questions15 from "./components/Question/Questions15"

// import {useNavigate} from "react-router-dom"
import GameCard from "./components/games/GameCard/GameCard"
import ForgotPassword from "./pages/signup/ForgotPassword"
import ResetPassword from "./pages/signup/ResetPassword"
// import TicTacToe from "./pages/Game/TicTacToe/src/"
import { useAuth0 } from "@auth0/auth0-react";
import "aos/dist/aos.css";
import Results from "./components/Result"
import Home from "./pages/Home/Home"
import ProtectedRoute from "./components/Route/ ProtectedRoute";
import { loadUser } from "./actions/userAction";
import store from "./store";
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import Chess from "./pages/Game/Chess/Chess";
import Trivia from "./pages/Game/Trivia/Trivia";
import TicTacToe from "./pages/Game/TicTacToe/App";
import TypingTest from "./pages/Game/Typing-Test/Typing-Test";
import Sudoku from "./pages/Game/Sudoku/src/App";
// import HighLow from "./pages/Game/HighLow/HighLow";
// import Hangman from "./pages/Game/Hangman/Hangman";
import GuessTheLogo from "./pages/Game/GuessTheLogo/GuessTheLogo";
import AppExercise from "./pages/Profile/AppExcercise"
import AppGame from "./pages/Profile/AppGames"

const App = () => {
   
 // const { user, isAuthenticate, isLoading } = useAuth0();


  // const [user, setUser] = useState(null);

	// const getUser = async () => {
	// 	try {
	// 		const url = `${process.env.REACT_APP_API_URL}/api/v1/login/success`;
	// 		const { data } = await axios.get(url, { withCredentials: true });
	// 		setUser(data.user);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };
  //  const navigate=useNavigate()
  const { isAuthenticated } = useSelector((state) => state.user);
  //const dispatch=useDispatch();


  AOS.init({
    // startEvent: "DOMContentLoaded",
    // offset: 300, // offset (in px) from the original trigger point
    // delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out",
    // once: true,
  });


  var myData = localStorage.getItem('email');

  useEffect(() => {
    store.dispatch(loadUser());
   
    //  getUser();
  }, []);


  return (
    <Router>
      <Routes>
        {/* <Route index element={<Onboarding />} /> */}
        {/* <Route path="/as-individual" element={<AsIndividual />} /> */}
        
        
        <Route path="/dashboard" element={<ProfileDashboard />} />
        <Route path="/setting" element={<ProfileSetting />} />
        <Route path="/support" element={<ProfileSupport />} />
        <Route path="/notification" element={< ProfileNotification />} />
        <Route path="/account" element={< ProfileAccount />} />
        <Route path="/logout" element={< ProfileLogOut />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/ADHD" element={<ADHD/>} />
        <Route path="/Questions1" element={<Question1 />} />
        <Route path="/Questions2" element={<Questions2 />} />
        <Route path="/Questions3" element={<Questions3 />} />
        <Route path="/Questions4" element={<Questions4 />} />
        <Route path="/Questions5" element={<Questions5 />} />
        <Route path="/Questions6" element={<Questions6 />} />
        <Route path="/Questions7" element={<Questions7 />} />
        <Route path="/Questions8" element={<Questions8 />} />
        <Route path="/Questions9" element={<Questions9 />} />
        <Route path="/Questions10" element={<Questions10 />} />
        <Route path="/Questions11" element={<Questions11 />} />
        <Route path="/Questions12" element={<Questions12 />} />
        <Route path="/Questions13" element={<Questions13 />} />
        <Route path="/Questions14" element={<Questions14 />} />
        <Route path="/Questions15" element={<Questions15 />} />
        <Route path="/Results" element={<Results />} />
     {/* // <Route path="/Home" element={<Home />} /> */}
{/* 
        <Route
          exact
          path="/Home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated }>
              <Home />
            </ProtectedRoute>
          }
        /> */}


<Route path="/signup" element={

(myData || isAuthenticated)?
(<Home />):(<Signup/>)}
 />

<Route
          exact
          path="/Home"
          element={
           (myData || isAuthenticated)?
              (<Home />):(<Signup/>)}
        />


        <Route exact path="/dashboard" element={
           (isAuthenticated || myData)?
           (<ProfileDashboard />):(<Home />)
            
          
        } />
        <Route exact path="/setting" element={
       (isAuthenticated || myData)?
       ( <ProfileSetting />):(<Home />)}
        />


        <Route exact path="/support" element={
          (isAuthenticated || myData)?
          ( <ProfileSupport />):(<Home />)
        }
          />

        <Route exact path="/notification" element={
          (isAuthenticated || myData)?
          (< ProfileNotification />):(<Home />)
          
        
        } />

        <Route exact path="/account" element={
            (isAuthenticated || myData)?
            ( <ProfileAccount />):(<Home />)
          
        } />

        <Route exact path="/logout" element={
            (isAuthenticated || myData)?
            (< ProfileLogOut />):(<Home />)
          
        
        } />

        <Route path="/GameCard" element={<GameCard name={""} link={""} image={""} />} />

        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />

        <Route path="/GameCard" element={<GameCard name={""} link={""} image={""} />} />


        {/* <Route path="/test2" element={<MyComponent />} /> */}
        {/* <Route path="/test3" element={<ExamplePage />} /> */}
        {/* <Route path="/test" element={<FooterSection />} /> */}
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}

{/* 
<Route path="/chess" element={<Chess />} /> */}

     <Route path="/trivia" element={
       (isAuthenticated || myData)?
       (<Trivia/>):(<Home />)
     } 
     />

     <Route path="/tictactoe" element={
      (isAuthenticated || myData)?
      (<TicTacToe/>):(<Home />)

     }
      />
     {/* <Route path="/trivia" element={<TypingTest/>} /> */}

     <Route path="/sudoku" element={
        (isAuthenticated || myData)?
        (<Sudoku/>):(<Home />)
     } 
     />

     {/* <Route path="/highlow" element={<HighLow/>} />
     <Route path="/hangman" element={<Hangman/>} /> */}
     <Route path="/guessthelogo" element={
      (isAuthenticated || myData)?
      (<GuessTheLogo/>):(<Home />)
     } 
     />
     <Route path="/typingtest" element={
      (isAuthenticated || myData)?
      (<TypingTest/>):(<Home />)} />
     {/* <Route path="/appies" element={<Appies/>} /> */}
    

     <Route path="/games" element={
(isAuthenticated || myData)?
(<AppGame/>):(<Home />)
} />
     
     <Route path="/exercise" element={(isAuthenticated || myData)?
(<AppExercise/>):(<Home />)} />

     
      </Routes>
    </Router>
  )
}

export default App
