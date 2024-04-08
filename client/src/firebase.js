// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-3471f.firebaseapp.com",
  projectId: "real-estate-3471f",
  storageBucket: "real-estate-3471f.appspot.com",
  messagingSenderId: "302553427949",
  appId: "1:302553427949:web:cd399928edbdb6ddbe41e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);