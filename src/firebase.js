import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADt0jQBUQD6vRAd5snIrHXur22s76dvzs",
    authDomain: "hotpot-3574b.firebaseapp.com",
    projectId: "hotpot-3574b",
    storageBucket: "hotpot-3574b.firebasestorage.app",
    messagingSenderId: "666341803427",
    appId: "1:666341803427:web:1f8b0bfd1764ece4b04616"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };