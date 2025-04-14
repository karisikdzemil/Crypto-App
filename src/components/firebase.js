  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAEjkg2_nVKNhllNJKouf8H1IIC6Bih4q8",
    authDomain: "crypto-auth-91615.firebaseapp.com",
    projectId: "crypto-auth-91615",
    storageBucket: "crypto-auth-91615.firebasestorage.app",
    messagingSenderId: "796568717929",
    appId: "1:796568717929:web:0eeb2d64302b0cc370f0f8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const db = getFirestore(app);
  export default app;