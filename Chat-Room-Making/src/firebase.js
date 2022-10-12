// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE5RVJtHy-yoZHGpjyKMAV5qrnlxEAEQU",
  authDomain: "chat-room-making.firebaseapp.com",
  projectId: "chat-room-making",
  storageBucket: "chat-room-making.appspot.com",
  messagingSenderId: "423908445830",
  appId: "1:423908445830:web:cfc1528570c0bb5ce6cb07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();