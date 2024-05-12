// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3fXFM4GmT5UZYWPw91iWvZDIAFUDXkvI",
  authDomain: "netflix-gpt-69585.firebaseapp.com",
  projectId: "netflix-gpt-69585",
  storageBucket: "netflix-gpt-69585.appspot.com",
  messagingSenderId: "738867756502",
  appId: "1:738867756502:web:943bffcc24cb7d40097877",
  measurementId: "G-Y3VP1JTYX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();