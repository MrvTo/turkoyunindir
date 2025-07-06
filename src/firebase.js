// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBxe1DluPbw6SIpaT9pLR1FEd_lHSD0iZ0",

  authDomain: "turktorrentindircomment.firebaseapp.com",

  projectId: "turktorrentindircomment",

  storageBucket: "turktorrentindircomment.firebasestorage.app",

  messagingSenderId: "212838609337",

  appId: "1:212838609337:web:04a3fb33da18ae2ce40668",

  measurementId: "G-3JWP12L0W8"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
