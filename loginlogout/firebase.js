// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace this placeholder config with your actual Firebase project config.
// You can find this in your Firebase Console (Project Settings > General > Your apps)
const firebaseConfig = {
  apiKey: "AIzaSyB7Bw1-LVjALTvVilFkBbp9FjbII4Rj8-k",
  authDomain: "login-logoutdanieljohnhome.firebaseapp.com",
  projectId: "login-logoutdanieljohnhome",
  storageBucket: "login-logoutdanieljohnhome.firebasestorage.app",
  messagingSenderId: "2395507239",
  appId: "1:2395507239:web:bef929e05e5530576d5c02",
  measurementId: "G-9M4HNQRY8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
