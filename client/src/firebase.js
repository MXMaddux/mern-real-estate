// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-446be.firebaseapp.com",
  projectId: "mern-estate-446be",
  storageBucket: "mern-estate-446be.appspot.com",
  messagingSenderId: "84945005638",
  appId: "1:84945005638:web:9a599e80da6060d014ee47",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
