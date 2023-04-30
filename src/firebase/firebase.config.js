// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLZm9SrAxudWRS7LBDyDln1BSap4NOSH8",
  authDomain: "travel-guru-auth-29aa5.firebaseapp.com",
  projectId: "travel-guru-auth-29aa5",
  storageBucket: "travel-guru-auth-29aa5.appspot.com",
  messagingSenderId: "478688643520",
  appId: "1:478688643520:web:712b15810a44d573cba025",
  measurementId: "G-B13C9ZQ573",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
