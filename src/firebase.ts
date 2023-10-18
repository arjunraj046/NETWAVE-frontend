// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3trY9OhNwLdzFapurtXkpvx61m-98z5c",
  authDomain: "netwave-384710.firebaseapp.com",
  projectId: "netwave-384710",
  storageBucket: "netwave-384710.appspot.com",
  messagingSenderId: "703037131815",
  appId: "1:703037131815:web:7ea6f3db483f064dd9d202",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const providerGoogle = new GoogleAuthProvider();
const providerFaceBook = new GoogleAuthProvider();


export const signInWithGoogle = () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      // console.log(result);
      return result
    })
    .catch((error) => {
      // console.log(error);
      return error

    });
};



export const signInwithFaceBook = () => {
  signInWithPopup(auth, providerFaceBook)
    .then((result) => {
      console.log(result);
      return result
    })
    .catch((error) => {
      console.log(error);
      return error
    });
}
