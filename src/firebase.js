// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCYJVEia8V2nT-iWNWuXhKg4IVdCwPX48o",
  authDomain: "chat-36e8a.firebaseapp.com",
  projectId: "chat-36e8a",
  storageBucket: "chat-36e8a.appspot.com",
  messagingSenderId: "60903747723",
  appId: "1:60903747723:web:1b351295d6e6e1f9f4e48e",
  measurementId: "G-KNRRZFL8BY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()