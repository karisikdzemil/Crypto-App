// src/firebase.js

// Importuješ samo ono što ti treba
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Konfiguracija sa Firebase konzole
const firebaseConfig = {
  apiKey: "AIzaSyBMPSTyjQsx_bLBC13z274h1rz9wIIiGps",
  authDomain: "crypto-app-424aa.firebaseapp.com",
  projectId: "crypto-app-424aa",
  storageBucket: "crypto-app-424aa.appspot.com",
  messagingSenderId: "474198297056",
  appId: "1:474198297056:web:460b37437b7381ec32c385",
};

// Inicijalizacija Firebase-a
const app = initializeApp(firebaseConfig);

// Exportuj servise koje ćeš koristiti
export const auth = getAuth(app);
export const db = getFirestore(app);
