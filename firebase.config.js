// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_APIKEY,
   authDomain: import.meta.env.VITE_AUTHDOMAIN,
   projectId: import.meta.VITE_PROJECTID,
   storageBucket: import.meta.VITE_STORAGEBUCKET,
   messagingSenderId: import.meta.VITE_MESSAGINGSENDERID,
   appId: import.meta.VITE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);