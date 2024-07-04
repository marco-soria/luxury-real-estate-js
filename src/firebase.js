// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "luxury-real-estate-js.firebaseapp.com",
  projectId: "luxury-real-estate-js",
  storageBucket: "luxury-real-estate-js.appspot.com",
  messagingSenderId: "1386723374",
  appId: "1:1386723374:web:30bd1148a7d6e84081c7bf"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()