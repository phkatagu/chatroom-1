
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB83sp9WDEwYGA3ETHn6jS5JHVq64jTcOo",
  authDomain: "chat-room-70080.firebaseapp.com",
  projectId: "chat-room-70080",
  storageBucket: "chat-room-70080.appspot.com",
  messagingSenderId: "169226091461",
  appId: "1:169226091461:web:67b8b9c256816873c629ac",
  measurementId: "G-2TEDQZP1JS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();