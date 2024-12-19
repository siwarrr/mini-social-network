import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-331rWqEx0ZptIumVepte3oJeYyGOkIs",
    authDomain: "mini-social-network-54faf.firebaseapp.com",
    projectId: "mini-social-network-54faf",
    storageBucket: "mini-social-network-54faf.firebasestorage.app",
    messagingSenderId: "258447433616",
    appId: "1:258447433616:web:998cf5c6785bf1aabfdd15",
    measurementId: "G-ZG1HJ2EP0B"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);