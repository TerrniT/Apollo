// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD95Qccg4YOQwZ_W7-Cnw_3FZrds1ViM48",
  authDomain: "apollo-firebase-auth.firebaseapp.com",
  projectId: "apollo-firebase-auth",
  storageBucket: "apollo-firebase-auth.appspot.com",
  messagingSenderId: "777186568816",
  appId: "1:777186568816:web:c26f3c353efd99206a22b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
