
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCA3DpekTFTA7EmsTsgLyRXgSrekLAEfuQ",
  authDomain: "focusrealm-ed74e.firebaseapp.com",
  projectId: "focusrealm-ed74e",
  storageBucket: "focusrealm-ed74e.appspot.com",
  messagingSenderId: "118902969276",
  appId: "1:118902969276:web:c83fcbc61c369d8064d1b9",
  measurementId: "G-B9LSJRMD50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};