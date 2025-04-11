// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMPSTyjQsx_bLBC13z274h1rz9wIIiGps",
  authDomain: "crypto-app-424aa.firebaseapp.com",
  projectId: "crypto-app-424aa",
  storageBucket: "crypto-app-424aa.firebasestorage.app",
  messagingSenderId: "474198297056",
  appId: "1:474198297056:web:460b37437b7381ec32c385",
  measurementId: "G-5XZ77VBJ8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);