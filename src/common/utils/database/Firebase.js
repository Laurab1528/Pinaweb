// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  apiKey: "AIzaSyC9drdlj6aJsEB8AcDjlXXVi-xbczgLPHo",
  authDomain: "pina-4b96c.firebaseapp.com",
  projectId: "pina-4b96c",
  storageBucket: "pina-4b96c.appspot.com",
  messagingSenderId: "432539658889",
  appId: "1:432539658889:web:c6ff27eccd10c9526ef458",
  measurementId: "G-F0CC3108QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };
