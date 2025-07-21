import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import admin from 'firebase-admin';
import { config } from 'dotenv';
config()

// Firebase configuracion base
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
